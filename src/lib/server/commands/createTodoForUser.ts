'use server'

import {createSessionClient} from "@/lib/server/appwrite";
import {ID} from "node-appwrite";

export async function createTodoForUser(title: string, listId: string, userId: string) {
  const { databases } = await createSessionClient()

  await databases.createDocument(
    process.env.APPWRITE_DB_ID!,
    process.env.APPWRITE_TODOS_COLLECTION_ID!,
    ID.unique(),
    {
      title,
      user_id: userId,
      list_id: listId
    },
  )
}
