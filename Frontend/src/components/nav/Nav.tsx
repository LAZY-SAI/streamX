import { NavLink } from "react-router-dom";

interface NavItem {
  id: number;
  name: string;
  to: string;
}

const NAV_ITEMS: NavItem[] = [
  { id: 1, name: "product", to: "/product" },
  { id: 2, name: "pricing", to: "/pricing" },
  { id: 3, name: "resources", to: "/resources" },
  { id: 4, name: "about", to: "/about" },
];

export default function Nav() {
  return (
    <nav
      className="grid border border-black/20 bg-(--main-color) font-mono uppercase text-sm tracking-wide"
      style={{ gridTemplateColumns: `2fr repeat(${NAV_ITEMS.length}, 1fr) 1fr` }}
    >
      {/* logo */}
      <div className="flex items-center gap-2 px-5 py-4">
        <span className="text-lg  tracking-norma">StreamX</span>
      </div>

      {/* nav items */}
      {NAV_ITEMS.map((item) => (
        <NavLink
          key={item.id}
          to={item.to}
          className="flex items-center border-l border-black/20 px-5 py-4 hover:bg-black/5"
        >
          {item.name}
        </NavLink>
      ))}

      {/* contact us - styled differently */}
      <NavLink
        to="/contact"
        className="flex items-center justify-between gap-2 border-l border-black/20 px-5 py-4 text-orange-600"
      >
        contact us
        <span aria-hidden>→</span>
      </NavLink>
    </nav>
  );
}

