import { formatCurrency, roundDownToNearestThousand } from "@/utils/convert.tsx";
import "./index.scss";
interface CardProps {
  image: string;
  title: string;
  description: string;
  discount: number;
  amount: number;
}

function Card(props: CardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 w-[278px] h-[395px] container">
      {props.image && (
        <div className="mb-4 w-[248px] h-[248px] relative">
          <img
            src={props.image}
            alt={props.title}
            className="w-full h-full rounded-lg object-cover"
          />

          {props.discount && (
            <div className="absolute top-1 left-1 bg-red-500 text-white py-1 px-2 rounded-tl-lg rounded-br-lg rounded-tr-lg text-sm font-bold">
              - {props.discount} %
            </div>
          )}
        </div>
      )}

      <h2 className="text-lg text-gray-700 font-medium mb-2 truncate">
        {props.title}
      </h2>
      <div className="flex items-center">
        <p className="text-red-600 font-semibold text-xl mr-1">
          {formatCurrency(
            roundDownToNearestThousand(
              props.amount * (1 - props.discount / 100)
            )
          )}
        </p>
        <p className="inline underline-middle text-xs text-gray-700">
          <span className="relative inline-block">
            <span className="absolute inset-x-0 bottom-1/2 h-[0.5px] bg-black"></span>
            {formatCurrency(props.amount)}
          </span>
        </p>
      </div>

      <button className="w-full text-green-600 text-sm font-normal border rounded border-green-600 py-2 border-solid my-2 hover:bg-green-600 hover:text-white">
        Thêm vào giỏ
      </button>
    </div>
  );
}

export default Card;
