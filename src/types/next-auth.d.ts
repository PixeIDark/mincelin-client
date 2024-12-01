import 'next-auth';

declare module 'next-auth' {
  interface Session {
    accessToken?: string;
    refreshToken?: string;
    user: {
      id: number;
      email: string;
      name: string;
    };
  }

  interface User {
    id: number;
    email: string;
    name: string;
    accessToken: string;
    refreshToken: string;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    accessToken?: string;
    refreshToken?: string;
    user: {
      id: number;
      email: string;
      name: string;
    };
  }
}
