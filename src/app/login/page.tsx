import {Main} from "@/components/Main";
import {PageTitle} from "@/components/PageTitle";
import {Input} from "@/components/Form/Input";
import {login} from "@/actions/login";

export default function Page({}) {
  return (
    <Main>
      <PageTitle title={'Login page'} subtitle={'Stick your details in below to access the good stuff'}/>

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
