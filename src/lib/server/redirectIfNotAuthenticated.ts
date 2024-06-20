import {getLoggedInUser} from "@/lib/server/appwrite";
import {redirect} from "next/navigation";

/**
 * Convenience method to redirect the user to a different page if they are NOT logged in.
 */
export async function redirectIfNotAuthenticated(to: string) {
  const user = await getLoggedInUser()

  if (user === null) {
    redirect(to)
  }
}
