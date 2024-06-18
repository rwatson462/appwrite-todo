import Link from "next/link";

export function HeaderLink({ href, text}: { href: string, text: string }) {
  return (
    <Link href={href} className={'transition-all px-4 py-2 rounded-lg border border-grey-200 hover:border-blue-300 hover:underline hover:shadow-lg shadow'}>
      {text}
    </Link>
  )
}