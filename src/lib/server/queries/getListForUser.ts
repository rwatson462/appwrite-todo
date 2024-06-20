'use server'

import {createSessionClient} from "@/lib/server/appwrite";
import {Query} from "node-appwrite";

export async function getListForUser(userId: string, id: string) {
  const { databases } = await createSessionClient()

  return await databases.getDocument(
    process.env.APPWRITE_DB_ID!,
    process.env.APPWRITE_LISTS_COLLECTION_ID!,
    id,
  )
}
