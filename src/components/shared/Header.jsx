import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="mobile-header-bg w-full h-44 flex justify-center gap-4 pt-8">
      <NavLink
        to="/subscription/personal"
        className={({ isActive }) =>
          isActive
            ? "w-8 h-8 rounded-full flex justify-center bg-sky-blu items-center text-sm font-bold text-general"
            : "w-8 h-8 rounded-full border border-solid border-white flex justify-center items-center text-sm font-bold text-white"
        }
      >
        1
      </NavLink>
      <NavLink
        to="/subscription/plan"
        className={({ isActive }) =>
          isActive
            ? "w-8 h-8 rounded-full flex justify-center bg-sky-blu items-center text-sm font-bold text-general"
            : "w-8 h-8 rounded-full border border-solid border-white flex justify-center items-center text-sm font-bold text-white"
        }
      >
        2
      </NavLink>
      <NavLink
        to="/subscription/add-ons"
        className={({ isActive }) =>
          isActive
            ? "w-8 h-8 rounded-full flex justify-center bg-sky-blu items-center text-sm font-bold text-general"
            : "w-8 h-8 rounded-full border border-solid border-white flex justify-center items-center text-sm font-bold text-white"
        }
      >
        3
      </NavLink>
      <NavLink
        to="/subscription/submit"
        className={({ isActive }) =>
          isActive
            ? "w-8 h-8 rounded-full flex justify-center bg-sky-blu items-center text-sm font-bold text-general"
            : "w-8 h-8 rounded-full border border-solid border-white flex justify-center items-center text-sm font-bold text-white"
        }
      >
        4
      </NavLink>
    </header>
  );
};

export default Header;
