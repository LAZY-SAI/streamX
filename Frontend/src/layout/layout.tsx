import Nav from "../components/nav/Nav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-2">
      <div className="bg-(--main-color) h-full w-full border border-gray-600 mt-1">
        <Nav />
        <main className="flex-1  overflow-y-auto bg-(--main-color) ">
          {children}
        </main>
      </div>
   </div>
  );
}