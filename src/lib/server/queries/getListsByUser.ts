'use server'

import {createSessionClient} from "@/lib/server/appwrite";
import {Query} from "node-appwrite";

export async function getListsByUser(userId: string) {
  const { databases } = await createSessionClient()

  return await databases.listDocuments(
    process.env.APPWRITE_DB_ID!,
    process.env.APPWRITE_LISTS_COLLECTION_ID!,
    [
      Query.equal('user_id', userId),
    ],
  )
}
