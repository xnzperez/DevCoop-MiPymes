import { useContext } from "react";
import { Link } from "react-router-dom";
import { Layout } from "../../components/Layout";
import { ShoppingCartContext } from "../../context";
import { OrdersCard } from "../../components/OrdersCard";

export const MyOrders = () => {
  const context = useContext(ShoppingCartContext);

  return (
    <Layout>
      <div className="flex items-center justify-center relative w-80 mb-6">
        <h1 className="font-bold text-2xl text-white">Mis Ordenes</h1>
      </div>

      <div className="flex flex-col w-80">
        {context.order?.length === 0 ? (
          <p className="text-zinc-500 text-center">
            No tienes órdenes previas.
          </p>
        ) : (
          context.order?.map((order, index) => (
            <Link key={index} to={`/my-orders/${index}`}>
              <OrdersCard
                count={order.totalProducts || order.products?.length} // Manejo seguro de cantidad
                price={order.totalPrice || order.price} // Manejo seguro de precio
              />
            </Link>
          ))
        )}
      </div>
    </Layout>
  );
};
