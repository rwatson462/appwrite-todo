import {Main} from "@/components/Main";
import {PageTitle} from "@/components/PageTitle";
import {createSessionClient, getLoggedInUser} from "@/lib/server/appwrite";
import {getListForUser} from "@/lib/server/queries/getListForUser";

export default async function Page({params: { id } }: { params: { id: string } }) {
  const { databases } = await createSessionClient()
  const user = await getLoggedInUser()

  /**
   * todo: Add an error-boundary in here to handle not being able to get the list
   */
  try {
    const list = await getListForUser(user!.$id, id)

    return (
      <Main>
        <PageTitle title={list.name}/>
        <p>ID: {id}</p>
      </Main>
    )
  } catch(err) {
    // @ts-ignore Yes, err.response.message does actually exist on an Appwrite exception
    const message = err.response.message

    return (
      <Main>
        <PageTitle title={'Oops'}/>
        <p>{message}</p>
      </Main>
    )
  }
}