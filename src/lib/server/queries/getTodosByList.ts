'use server'

import {createSessionClient, getLoggedInUser} from "@/lib/server/appwrite";
import {Query} from "node-appwrite";

export async function getTodosByListAndUser(listId: string, userId: string) {
  const { databases } = await createSessionClient()

  const {documents} = await databases.listDocuments(
    process.env.APPWRITE_DB_ID!,
    process.env.APPWRITE_TODOS_COLLECTION_ID!,
    [
      Query.equal('user_id', userId),
      Query.equal('list_id', listId),
    ],
  )

  return documents
}
