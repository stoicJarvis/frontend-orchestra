import { NavLink } from "react-router-dom"
import { PAGES } from "../utils/constansts"

export const Navbar = () => {
  return (
    <nav className="bg-white p-4 text-m text-black">
      <div className="flex justify-center gap-12">
        {PAGES.map((page) => (
          <NavLink
            key={page.pageRoute}
            to={page.pageRoute}
            className={({ isActive }) =>
              isActive
                ? "border-b-2 border-black pb-1 text-black"
                : "hover:text-gray-600"
            }
          >
            {page.navbarName}
          </NavLink>
        ))}
      </div>
    </nav>
  )
}
