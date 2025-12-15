import { NavLink } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { ShoppingCartContext } from "../../context";
import { ShoppingBag } from "../svg/ShoppingBag";
import { BurgerNav } from "../svg/BurgerNav";
import { CloseCircle } from "../svg/CloseCircle";

const NavLinks = ({ onClick }) => {
  const context = useContext(ShoppingCartContext);

  const openCart = (event) => {
    event.stopPropagation();
    event.preventDefault();
    context.openCheckoutSideMenu();
    if (onClick) onClick();
  };

  const signOut = localStorage.getItem("sign-out");
  const parsedSignOut = JSON.parse(signOut);
  const isUserSignOut = context.signOut || parsedSignOut;
  const account = localStorage.getItem("account");
  const formValues = JSON.parse(account);

  const handleSignOut = () => {
    const stringifiedSignOut = JSON.stringify(true);
    localStorage.setItem("sign-out", stringifiedSignOut);
    context.setSignOut(true);
    if (onClick) onClick();
  };

  const activeStyle =
    "text-white font-bold underline underline-offset-4 decoration-2 decoration-white";
  // Usamos zinc-400 en vez de zinc-500 para mejor contraste
  const inactiveStyle =
    "text-zinc-400 hover:text-white transition-colors font-light";

  const renderView = () => {
    if (isUserSignOut) {
      return (
        <li className="list-none">
          <NavLink
            to="/sign-in"
            onClick={() => handleSignOut()}
            className={({ isActive }) =>
              isActive ? activeStyle : inactiveStyle
            }
          >
            Iniciar Sesión
          </NavLink>
        </li>
      );
    } else {
      return (
        <div className="flex gap-5 items-center flex-col md:flex-row">
          <li className="text-zinc-400 list-none text-sm truncate max-w-[150px]">
            {formValues?.email}
          </li>
          <li className="list-none">
            <NavLink
              to="/my-orders"
              className={({ isActive }) =>
                isActive ? activeStyle : inactiveStyle
              }
              onClick={onClick}
            >
              Mis Ordenes
            </NavLink>
          </li>
          <li className="list-none">
            <NavLink
              to="/my-account"
              className={({ isActive }) =>
                isActive ? activeStyle : inactiveStyle
              }
              onClick={onClick}
            >
              Mi Cuenta
            </NavLink>
          </li>
          <li className="list-none">
            <NavLink
              to="/sign-in"
              onClick={() => handleSignOut()}
              className="text-zinc-400 hover:text-red-400 transition-colors cursor-pointer font-light"
            >
              Cerrar Sesión
            </NavLink>
          </li>
        </div>
      );
    }
  };

  return (
    <ul className="flex flex-col md:flex-row gap-6 md:gap-6 items-center w-full justify-end text-lg md:text-sm">
      <li className="list-none">
        <NavLink
          to="/"
          onClick={onClick}
          className={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
        >
          Inicio
        </NavLink>
      </li>
      <li className="list-none">
        <NavLink
          to="/Clothes"
          onClick={onClick}
          className={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
        >
          Ropa
        </NavLink>
      </li>
      <li className="list-none">
        <NavLink
          to="/Electronics"
          onClick={onClick}
          className={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
        >
          Electrónica
        </NavLink>
      </li>
      <li className="list-none">
        <NavLink
          to="/Furniture"
          onClick={onClick}
          className={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
        >
          Muebles
        </NavLink>
      </li>
      <li className="list-none">
        <NavLink
          to="/Miscellaneous"
          onClick={onClick}
          className={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
        >
          Misceláneas
        </NavLink>
      </li>
      <li className="list-none">
        <NavLink
          to="/Shoes"
          onClick={onClick}
          className={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
        >
          Zapatos
        </NavLink>
      </li>
      <li className="list-none">
        <NavLink
          to="/about"
          onClick={onClick}
          className={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
        >
          Nosotros
        </NavLink>
      </li>

      {renderView()}

      {/* Carrito Desktop con aria-label */}
      <li
        className="hidden md:flex gap-1 cursor-pointer list-none items-center text-white hover:text-gray-300 transition-colors"
        onClick={openCart}
        role="button"
        tabIndex={0}
        aria-label={`Ver carrito de compras, ${context.count} productos`}
        onKeyDown={(e) => e.key === "Enter" && openCart(e)}
      >
        <ShoppingBag fillColor="white" />
        <span className="font-bold text-white">{context.count}</span>
      </li>
    </ul>
  );
};

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const context = useContext(ShoppingCartContext);

  const toggleNavbar = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 z-[1000] w-full py-4 px-6 md:px-8 flex justify-between items-center transition-all duration-300 ${
          isScrolled
            ? "bg-black/90 backdrop-blur-md shadow-lg border-b border-white/10"
            : "bg-gradient-to-b from-black/80 to-transparent"
        }`}
      >
        <div className="font-bold text-xl text-white tracking-wider cursor-pointer relative z-[1010]">
          <NavLink
            to="/"
            onClick={() => setIsOpen(false)}
            aria-label="Ir a página de inicio"
          >
            DevCoop
          </NavLink>
        </div>

        <div className="hidden md:flex w-full justify-end">
          <NavLinks />
        </div>

        <div className="md:hidden flex items-center gap-4 z-[1010]">
          {/* Carrito Móvil con aria-label */}
          <div
            className="flex gap-1 cursor-pointer items-center text-white"
            onClick={() => context.openCheckoutSideMenu()}
            role="button"
            tabIndex={0}
            aria-label={`Ver carrito, ${context.count} items`}
          >
            <ShoppingBag fillColor="white" />
            <span className="font-bold text-sm text-white">
              {context.count}
            </span>
          </div>

          {/* Botón Menú Hamburguesa con aria-label */}
          <button
            onClick={toggleNavbar}
            className="text-white focus:outline-none focus:ring-2 focus:ring-white rounded-lg p-1"
            aria-label={
              isOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"
            }
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <CloseCircle className="w-8 h-8 fill-white" />
            ) : (
              <BurgerNav className="w-8 h-8 fill-white" />
            )}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="fixed inset-0 z-[1005] bg-zinc-950 flex flex-col items-center justify-center space-y-8 animate-fade-in md:hidden h-screen w-screen overflow-hidden">
          <div className="flex flex-col items-center gap-8 text-xl w-full px-8">
            <NavLinks onClick={toggleNavbar} />
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
