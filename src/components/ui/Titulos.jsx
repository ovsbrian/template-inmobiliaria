const TituloWeb = ({ children, color = "text-white" }) => {
  return <h1 class={`${color}  text-5xl font-bold`}>{children}</h1>;
};

export default TituloWeb;
