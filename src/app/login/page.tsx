import {Main} from "@/components/Main";
import {PageTitle} from "@/components/PageTitle";
import {Input} from "@/components/Form/Input";
import {login} from "@/lib/server/actions/login";
import {redirectIfAuthenticated} from "@/lib/server/redirectIfAuthenticated";
import {TextLink} from "@/components/TextLink";

/**
 * The login page.
 * Notes:
 *   SSR checking for logged in user means you cannot access this page if you are logged in.
 */
export default async function Page({}) {
  await redirectIfAuthenticated('/dashboard')

  return (
    <Main>
      <PageTitle title={'Login page'} subtitle={'Stick your details in below to access the good stuff'}/>

      <p>Don't have an account? <TextLink href={'/register'} text={'Sign up here'}/></p>

      <form className={'space-y-4 max-w-md'} action={login}>
        <fieldset className={'grid grid-cols-2 gap-4 items-center'}>
          <label htmlFor={'email'}>Email</label>
          <Input type={'email'} placeholder={'user@example.com'} name={'email'} id={'email'}/>
        </fieldset>
        <fieldset className={'grid grid-cols-2 gap-4 items-center'}>
          <label htmlFor={'password'}>Password</label>
          <Input type={'password'} placeholder={'********'} name={'password'} id={'password'}/>
        </fieldset>
        <p>
          <button
            className={'transition-all hover:underline bg-blue-500 hover:shadow-xl shadow text-white rounded px-4 py-2'}>Log in
          </button>
        </p>
      </form>
    </Main>
  )
}
