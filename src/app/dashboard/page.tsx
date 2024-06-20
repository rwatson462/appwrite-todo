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
  const lists = await getListsByUser(user!.$id)

  return (
    <Main>
      <PageTitle title={'Dashboard'} subtitle={'Welcome to the good stuff'} />

      <section className={'space-y-2'}>
        <h3 className='font-semibold text-lg'>You have {lists.total} list{lists.total !== 1 ? 's' : ''}</h3>

        <ul className={'space-y-1'}>
          { lists.documents.map(list => (
            <li key={`document-${list.$id}`} className={'border-b pl-4'}>
              <TextLink href={`/lists/${list.$id}`} text={list.name}/>
            </li>
          ))}
        </ul>

        <CreateListForm />
      </section>
    </Main>
  )
}