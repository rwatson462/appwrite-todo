'use server'

import {createSessionClient} from "@/lib/server/appwrite";

export async function findTodoByIdAndUser(todoId: string, userId: string) {
  const { databases } = await createSessionClient()

  const todo = await databases.getDocument(
    process.env.APPWRITE_DB_ID!,
    process.env.APPWRITE_TODOS_COLLECTION_ID!,
    todoId,
  )

  if (todo.user_id !== userId) {
    throw new Error('Todo not found')
  }

  return todo
}
