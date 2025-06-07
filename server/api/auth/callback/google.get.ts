import { loginGoogle } from "~/server/oauth/google";

export default defineEventHandler(async (event) => {
  const { code, state } = getQuery(event);

  if (!code || typeof code !== "string" || !state) {
    throw createError({
      statusCode: 400,
      statusMessage: "Bad Request: Missing code or state",
    });
  }

  const storedState = getCookie(event, "google_oauth_state");
  if (storedState !== state) {
    throw createError({
      statusCode: 403,
      statusMessage: "Forbidden: Invalid state",
    });
  }

  const user = await loginGoogle(code);

  if (!user) {
    throw createError({
      statusCode: 401,
      statusMessage: "Unauthorized: Failed to login with Google",
    });
  }

  setCookie(event, "token", user.token, secureCookieOptions());
  await sendRedirect(event, "/", 302);
});
