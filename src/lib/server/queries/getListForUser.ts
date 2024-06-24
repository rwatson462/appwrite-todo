'use server'

import {createSessionClient} from "@/lib/server/appwrite";
import {Query} from "node-appwrite";

export async function getListForUser(userId: string, id: string) {
  const { databases } = await createSessionClient()

  const list = await databases.getDocument(
    process.env.APPWRITE_DB_ID!,
    process.env.APPWRITE_LISTS_COLLECTION_ID!,
    id,
  )

  if (list.user_id !== userId) {
    throw new Error('List not found')
  }

  return list
}
