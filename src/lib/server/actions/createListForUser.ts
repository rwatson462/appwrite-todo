'use server'

import {createSessionClient, getLoggedInUser} from "@/lib/server/appwrite";
import {ID} from "node-appwrite";
import {revalidatePath} from "next/cache";
import {myAccessPermissions} from "@/lib/config";

/**
 * Query to create a list for the logged in user.
 * We grab the logged-in user's id from the session and we add permissions during creation so only this user can interact with their list.
 * The call to revalidate path at the end causes the dashboard page to refresh to include this latest data.
 */

export async function createListForUser(form: FormData) {
  'use server'

  const user = await getLoggedInUser()

  const name = form.get('name')
  const user_id = user!.$id

  const { databases } = await createSessionClient()

  await databases.createDocument(
    process.env.APPWRITE_DB_ID!,
    process.env.APPWRITE_LISTS_COLLECTION_ID!,
    ID.unique(),
    {
      name,
      user_id,
    },
    myAccessPermissions(user_id),
  )

  revalidatePath('/dashboard')
}
