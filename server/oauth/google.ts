import { google } from "googleapis";
import { generateToken, getUserCollection } from "~/server/db/mongodb";
import type { User } from "~/share/types";

const runtimeConfig = useRuntimeConfig();

const oauth2Client = new google.auth.OAuth2(
  runtimeConfig.googleClientId,
  runtimeConfig.googleClientSecret,
  runtimeConfig.googleRedirectUrl,
);

const scopes = [
  "https://www.googleapis.com/auth/userinfo.email",
  "https://www.googleapis.com/auth/userinfo.profile",
];

function generateState() {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  );
}

export function generateGoogleLoginInfo(redirectUri: string) {
  const state = generateState();
  const url = oauth2Client.generateAuthUrl({
    access_type: "offline",
    state: state,
    redirect_uri: redirectUri,
    scope: scopes,
  });
  return {
    url,
    state,
  };
}

export async function getUserInfo(code: string) {
  const { tokens } = await oauth2Client.getToken(code);
  oauth2Client.setCredentials(tokens);
  const oauth2 = google.oauth2({
    version: "v2",
    auth: oauth2Client,
  });
  const userInfo = await oauth2.userinfo.get();

  if (!userInfo.data.name || !userInfo.data.email || !userInfo.data.picture) {
    throw new Error("Invalid user information received from Google");
  }

  return {
    email: userInfo.data.email,
    name: userInfo.data.name,
    avatar: userInfo.data.picture,
  };
}

export async function loginGoogle(code: string) {
  const userInfo = await getUserInfo(code);

  if (!userInfo) {
    throw new Error("Failed to retrieve user information from Google");
  }

  const user = await getUserCollection().findOne({ email: userInfo.email });

  if (user) {
    return user;
  } else {
    const user = await getUserCollection().insertOne({
      name: userInfo.name,
      email: userInfo.email,
      avatar: userInfo.avatar,
      token: generateToken(),
    });

    return {
      _id: user.insertedId.toString(),
      name: userInfo.name,
      email: userInfo.email,
      avatar: userInfo.avatar,
      token: generateToken(),
    } satisfies User;
  }
}
