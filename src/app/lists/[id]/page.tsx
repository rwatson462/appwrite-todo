import {Main} from "@/components/Main";
import {PageTitle} from "@/components/PageTitle";
import {getLoggedInUser} from "@/lib/server/appwrite";
import {getListForUser} from "@/lib/server/queries/getListForUser";
import {getTodosByListAndUser} from "@/lib/server/queries/getTodosByList";
import {CreateTodoForm} from "@/components/Lists/Forms/CreateTodoForm";
import {FaRegSquare, FaRegSquareCheck} from "react-icons/fa6";
import {toggleTodoCompletionStatus} from "@/lib/server/actions/toggleTodoCompletionStatus";

export default async function Page({params: {id}}: { params: { id: string } }) {
  const user = await getLoggedInUser()

  const list = await getListForUser(user!.$id, id)
  const todos = await getTodosByListAndUser(list.$id, user!.$id)

  return (
    <Main>
      <PageTitle title={list.name}/>
      <ul>
        {todos.map(todo => (
          <li key={todo.$id} className={'flex justify-between items-center'}>
            <span className={todo.complete ? 'line-through opacity-50' : ''}>{todo.title}</span>
            <form action={toggleTodoCompletionStatus}>
              <input type="hidden" name={'todoId'} value={todo.$id}/>
              <button type={'submit'}>{todo.complete ? <FaRegSquareCheck className={'text-emerald-600 h-4 w-4'}/> :
                <FaRegSquare className={'text-gray-900 h-4 w-4'}/>}</button>
            </form>
          </li>
        ))}
      </ul>

      <CreateTodoForm listId={list.$id}/>
    </Main>
  )
}