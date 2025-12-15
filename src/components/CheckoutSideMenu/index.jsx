import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ShoppingCartContext } from "../../context";
import { OrderCard } from "../OrderCard";
import { CloseCircle } from "../svg/CloseCircle";
import { TotalPrice, currentDate } from "../../utils"; // Importamos currentDate

export const CheckoutSideMenu = () => {
  const context = useContext(ShoppingCartContext);

  const HandleDelete = (id) => {
    const filterProducts = context.cartProducts.filter(
      (product) => product.id !== id
    );
    context.setCartProducts(filterProducts);
    context.setCount(context.count - 1);
  };

  // ... dentro de CheckoutSideMenu.jsx

  const HandleCheckout = () => {
    const orderToAdd = {
      date: currentDate(),
      products: context.cartProducts,
      totalProducts: context.cartProducts.length,
      totalPrice: TotalPrice(context.cartProducts),
    };

    context.setOrder([...context.order, orderToAdd]);
    context.setCartProducts([]);
    context.setCount(0);

    // CORRECCIÓN AQUÍ: Cambia null por "" (string vacío)
    context.setSearch("");

    context.CloseCheckoutSideMenu();
  };
  // ...

  // Si no está abierto, retornamos null o usamos clase hidden (prefiero renderizado condicional limpio)
  // Pero para mantener tu lógica de animación CSS (si la tienes), usamos hidden
  const isOpen = context.isCheckoutSideMenuOpen;

  return (
    <>
      {/* Overlay oscuro para cerrar al hacer click fuera (UX Pro) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-20 backdrop-blur-sm"
          onClick={() => context.CloseCheckoutSideMenu()}
        />
      )}

      <aside
        className={`${
          isOpen ? "translate-x-0" : "translate-x-full"
        } w-full md:w-[400px] h-screen fixed right-0 top-0 bg-zinc-950 border-l border-zinc-800 z-30 shadow-2xl transition-transform duration-300 flex flex-col`}
      >
        {/* HEADER */}
        <div className="flex justify-between items-center p-6 border-b border-zinc-800 bg-zinc-950">
          <h2 className="font-bold text-xl text-white tracking-wide">
            Tu Carrito
          </h2>
          <div
            className="cursor-pointer hover:bg-zinc-800 p-1 rounded-full transition-colors"
            onClick={() => context.CloseCheckoutSideMenu()}
          >
            <CloseCircle className="text-2xl text-white" />
          </div>
        </div>

        {/* LISTA DE PRODUCTOS */}
        <div className="flex-1 px-6 py-6 overflow-y-auto scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-transparent">
          {context.cartProducts.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-zinc-500 gap-4">
              <p className="text-lg">Tu carrito está vacío</p>
              <span className="text-4xl">🛒</span>
            </div>
          ) : (
            context.cartProducts.map((product) => (
              <OrderCard
                key={product.id}
                id={product.id}
                title={product.title}
                price={product.price}
                images={product.images[0]}
                HandleDelete={HandleDelete}
              />
            ))
          )}
        </div>

        {/* FOOTER (TOTAL Y ACCIONES) */}
        <div className="p-6 border-t border-zinc-800 bg-zinc-900/30">
          <div className="flex justify-between items-center mb-6">
            <span className="text-zinc-400 font-light text-lg">
              Total estimado:
            </span>
            <span className="font-bold text-3xl text-white tracking-tight">
              ${TotalPrice(context.cartProducts)}
            </span>
          </div>

          {context.signOut ? (
            <NavLink to="/sign-in" className="w-full">
              <button className="w-full bg-zinc-800 hover:bg-zinc-700 text-white py-4 rounded-xl font-bold transition-all border border-zinc-700">
                Inicia Sesión para comprar
              </button>
            </NavLink>
          ) : (
            <NavLink to="/my-orders/last" className="w-full">
              <button
                onClick={() => HandleCheckout()}
                disabled={context.cartProducts.length === 0}
                className="w-full bg-white text-black hover:bg-zinc-200 disabled:opacity-50 disabled:cursor-not-allowed py-4 rounded-xl font-bold text-lg shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all"
              >
                Realizar Pedido
              </button>
            </NavLink>
          )}
        </div>
      </aside>
    </>
  );
};
