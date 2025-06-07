import {generateGoogleLoginInfo} from "~/server/oauth/google";
import secureCookieOptions from "~/server/utils/secureCookieOptions";

export default defineEventHandler(async event=> {
  const {redirect} = getQuery(event);
  const config = useRuntimeConfig(event);
  const {url, state} = generateGoogleLoginInfo(config.googleRedirectUrl);

  setCookie(event, "google_oauth_state", state, secureCookieOptions());
  await sendRedirect(event, url, 302);
})