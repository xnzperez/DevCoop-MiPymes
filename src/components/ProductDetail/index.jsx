import { useContext } from "react";
import { ShoppingCartContext } from "../../context";
import { ArrowLeft } from "../svg/ArrowLeft";

export const ProductDetail = () => {
  const context = useContext(ShoppingCartContext);

  if (!context.isProductDetailOpen) return null;

  return (
    // Overlay oscuro accesible
    <div
      className="fixed inset-0 z-[2000] bg-black/60 backdrop-blur-sm flex justify-end transition-opacity"
      onClick={() => context.CloseProductDetail()}
      aria-modal="true"
      role="dialog"
      aria-labelledby="product-detail-title"
    >
      <aside
        className="w-full md:w-[360px] h-screen bg-zinc-900 text-white overflow-y-auto border-l border-white/10 flex flex-col p-6 animate-slide-in shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-6">
          {/* Botón cerrar accesible */}
          <button
            className="cursor-pointer flex gap-2 items-center hover:opacity-70 transition-opacity focus:outline-none focus:ring-2 focus:ring-white rounded px-1"
            onClick={() => context.CloseProductDetail()}
            aria-label="Cerrar detalles del producto y volver a la tienda"
          >
            <ArrowLeft fillcolor="white" />
            <span className="font-semibold text-sm font-sans uppercase tracking-widest text-white/90">
              Back to shop
            </span>
          </button>
        </div>

        <figure className="px-0 mb-6 relative">
          <div className="bg-white/5 rounded-lg overflow-hidden p-2">
            <img
              className="w-full h-auto rounded-lg object-cover aspect-square"
              src={context.productToShow.images?.[0]}
              alt={`Imagen detallada de ${context.productToShow.title}`} // Alt dinámico mejorado
            />
          </div>
        </figure>

        <div className="flex flex-col gap-3 mb-6">
          <span className="text-2xl font-bold text-white">
            ${context.productToShow.price}
          </span>

          <h1
            id="product-detail-title"
            className="font-bold text-xl leading-tight text-white/90"
          >
            {context.productToShow.title}
          </h1>

          <span className="text-xs font-medium text-white/80 bg-white/10 w-fit px-3 py-1 rounded-full border border-white/5">
            {context.productToShow.category?.name}
          </span>
        </div>

        <p className="font-light text-sm text-gray-300 leading-relaxed">
          {context.productToShow.description}
        </p>

        <div className="mt-8">
          <button
            className="w-full bg-white text-black font-bold py-3 rounded-lg hover:bg-gray-200 transition-colors focus:ring-4 focus:ring-white/50"
            onClick={() => console.log("Add to cart logic")}
          >
            Add to Cart
          </button>
        </div>
      </aside>
    </div>
  );
};
