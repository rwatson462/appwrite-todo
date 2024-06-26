import {FooterLink} from "@/components/FooterLink";

interface FooterItems {
  href: string;
  text: string;
}

export function Footer({items}: { items: FooterItems[] }) {
  return (
    <footer className={'grid grid-cols-4 gap-8 items-center max-w-[1000px] mx-auto p-4'}>
      { items.map((item, index) => (
        <FooterLink href={item.href} text={item.text} key={index}/>
      ))}
    </footer>
  )
}