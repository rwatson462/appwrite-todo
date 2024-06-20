import {Main} from "@/components/Main"
import {PageTitle} from "@/components/PageTitle"
import {redirectIfNotAuthenticated} from "@/lib/server/redirectIfNotAuthenticated";

/**
 * The dashboard page.
 * Notes:
 *   SSR checking for logged in user means you cannot access this page if you are not logged in.
 *   ...
 */

export default async function Page({}) {
  await redirectIfNotAuthenticated('/login')

  return (
    <Main>
      <PageTitle title={'Dashboard'} subtitle={'Welcome to the good stuff'} />

      <section>
        Your lists
      </section>

      <section>
        Invite a friend
      </section>

      <section>
        Err...
      </section>
    </Main>
  )
}