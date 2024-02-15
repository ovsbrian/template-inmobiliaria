import { Separator } from "@/components/ui/separator";
import IconCards from "./IconCards";
import Carousel from "../Carousel/CarouselComp";
import { ScrollArea } from "@/components/ui/scroll-area";

const Card = ({ vertical = false }) => {
  return vertical ? (
    <div className="md:w-[325px]   2xl:w-[345px] h-[400px] rounded-sm  shadow-lg hover:shadow-xl cursor-pointer">
      <div className="h-3/5 w-full rounded-sm overflow-hidden">
        <img
          src="./casa1.jpg"
          alt=""
          className="rounded-t-sm h-full transform transition-all duration-500 hover:scale-110 "
        />
      </div>
      <div className="h-2/5 mx-2 flex flex-col gap-1 justify-center p-2  mt-2">
        <div className="h-1/2">
          <span className="text-2xl font-bold">$ 1,000,000 USD</span>
          <h4 className="md:text-xs 2xl:text-sm  font-light">
            31, Gedawang Permai St, Semarang
          </h4>
        </div>
        <Separator orientation="horizontal" className="my-3 bg-slate-100" />
        <div className="flex gap-4 py-2 justify-around h-1/2">
          <IconCards svg={"tub.svg"} info={"360m"} metros={true}>
            Superficie
          </IconCards>
          <IconCards svg={"tub.svg"} info={3}>
            Dormitorios
          </IconCards>
          <IconCards svg={"tub.svg"} info={4}>
            Baños
          </IconCards>
        </div>
      </div>
    </div>
  ) : (
    <div className="md:w-ful h-[320px] rounded-sm flex shadow-lg border  hover:shadow-xl cursor-pointer p-2">
      <div className="h-[300px] w-[45%] ">
        <Carousel />
      </div>
      <div className="w-[55%] px-4">
        <div className="flex flex-col gap-1 justify-center p-2 mt-2">
          <div className="h-1/2">
            <span className="text-2xl font-bold">$ 1,000,000 USD</span>
            <h4 className="md:text-xs 2xl:text-sm  font-light">
              31, Gedawang Permai St, Semarang
            </h4>
          </div>
          <Separator orientation="horizontal" className="my-1 bg-slate-100" />
          <ScrollArea className="h-[150px] rounded-md  text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            consequatur recusandae illum totam. Optio, ipsum commodi laboriosam
          </ScrollArea>
          <Separator orientation="horizontal" className="my-1 bg-slate-100" />
          <div className="flex justify-around  py-2 h-1/2">
            <IconCards svg={"tub.svg"} info={"360m"} dots={true}>
              Superficie
            </IconCards>
            <IconCards svg={"tub.svg"} info={3}>
              Dormitorios
            </IconCards>
            <IconCards svg={"tub.svg"} info={4}>
              Baños
            </IconCards>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
