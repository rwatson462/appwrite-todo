import Link from "next/link";

export function TextLink({href, text}: {href: string, text: string}) {
  return (
    <Link href={href} className={'underline text-gray-600 hover:text-blue-600'}>{text}</Link>
  )
}