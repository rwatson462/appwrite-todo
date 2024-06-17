import Link from "next/link";

export function FooterLink({href, text}: { href: string, text: string }) {
  return (
    <Link
      href={href}
      className={'transition-all px-6 py-4 rounded-lg border border-grey-200 hover:border-blue-300 hover:underline hover:shadow-lg shadow'}
      target={'_blank'}
      rel={'noopener noreferrer'}
    >{text}</Link>
  );
}