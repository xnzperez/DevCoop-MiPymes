import { DeleteProduct } from "../svg/Trash";
import { Button } from "../ui/Button";

export const OrderCard = ({ title, images, price, id, HandleDelete }) => {
  return (
    <div className="flex justify-between items-center mb-3 bg-zinc-900/50 p-3 rounded-xl border border-zinc-800 animate-fade-in-right hover:bg-zinc-800 transition-colors">
      <div className="flex items-center gap-4">
        <figure className="w-16 h-16 flex-shrink-0">
          <img
            className="w-full h-full rounded-lg object-cover border border-zinc-700"
            src={images}
            alt={title}
            referrerPolicy="no-referrer"
          />
        </figure>
        <div className="flex flex-col gap-1">
          <p
            className="text-sm font-light text-zinc-200 line-clamp-2 w-32"
            title={title}
          >
            {title}
          </p>
          {/* Opcional: Si tuvieras cantidad, iría aquí */}
        </div>
      </div>

      <div className="flex items-center gap-4">
        <p className="text-lg font-bold text-white">${price}</p>
        {HandleDelete && (
          <div
            onClick={() => HandleDelete(id)}
            className="cursor-pointer hover:bg-red-500/20 p-2 rounded-full transition-all group"
          >
            {/* Asumiendo que DeleteProduct acepta clases o fill */}
            <DeleteProduct className="w-5 h-5 text-zinc-500 group-hover:text-red-500" />
          </div>
        )}
      </div>
    </div>
  );
};
