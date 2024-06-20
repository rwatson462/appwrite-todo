import {getLoggedInUser} from "@/lib/server/appwrite";
import {redirect} from "next/navigation";

/**
 * Convenience method to redirect the user to a different page if they are logged in.
 */
export async function redirectIfAuthenticated(to: string) {
  const user = await getLoggedInUser()

  if (user !== null) {
    redirect(to)
  }
}
