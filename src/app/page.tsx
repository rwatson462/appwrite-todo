import Link from "next/link";
import {Main} from "@/components/Main";
import {PageTitle} from "@/components/PageTitle";
import {TextLink} from "@/components/TextLink";

export default function Home() {
  return (
    <Main>
      <PageTitle title={'Appwrite-todo'} subtitle={'A silly app to make and check off lists'} />

      <section>
        <p>This bit shows when you're not logged in.</p>
        <p>
          <TextLink href={'/login'} text={'Login'}/> or&nbsp;
          <TextLink href={'/register'} text={'Register'}/> to get started.</p>
      </section>
    </Main>
  )
}
