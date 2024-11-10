import { DeleteProduct } from "../svg/Trash";
import { Button } from "../ui/Button";

export const OrderCard = ({ title, images, price, id , HandleDelete}) => {
  
  return (
    <>
      <div className="flex justify-around items-center p-2.5 gap-1">
        <figure className="flex justify-around items-center gap-5 w-96">
          <img
            className="w-16 h-16 rounded-lg object-cover"
            src={images}
            alt={title}
            referrerPolicy="no-referrer"
          />
          <figcaption className="text-sm w-48">{title}</figcaption>
          <h5 className="text-sm font-bold">{price}</h5>
        </figure>
      {
        HandleDelete &&
        <Button onClick={() => {HandleDelete(id)}} className="text-slate-900 bg-white justify-end"><DeleteProduct fillColor="white"/></Button>
      }
      </div>
    </>
  );
};
