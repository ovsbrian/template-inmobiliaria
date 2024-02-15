import { Separator } from "@/components/ui/separator";
import IconCards from "./IconCards";

const Card = () => {
  return (
    <div className="w-[345px] h-[400px] rounded-sm  shadow-lg hover:shadow-xl cursor-pointer">
      <div className="h-3/5 w-full rounded-sm overflow-hidden">
        <img
          src="./casa1.jpg"
          alt=""
          className="rounded-t-sm h-full transform transition-all duration-500 hover:scale-110"
        />
      </div>
      <div className="h-2/5 mx-2 flex flex-col gap-1 justify-center p-2  mt-2">
        <div className="h-1/2">
          <span className="text-2xl font-bold">$ 1,000,000 USD</span>
          <h4 className="text-sm font-light">
            31, Gedawang Permai St, Semarang
          </h4>
        </div>
        <Separator orientation="horizontal" className="my-3 bg-slate-100" />
        <div className="flex gap-4 py-2 items-center h-1/2">
          <IconCards svg={"tub.svg"} info={3}>
            Dormitorios
          </IconCards>
          <IconCards svg={"tub.svg"} info={4}>
            Baños
          </IconCards>
          <IconCards svg={"tub.svg"} info={"360m"} metros={true}>
            Superficie
          </IconCards>
        </div>
      </div>
    </div>
  );
};

export default Card;
