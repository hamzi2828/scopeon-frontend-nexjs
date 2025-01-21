//src/app/(routes)/signin/types/types.ts

export type LoginRequestType = {
    email: string;
    password: string;
  };
export type LoginErrorType = {
    statusCode: number;
    message: string;
  };
  