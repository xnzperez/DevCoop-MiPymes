import { ShoppingCartContext } from "../../context";
import { CloseCircle } from "../svg/CloseCircle";
import { ArrowLeft } from "../svg/ArrowLeft";
import "./styles.css";
import { useContext } from "react";
export const ProductDetail = () => {
  const context = useContext(ShoppingCartContext);

  return (
    <aside
      className={`${
        context.isProductDetailOpen ? "flex" : "hidden"
      } max-w-2xl min-w-64 items-center md:items-start flex-col fixed top-32 border rounded-lg bg-white place-content-evenly gap-4 py-4 `}
    >
      <div className="flex justify-start items-center px-10">
        <div
          className="cursor-pointer flex gap-1 items-center"
          onClick={() => context.CloseProductDetail()}
        >
          <ArrowLeft fillcolor="transparent" />
          <span className="font-semibold text-ms font-sans">BACK TO SHOP</span>
          {/* <CloseCircle className="text-xl cursor-pointer" fillColor="white" /> */}
        </div>
      </div>
      <div className="content-detail">
        <figure className="flex grid-flow-col place-content-evenly">
          {context.productToShow.images && (
            <img
              className="w-auto md:w-90 h-80  rounded-lg cursor-zoom-in"
              src={context.productToShow.images[0]}
              alt={context.productToShow.title}
            />
          )}

          <figcaption className="w-48 row-auto">
            <h1 className="font-semibold text-lg font-sans">
              {context.productToShow.title}
            </h1>
            <h5 className="text-lg font-medium py-4">
              ${context.productToShow.price}
            </h5>
            {context.productToShow.category && (
              <h5 className="text-sm font-medium py-4 font-sans">
                Categoría: {context.productToShow.category.name}
              </h5>
            )}
          </figcaption>
        </figure>
      </div>
      <article className="text-wrap py-1 md:px-12 px-8">
        <h3 className="font-medium">Descripción</h3>
        <p className="font-sans text-sm">{context.productToShow.description}</p>
      </article>
    </aside>
  );
};
