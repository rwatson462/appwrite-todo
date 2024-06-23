import {Main} from "@/components/Main";
import {PageTitle} from "@/components/PageTitle";
import {Input} from "@/components/Form/Input";
import {registerUser} from "@/lib/server/actions/registerUser";
import {getLoggedInUser} from "@/lib/server/appwrite";
import {redirect} from "next/navigation";
import {TextLink} from "@/components/TextLink";



export default async function Page({}) {
  const user = await getLoggedInUser()

  if (user !== null) {
    redirect('/dashboard')
  }

  return (
    <Main>
      <PageTitle title={'Register for an account'}
                 subtitle={'Creating an account is FREE and I won\'t sell your data'}/>

      <p>Already have an account? <TextLink href={'/login'} text={'Log in here'}/></p>

      <form className={'space-y-4 max-w-md'} action={registerUser}>
        <fieldset className={'grid grid-cols-2 gap-4 items-center'}>
          <label htmlFor={'name'}>Your name</label>
          <Input type={'name'} placeholder={'Steve'} name={'name'} id={'name'}/>
        </fieldset>
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
            className={'transition-all hover:underline bg-blue-500 hover:shadow-xl shadow text-white rounded px-4 py-2'}>Register
          </button>
        </p>
      </form>
    </Main>
  )
}