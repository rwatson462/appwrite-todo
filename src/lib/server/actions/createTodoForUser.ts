'use server'

import {getLoggedInUser} from "@/lib/server/appwrite";
import {revalidatePath} from "next/cache";
import {createTodoForUser as createTodoForUserCommand} from "@/lib/server/commands/createTodoForUser";

/**
 * Query to create a list for the logged in user.
 * We grab the logged-in user's id from the session and we add permissions during creation so only this user can interact with their list.
 * The call to revalidate path at the end causes the dashboard page to refresh to include this latest data.
 */

export async function createTodoForUser(form: FormData) {
  const user = await getLoggedInUser()

  if (user === null) {
    throw new Error('No user logged in.')
  }

  const title = form.get('title') as string
  const list_id = form.get('list_id') as string
  const user_id = user!.$id

  await createTodoForUserCommand(title, list_id, user_id)

  revalidatePath(`/lists/${list_id}`)
}
