import { Link } from "react-router-dom";
function NavBar() {
  return (
    <div className="w-full h-16  grid grid-cols-2 border-b">
      <div className=" flex ml-16 mt-2">
        <Link to={"#"}>
        <p className="text-4xl font-bold" style={{fontFamily:"Dancing Script"}}>Dali</p>
        </Link>

      </div>
      <div className="flex justify-around items-center">
      <a href="/#Catalogo">
        <p className="uppercase underline">Catalogo</p>
        </a>
        <Link to={"#"}>
        <p className="uppercase underline">Servicios</p>
        </Link>
        <Link to={"/contact"}>
        <p className="uppercase underline">Contacto</p>
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
