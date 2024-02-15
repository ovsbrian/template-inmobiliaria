const IconCards = ({ svg, children, info, metros }) => {
  return (
    <div className="flex flex-col w-16 ">
      <div className="flex gap-1 font-semibold ">
        <img src={svg} alt={children} />
        <span>
          {info}
          {metros ? "²" : ""}
        </span>
      </div>
      <p className="text-xs opacity-55">{children}</p>
    </div>
  );
};

export default IconCards;
