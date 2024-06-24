import {createSessionClient} from "@/lib/server/appwrite";

export async function setTodoCompletionStatus(todoId: string, userId: string, complete: boolean) {
  const { databases } = await createSessionClient()

  return await databases.updateDocument(
    process.env.APPWRITE_DB_ID!,
    process.env.APPWRITE_TODOS_COLLECTION_ID!,
    todoId,
    {
      complete,
    },
  )
}