import {PropsWithChildren} from "react";

export function Main({children}: PropsWithChildren) {
 return (
   <main className="max-w-[1000px] mx-auto rounded-xl my-12 p-12 shadow space-y-6">
     {children}
   </main>
 )
}