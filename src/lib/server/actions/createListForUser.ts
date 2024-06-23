'use server'

import {getLoggedInUser} from "@/lib/server/appwrite";
import {revalidatePath} from "next/cache";
import {createListForUser as createListForUserCommand} from "@/lib/server/commands/createListForUser";

/**
 * Query to create a list for the logged in user.
 * We grab the logged-in user's id from the session and we add permissions during creation so only this user can interact with their list.
 * The call to revalidate path at the end causes the dashboard page to refresh to include this latest data.
 */

export async function createListForUser(form: FormData) {
  'use server'

  const user = await getLoggedInUser()

  if (user === null) {
    throw new Error('No user logged in.')
  }

  const name = form.get('name') as string
  const user_id = user!.$id

  await createListForUserCommand(name, user_id)

  revalidatePath('/dashboard')
}
