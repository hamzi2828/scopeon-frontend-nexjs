// /src/app/(routes)/signin/service/signinService.tsx

import axios from 'axios';
import { LoginErrorType, LoginRequestType } from '../types/types';  // Import the LoginErrorType

const API_BASE_URL = "http://localhost:3001/api";

export const loginUser = async ({ email, password }: LoginRequestType) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/users/login`, {
        email,
        password,
      });
  
      // Assuming the response returns { message, token }
      return response.data; // { message, token }
    } catch (err) {
      // Custom error handling
      if (axios.isAxiosError(err)) {
        const errorData = err.response?.data as LoginErrorType;
  
        // Handle custom error format
        if (errorData) {
          const { statusCode, message } = errorData;
          throw new Error(`Error ${statusCode}: ${message}`);
        } else {
          throw new Error('Unknown error occurred during login');
        }
      } else {
        // In case it's not an Axios error
        throw new Error('An unexpected error occurred');
      }
    }
  };