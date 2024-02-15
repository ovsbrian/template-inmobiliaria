import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const CarouselComp = () => {
  return (
    <Carousel>
      <CarouselContent>
        <CarouselItem>
          <img src="./casa1.jpg" className="h-[300px] rounded-md" alt="" />
        </CarouselItem>
        <CarouselItem>
          <img src="./casa1.jpg" className="h-[300px] rounded-md" alt="" />
        </CarouselItem>
        <CarouselItem>
          <img src="./casa1.jpg" className="h-[300px] rounded-md" alt="" />
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default CarouselComp;
