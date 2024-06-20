import {getLoggedInUser} from "@/lib/server/appwrite";
import {redirect} from "next/navigation";
import {Main} from "@/components/Main";
import {PageTitle} from "@/components/PageTitle";

export default async function Page() {
  const user = await getLoggedInUser()

  if (!user) {
    redirect('/login')
  }

  return (
    <Main>
      <PageTitle title={'Profile'} subtitle={'It\'s all about you'} />

      <section>
        Your details, {user.name}.
      </section>
    </Main>
  )
}
