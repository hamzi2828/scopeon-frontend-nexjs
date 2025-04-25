//src/helper/helper.tsx



import Cookies from 'js-cookie';
import {jwtDecode} from 'jwt-decode';

type UserDetails = {
  _id: string;
  fullname: string;
  email: string;
  businessName: string;
  businessAddress: string;
  phoneNumber: string;
  website: string;
  businessType: string;
  userType: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  iat: number;
  exp: number;
};


export const getTokenFromCookies = (): string | null => {
    const token = Cookies.get('token');
    return token ? token : null;
  };


  export const getUserIdFromToken = (): string | null => {
    const token = Cookies.get('token');
    if (!token) return null;
    
    try {
      const decoded: { id: string } = jwtDecode(token); // Decode the token      
      return decoded.id || null; // Assuming user ID is stored as 'userId' in the token
    } catch (error) {
      console.error('Failed to decode the token:', error);
      return null;
    }
  };

export const getUserDetailsFromToken = (): UserDetails | null => {
  const token = Cookies.get("token");
  if (!token) return null;

  try {
    const decoded = jwtDecode(token); // Decode the token
    console.log('Decoded JWT payload:', decoded);
    return decoded as UserDetails;
  } catch (error) {
    console.error("Failed to decode the token:", error);
    return null;
  }
}
