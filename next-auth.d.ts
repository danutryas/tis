import { Session } from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    // what ever properties added, add type here
    user: User;
    account: Account;
    profile: Profile;
  }
}
/**
 * The shape of the user object returned in the OAuth providers' `profile` callback,
 * or the second parameter of the `session` callback, when using a database.
 */
interface User {
  username: string;
  password: string;
}
/**
 * Usually contains information about the provider being used
 * and also extends `TokenSet`, which is different tokens returned by OAuth Providers.
 */
interface Account {
  id: string;
  username: string;
  email: string;
  token: string;
  phoneNumber: string;
}
/** The OAuth profile returned from your provider */
interface Profile {
  id: string;
  username: string;
  email: string;
  token: string;
  phoneNumber: string;
}

declare module "next-auth/jwt" {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT {
    /** OpenID ID Token */
    idToken?: string;
    profile: Profile;
  }
}
