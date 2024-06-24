'use server'

import {getLoggedInUser} from "@/lib/server/appwrite";
import {findTodoByIdAndUser} from "@/lib/server/queries/findTodoByIdAndUser";
import {setTodoCompletionStatus} from "@/lib/server/commands/setTodoCompletionStatus";
import {revalidatePath} from "next/cache";

export async function toggleTodoCompletionStatus(form: FormData) {
  const user = await getLoggedInUser()

  if (user === null) {
    throw new Error('No user logged in.')
  }

  const todoId = form.get('todoId') as string

  const todo = await findTodoByIdAndUser(todoId, user.$id)

  await setTodoCompletionStatus(todoId, user.$id, !todo.completed)

  revalidatePath(`/lists/${todo.list_id}`)
}
