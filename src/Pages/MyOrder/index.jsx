import { useContext } from "react";
import { Layout } from "../../components/Layout";
import { OrderCard } from "/src/components/OrderCard/index";
import { ShoppingCartContext } from "/src/context/index";
import { ArrowLeft } from "../../components/svg/ArrowLeft";
import { Link } from "react-router-dom";

export const MyOrder = () => {
  const context = useContext(ShoppingCartContext);
  const currentPath = window.location.pathname;
  let index = currentPath.substring(currentPath.lastIndexOf("/") + 1);
  if (index === "last") index = context.order?.length - 1;

  return (
    <Layout>
      <div className="flex justify-between items-start max-w-full gap-2">
        <Link to={"/my-orders"} className="cursor-pointer">
          <ArrowLeft fillcolor="transparent" />
        </Link>
      <div className="">
      <h3 className="text-2xl">Tus Ordenes</h3> 
        
        <p>Consulta el estado de tus ordenes pendientes</p>
      </div>
      </div>
      <div className="flex flex-col max-w-full">
        {context.order?.[index]?.product.map((product) => (
          <OrderCard
            key={product.id}
            title={product.title}
            price={product.price}
            images={product.images[0]}
          />
        ))}
      </div>
    </Layout>
  );
};
