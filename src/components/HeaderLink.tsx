import Link from "next/link";

export function HeaderLink({ href, text}: { href: string, text: string }) {
  return (
    <Link href={href} className={'transition-all border-b-2 border-grey-100 hover:border-blue-300 hover:bg-blue-200 px-4 py-2'}>
      {text}
    </Link>
  )
}