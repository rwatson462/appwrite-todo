import {HeaderLink} from "@/components/HeaderLink";

interface HeaderItem {
  text: string;
  href: string;
}

export function Header({leftItems, rightItems}: { leftItems: HeaderItem[], rightItems: HeaderItem[]}) {
  return (
    <header className={'flex items-center justify-between max-w-[1000px] mx-auto p-4 space-x-4'}>
      <ul className={'flex space-x-4 items-center'}>
        {leftItems.map((item, index) => (
          <li key={index}>
            <HeaderLink href={item.href} text={item.text}/>
          </li>
        ))}
      </ul>
      <ul className={'flex space-x-4 items-center'}>
        {rightItems.map((item, index) => (
          <li key={index}>
            <HeaderLink href={item.href} text={item.text}/>
          </li>
        ))}
      </ul>
    </header>
  )
}