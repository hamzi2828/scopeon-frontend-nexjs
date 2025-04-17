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
    const decoded: { id: string; fullname: string; email: string; role: Partial<UserRole> } = jwtDecode(token); // Decode the token
    // Ensure all required UserRole fields are present, else provide defaults
    const role = {
      _id: decoded.role._id || '',
      createdAt: decoded.role.createdAt || '',
      permissions: decoded.role.permissions || [],
      roleName: decoded.role.roleName || '',
      __v: decoded.role.__v || 0,
    };
    const userDetails: UserDetails = {
      _id: decoded.id,
      fullname: decoded.fullname,
      email: decoded.email,
      role,
    };
    return userDetails;
  } catch (error) {
    console.error("Failed to decode the token:", error);
    return null;
  }
}
