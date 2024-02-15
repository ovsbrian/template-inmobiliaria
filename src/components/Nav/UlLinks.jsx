import Links from "../ui/Links";

const NavLinks = () => {
  return (
    <ul class="flex gap-10">
      <Links goTo={"/"}>Comprar</Links>
      <Links goTo={"/buscar"}>Alquilar</Links>
      <Links goTo={"#"}>Contáctanos</Links>
    </ul>
  );
};

export default NavLinks;
