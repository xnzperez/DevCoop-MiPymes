import { useContext } from "react";
import { Link } from "react-router-dom";
import { Layout } from "../../components/Layout";
import { OrderCard } from "../../components/OrderCard"; // Asegúrate de que la ruta sea correcta
import { ShoppingCartContext } from "../../context";
import { ArrowLeft } from "../../components/svg/ArrowLeft"; // Asegúrate de que la ruta sea correcta

export const MyOrder = () => {
  const context = useContext(ShoppingCartContext);
  const currentPath = window.location.pathname;

  // Lógica para obtener el índice de la URL (o la última orden)
  let index = currentPath.substring(currentPath.lastIndexOf("/") + 1);
  if (index === "last") index = context.order?.length - 1;

  // Obtenemos los productos de esa orden específica
  const currentOrder = context.order?.[index];

  return (
    <Layout>
      {/* HEADER CON NAVEGACIÓN */}
      <div className="flex items-center justify-center relative w-full md:w-80 mb-6">
        <Link
          to="/my-orders"
          className="absolute left-0 hover:scale-110 transition-transform"
        >
          {/* Forzamos color blanco al SVG */}
          <div className="text-white w-6 h-6">
            <ArrowLeft fillColor="white" />
          </div>
        </Link>
        <h1 className="font-bold text-xl text-white">Detalle de Orden</h1>
      </div>

      {/* LISTA DE PRODUCTOS */}
      <div className="flex flex-col w-full md:w-96 px-2">
        {/* Si la orden existe, mostramos productos. Si no, mensaje de error */}
        {currentOrder ? (
          currentOrder.products.map((product) => (
            <OrderCard
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              images={product.images[0]}
              // NO pasamos HandleDelete aquí, porque es un historial (no se puede borrar)
            />
          ))
        ) : (
          <p className="text-zinc-500 text-center">Orden no encontrada.</p>
        )}
      </div>

      {/* TOTAL (Opcional pero recomendado) */}
      {currentOrder && (
        <div className="flex justify-between items-center w-full md:w-96 p-4 bg-zinc-900 rounded-xl border border-zinc-800 mt-4">
          <span className="text-zinc-400">Total Pagado:</span>
          <span className="text-2xl font-bold text-white">
            ${currentOrder.totalPrice || currentOrder.price}
          </span>
        </div>
      )}
    </Layout>
  );
};
