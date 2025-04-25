export type UserRole = {
    _id: string;
    createdAt: string;
    permissions: string[]; // An array of strings for permissions
    roleName: string;
    __v: number;
  };
  
  export type UserDetails = {
    _id: string;
    fullname: string;
    email: string;
  };