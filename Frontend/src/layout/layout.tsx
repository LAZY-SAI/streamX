
import Nav from "../nav/Nav";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={"flex w-full h-full"}>
      
      <Nav />
      <main className="flex-1 h-full overflow-y-auto bg-(--main-color) p-6">
              {children}
            </main>
    </div>
  )
}