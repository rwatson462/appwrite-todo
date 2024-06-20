
interface InputProps {
  type: string;
  name: string;
  id: string;
  placeholder?: string;
}

export function Input({ id, name, placeholder, type = 'text'}: InputProps ){
  return (
    <input type={type} id={id} name={name} placeholder={placeholder ?? ''} className={'rounded border border-gray-300 px-2 py-1'}/>
  )
}
