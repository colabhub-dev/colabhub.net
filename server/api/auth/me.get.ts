import { getUserCollection } from "~/server/db/mongodb";

export default defineEventHandler(async (event) => {
  const token = getCookie(event, "token");

  if (!token) {
    throw createError({
      statusCode: 401,
      statusMessage: "Unauthorized",
    });
  }

  const user = await getUserCollection().findOne({ token: token });

  if (!user) {
    throw createError({
      statusCode: 401,
      statusMessage: "Unauthorized",
    });
  }

  return {
    ...user,
    _id: user._id.toString("hex"),
  };
});
