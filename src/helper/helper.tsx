//src/helper/helper.tsx



import Cookies from 'js-cookie';
import {jwtDecode} from 'jwt-decode';
import { UserDetails } from '../types/types';

export const getTokenFromCookies = (): string | null => {
    const token = Cookies.get('token');
    return token ? token : null;
  };


  export const getUserIdFromToken = (): string | null => {
    const token = Cookies.get('token');
    if (!token) return null;
    
    try {
      const decoded: any = jwtDecode(token); // Decode the token      
      return decoded.id || null; // Assuming user ID is stored as 'userId' in the token
    } catch (error) {
      console.error('Failed to decode the token:', error);
      return null;
    }
  };

export const getUserDetailsFromToken = (): UserDetails | null => {
  const token = Cookies.get('token');
  if (!token) return null;

  try {
    const decoded: any = jwtDecode(token); // Decode the token
    // Extract user details from the decoded payload
    const userDetails = {
      _id: decoded.id,
      fullname: decoded.fullname,
      email: decoded.email,
      role: decoded.role,
    };
    return userDetails;
  } catch (error) {
    console.error('Failed to decode the token:', error);
    return null;
  }
};
