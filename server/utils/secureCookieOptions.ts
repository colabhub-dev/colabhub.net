import type {CookieSerializeOptions} from "cookie-es";

export default function (): CookieSerializeOptions {
  return {
    httpOnly: true, // Prevents client-side JavaScript from accessing the cookie
    secure: process.env.NODE_ENV !== "development", // Secure cookies in production
    sameSite: "lax", // Lax is a good default for CSRF protection
    maxAge: 60 * 60 * 24 * 7, // 7 days
  }
}