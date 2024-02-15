const Links = ({ children, goTo }) => {
  return (
    <li className="cursor-pointer p-2 transition-colors hover:bg-slate-300 rounded-md ">
      <a className="" href={goTo}>
        {children}
      </a>
    </li>
  );
};

export default Links;
