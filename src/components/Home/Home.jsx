import NavBar from "../NavBar/NavBar";
import img from "./Home.jpeg";
import { motion } from "framer-motion";
import Footer from "../Footer/Footer";
import InstagramFeed from "../InstagramFeed/IgFeed";

function Home() {
  return (
    <div id="Home">
      <NavBar></NavBar>
      <div className="">
        <motion.div
          className="mx-16 my-4 flex h-auto "
          initial={{ scale: 0.8, opacity: 1 }}
          animate={{ scale: 1, rotate: 0, opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <div className="">
            <img
              style={{
                width: "42vw",
                borderRadius: "10px",
              }}
              src={img}
              alt=""
            />
          </div>
          <div className="flex mx-auto  items-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <motion.h1 className="font-bold text-6xl border-b" style={{fontFamily:"Dancing Script"}}>
                Dali Decoraciones
              </motion.h1>
              <p className="w-72 mt-4 text-2xl" style={{fontFamily:"Oswald"}}>
                Hacemos decoraciones para tus eventos y mas... <br /> Mira nuestro
                Catalogo! 
              </p>
            </motion.div>
          </div>
        </motion.div>




      </div>
      <InstagramFeed></InstagramFeed>
      <Footer></Footer>
    </div>
  );
}

export default Home;
