import {PageTitle} from "@/components/PageTitle";
import {LoggedInWrapper} from "@/components/Auth/LoggedInWrapper";
import {TextLink} from "@/components/TextLink";
import {LoggedOutWrapper} from "@/components/Auth/LoggedOutWrapper";
import {Main} from "@/components/Main";

export default async function Page() {
  return (
    <Main>
      <PageTitle title={'Oops'} subtitle={'Something went wrong, sorry'}/>
      <p>
        Try going&nbsp;
        <LoggedInWrapper><TextLink href={'/dashboard'} text={'Back to the dashboard'}/></LoggedInWrapper>
        <LoggedOutWrapper><TextLink href={'/'} text={'Back to the front page'}/></LoggedOutWrapper>
        .
      </p>
    </Main>
  )
}