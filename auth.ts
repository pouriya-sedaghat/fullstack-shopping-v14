// import NextAuth from "next-auth";
// import Credentials from "next-auth/providers/credentials";

// import db from "./utils/db";
// import User from "./models/user.model";

// export const { handlers, signIn, signOut, auth } = NextAuth({
//   session: { strategy: "jwt" },
//   callbacks: {
//     async jwt({ token, user }) {
//       if (user?._id) token._id = user._id;
//       if (user?.isAdmin) token.isAdmin = user.isAdmin;

//       return token;
//     },
//     async session({ session, token }) {
//       if (token?._id) session.user._id = token._id;
//       if (token?.isAdmin) session.user.isAdmin = token.isAdmin;

//       return session;
//     },
//   },
//   providers: [
//     Credentials({
//       async authorize(credentials) {
//         await db.connect();

//         const user = await User.findOne({ email: credentials.email });

//         if (user && true) {
//           return {
//             _id: user._id,
//             username: user.username,
//             email: user.email,
//             isAdmin: user.isAdmin,
//             image: "f",
//           };
//         }
//         throw new Error("Invalid Email Or Password.");
//       },
//     }),
//   ],
// });
