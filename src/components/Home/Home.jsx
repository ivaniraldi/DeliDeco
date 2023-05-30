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

        <motion.div
          className="grid grid-cols-2 border py-4"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, rotate: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        >
          <div id="Catalogo"></div>
          <div className="flex justify-center">
            <p className="text-xl underline">
              Filtrar:
              <select
                style={{
                  background: "#efd4d1",
                  padding: "8px",
                  borderRadius: "5px",
                  paddingRight: "25px",
                }}
                className="ml-4"
                name="filtros"
                id="1"
              >
                <option value="todos">Todos</option>
                <option value="decoracion">Decoracion</option>
                <option value="accesorios">Accesorios</option>
                <option value="ropa">Ropa</option>
              </select>
            </p>
          </div>
        </motion.div>

        <div className="flex justify-center my-4">
          <div className="grid grid-cols-3 gap-12">
            <a href="https://www.instagram.com/p/Cf93K8TukQw/" target="_blank" rel="noopener noreferrer">
              <motion.img
                style={{
                  cursor: "pointer",
                }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 1.3 }}
                className="w-80 rounded-xl"
                src="https://i.ibb.co/rxDw5WK/293409540-2255591691282279-1471682805048662775-n.jpg"
                alt=""
              />
            </a>
            <motion.img
              style={{
                cursor: "pointer",
              }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1.3 }}
              className="w-80 rounded-xl"
              src="https://i.ibb.co/fHyW0B9/306746982-460867209403890-8655099461894906873-n.jpg"
              alt=""
            />
            <motion.img
              style={{
                cursor: "pointer",
              }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1.3 }}
              className="w-80 rounded-xl"
              src="https://i.ibb.co/YfM3BKb/309426084-198154579262366-1795966133500984146-n.jpg"
              alt=""
            />
            <motion.img
              style={{
                cursor: "pointer",
              }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1.3 }}
              className="w-80 rounded-xl"
              src="https://i.ibb.co/JqgGSc1/311429616-786605199232642-8482935607159303739-n.jpg"
              alt=""
            />
            <motion.img
              style={{
                cursor: "pointer",
              }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1.3 }}
              className="w-80 rounded-xl"
              src="https://i.ibb.co/71FTJLz/311988732-168937029068504-2003642841357303292-n.jpg"
              alt=""
            />
            <motion.img
              style={{
                cursor: "pointer",
              }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1.3 }}
              className="w-80 rounded-xl"
              src="https://i.ibb.co/1TTbkGP/312220739-637334784704326-1130253663259619208-n.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      <InstagramFeed></InstagramFeed>
      <Footer></Footer>
    </div>
  );
}

export default Home;
