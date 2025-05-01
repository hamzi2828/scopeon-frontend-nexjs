
import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3001"; // Use env variable, fallback to localhost

export const getFeaturedListings = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/listings/getFeaturedListings`);
      return response.data; 
    } catch (err) {
      // Custom error handling
      if (axios.isAxiosError(err)) {
        const errorData = err.response?.data;
  
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