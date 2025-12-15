import { useContext } from "react";
import { ShoppingCartContext } from "../../context";
import { defaultImages } from "../../images/default";
import { CheckCircle } from "../svg/CheckCircle";
import { FavoriteProduct } from "../svg/FavoriteProduct";
import { PlusCircle } from "../svg/PlusCircle";
import { Button } from "../ui/Button";

export const CardUI = ({ item, showProduct }) => {
  const context = useContext(ShoppingCartContext);

  const { title, price, category, images, id } = item;

  const addProductsToCart = (event, productData) => {
    event.preventDefault();
    event.stopPropagation();
    context.setCount(context.count + 1);
    context.setCartProducts([...context.cartProducts, productData]);
    context.openCheckoutSideMenu();
  };

  const isAdded = context.cartProducts.some((product) => product.id === id);

  return (
    <div
      onClick={() => showProduct(item)}
      className="group relative z-0 overflow-hidden bg-zinc-900 w-full max-w-xs h-auto rounded-xl border border-zinc-800 shadow-sm hover:shadow-xl hover:shadow-zinc-900/50 hover:border-zinc-700 transition-all duration-300 cursor-pointer flex flex-col justify-between"
    >
      {/* --- IMAGEN Y TAGS --- */}
      <figure className="relative w-full aspect-square overflow-hidden">
        {/* Categoría flotante */}
        <span className="absolute bottom-2 left-2 z-10 bg-black/60 backdrop-blur-md text-white text-xs px-3 py-1 rounded-full border border-white/10">
          {category?.name || category}
        </span>

        {/* Botón Favorito */}
        <div className="absolute top-2 right-2 z-10">
          <Button className="bg-black/50 hover:bg-black/80 backdrop-blur-sm p-2 rounded-full border border-white/10 transition-colors w-8 h-8 flex items-center justify-center">
            <FavoriteProduct fillColor="white" />
          </Button>
        </div>

        <img
          src={images?.[0]}
          alt={title}
          className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
          referrerPolicy="no-referrer"
          onError={({ currentTarget }) => {
            currentTarget.onerror = null;
            currentTarget.src = defaultImages;
          }}
        />
      </figure>

      {/* --- INFO DEL PRODUCTO --- */}
      <div className="p-4 flex flex-col gap-2">
        <div className="flex justify-between items-start h-14">
          <span
            className="text-sm font-medium text-zinc-300 line-clamp-2"
            title={title}
          >
            {title}
          </span>
          <span className="text-lg font-bold text-white ml-2">${price}</span>
        </div>

        {/* --- BOTÓN DE ACCIÓN --- */}
        <div className="mt-2">
          {isAdded ? (
            <Button className="w-full justify-center gap-2 bg-zinc-800 text-green-400 border border-zinc-700 hover:bg-zinc-700 cursor-default font-medium py-2">
              <CheckCircle fillColor="currentColor" className="w-5 h-5" />
              <span>En el carrito</span>
            </Button>
          ) : (
            <Button
              onClick={(event) => addProductsToCart(event, item)}
              className="w-full justify-center gap-2 bg-white !text-black hover:bg-zinc-200 border border-transparent font-bold py-2 transition-colors shadow-[0_0_10px_rgba(255,255,255,0.1)]"
            >
              <PlusCircle className="w-5 h-5 text-black" />
              <span className="text-black">Añadir</span>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
