//src/app/(routes)/admin/services/dashboardservice.tsx
import { useRouter } from "next/navigation"; // If you're using Next.js Router
import Cookies from "js-cookie";

export const logoutUser = () => {
  // Remove token and other authentication data from cookies
  Cookies.remove("token"); // Clear the stored token

  // Redirect user to the login page (or home page, based on your app's flow)
  const router = useRouter();
  router.push("/signin"); // Or to another page if needed, like home ("/")
};
