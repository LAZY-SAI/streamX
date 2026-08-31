export default function Nav() {
  interface items{
    id: number,
    name:string
}  
  const items:items[] = [
    { id: 1, name: "home" },
    { id: 2, name: "watch movies" },
    {id:3, name:"upload movies"}
  ]
  return (
    <nav className="grid grid-cols-3 gap-4 border-r-2 border-r-black">
     {items.map((item) => {
       return (
         <div key={item.id} className="font-mono text-xl underline-none">{item.name}</div>
       )
     })}
    </nav>
  )
}