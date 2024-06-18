import {Main} from "@/components/Main"
import {PageTitle} from "@/components/PageTitle"


export default function Page({}) {
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