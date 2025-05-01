import axios from "axios";
import { RegisterErrorType } from "../types/types";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:6000"; // Use env variable, fallback to localhost

export interface RegisterUserPayload {
  fullname: string;
  email: string;
  password: string;
  businessName?: string;
  businessAddress?: string;
  phoneNumber?: string;
  website?: string;
  businessType?: string;
  userType?: string;
  role?: string;
}

export const registerUser = async (userData: RegisterUserPayload) => {
  try {
    console.log("API_BASE_URL", API_BASE_URL);  // Log the API_BASE_URL
    const response = await axios.post(`${API_BASE_URL}/users/register`, userData);
    return response.data; // This contains the response with the message and user info
  } catch (error: unknown) {
    // Type assertion for axios error object
    if (axios.isAxiosError(error)) {
      if (error.response) {
        // Type-cast the response data to RegisterErrorType
        const { status, data } = error.response;

        if (data) {
          const registerError = data as RegisterErrorType;

          // Handle based on status codes
          switch (status) {
            case 400:
              throw new Error(registerError.message || "User already exists.");
            case 500:
              throw new Error("Internal server error. Please try again later.");
            default:
              throw new Error("An unexpected error occurred.");
          }
        }
      } else if (error.request) {
        // No response from the server
        throw new Error("No response from the server. Please check your network and try again.");
      }
    }

    // General error fallback if the error is not an AxiosError
    throw new Error("An unexpected error occurred while setting up the request.");
  }
};
