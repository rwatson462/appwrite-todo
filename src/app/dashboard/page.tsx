import {Main} from "@/components/Main"
import {PageTitle} from "@/components/PageTitle"
import {redirectIfNotAuthenticated} from "@/lib/server/redirectIfNotAuthenticated";
import {getListsByUser} from "@/lib/server/queries/getListsByUser";
import {getLoggedInUser} from "@/lib/server/appwrite";
import {CreateListForm} from "@/components/Lists/Forms/CreateListForm";
import {TextLink} from "@/components/TextLink";

/**
 * The dashboard page.
 * Notes:
 *   SSR checking for logged in user means you cannot access this page if you are not logged in.
 *   ...
 */

export default async function Page({}) {
  await redirectIfNotAuthenticated('/login')

  const user = await getLoggedInUser()
  const {documents: lists, total: listCount} = await getListsByUser(user!.$id)

  return (
    <Main>
      <PageTitle title={'Dashboard'} subtitle={'Welcome to the good stuff'} />

      <section className={'space-y-8'}>
        <h3 className='font-semibold text-lg'>You have {listCount} list{listCount !== 1 ? 's' : ''}</h3>

        <ul className={'space-y-1 border rounded-lg p-4 border'}>
          { lists.map(list => (
            <li key={`document-${list.$id}`}>
              <TextLink href={`/lists/${list.$id}`} text={list.name}/>
            </li>
          ))}
        </ul>

        <CreateListForm />
      </section>
    </Main>
  )
}