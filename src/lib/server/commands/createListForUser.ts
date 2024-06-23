'use server'

import {createSessionClient} from "@/lib/server/appwrite";
import {ID} from "node-appwrite";
import {myAccessPermissions} from "@/lib/config";

export async function createListForUser(listName: string, userId: string) {
  const { databases } = await createSessionClient()

  await databases.createDocument(
    process.env.APPWRITE_DB_ID!,
    process.env.APPWRITE_LISTS_COLLECTION_ID!,
    ID.unique(),
    {
      name: listName,
      user_id: userId,
    },
    myAccessPermissions(userId),
  )
}
