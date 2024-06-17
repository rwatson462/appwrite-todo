import Link from "next/link";
import {Main} from "@/components/Main";
import {PageTitle} from "@/components/PageTitle";

export default function Home() {
  return (
    <Main>
      <PageTitle title={'Appwrite-todo'} subtitle={'A silly app to make and check off lists'} />

      <section>
        <p>This bit shows when you're not logged in.</p>
        <p><Link href={'/login'} className={'underline text-gray-600 hover:text-blue-600'}>Log in</Link> to get started.</p>
      </section>
    </Main>
  );
}
