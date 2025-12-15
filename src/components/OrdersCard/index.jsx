import { ChevronRightIcon } from "@heroicons/react/24/solid"; // Opcional: Para indicar click
import { Calendar } from "../svg/Calendar";
import { ShoppingBag } from "../svg/ShoppingBag";
import { currentDate } from "../../utils"; // Tu función de fecha

export const OrdersCard = ({ count, price }) => {
  return (
    <div className="flex justify-between items-center mb-4 bg-zinc-900 border border-zinc-800 rounded-xl p-4 w-80 shadow-sm hover:shadow-md hover:border-zinc-600 transition-all cursor-pointer group">
      <div className="flex flex-col w-full px-2">
        {/* Fecha y Calendario */}
        <div className="flex justify-between items-center mb-2">
          <div className="flex gap-2 items-center text-zinc-400 group-hover:text-white transition-colors">
            <Calendar className="w-4 h-4" fillColor="currentColor" />
            <span className="font-light text-sm">{currentDate()}</span>
          </div>

          {/* Flecha indicadora (Opcional si tienes HeroIcons, si no, quítalo) */}
          <ChevronRightIcon className="h-4 w-4 text-zinc-600 group-hover:text-white" />
        </div>

        <div className="flex justify-between items-center">
          {/* Cantidad de productos */}
          <div className="flex gap-2 items-center text-zinc-400">
            <ShoppingBag className="w-4 h-4" fillColor="currentColor" />
            <span className="font-light text-sm">{count} artículos</span>
          </div>

          {/* Precio Total */}
          <span className="font-bold text-xl text-white">${price}</span>
        </div>
      </div>
    </div>
  );
};
