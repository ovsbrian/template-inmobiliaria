import Links from "../ui/Links";

const NavLinks = () => {
  return (
    <ul class="flex gap-10">
      <Links goTo={"https://www.google.com/"}>Comprar</Links>
      <Links goTo={"#"}>Alquilar</Links>
      <Links goTo={"#"}>Contáctanos</Links>
    </ul>
  );
};

export default NavLinks;
