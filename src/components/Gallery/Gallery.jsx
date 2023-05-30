import { motion } from "framer-motion";
import NavBar from "./../NavBar/NavBar";
import Footer from "../Footer/Footer";
import "../../assets/1.jpeg"
function Gallery() {
  return (
    <div>
      <NavBar></NavBar>
      <div>
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
            <a
              href="https://www.instagram.com/dalidecoshop/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.div
                style={{
                  backgroundImage: `url("https://i.ibb.co/P95N2S4/2.jpg")`,
                  /* Otra propiedad de estilo opcional */
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 1.3 }}
                className="w-80 h-80 rounded-xl"
              />
            </a>

            <a
              href="https://www.instagram.com/dalidecoshop/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.div
                style={{
                  backgroundImage: `url('https://i.ibb.co/5kXqhg5/3.jpg')`,
                  /* Otra propiedad de estilo opcional */
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 1.3 }}
                className="w-80 h-80 rounded-xl"
              />
            </a>

            <a
              href="https://www.instagram.com/dalidecoshop/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.div
                style={{
                  backgroundImage: `url('https://i.ibb.co/cv0mmyR/4.jpg')`,
                  /* Otra propiedad de estilo opcional */
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 1.3 }}
                className="w-80 h-80 rounded-xl"
              />
            </a>

            <a
              href="https://www.instagram.com/dalidecoshop/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.div
                style={{
                  backgroundImage: `url('https://i.ibb.co/89cn7kS/6.jpg')`,
                  /* Otra propiedad de estilo opcional */
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 1.3 }}
                className="w-80 h-80 rounded-xl"
              />
            </a>

            <a
              href="https://www.instagram.com/dalidecoshop/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.div
                style={{
                  backgroundImage: `url('https://i.ibb.co/frGzY1c/7.jpg')`,
                  /* Otra propiedad de estilo opcional */
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 1.3 }}
                className="w-80 h-80 rounded-xl"
              />
            </a>

            <a
              href="https://www.instagram.com/dalidecoshop/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.div
                style={{
                  backgroundImage: `url('https://i.ibb.co/rxDw5WK/293409540-2255591691282279-1471682805048662775-n.jpg')`,
                  /* Otra propiedad de estilo opcional */
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 1.3 }}
                className="w-80 h-80 rounded-xl"
              />
            </a>

            <a
              href="https://www.instagram.com/dalidecoshop/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.div
                style={{
                  backgroundImage: `url('https://i.ibb.co/rxHXwdz/8.jpg')`,
                  /* Otra propiedad de estilo opcional */
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 1.3 }}
                className="w-80 h-80 rounded-xl"
              />
            </a>

            <a
              href="https://www.instagram.com/dalidecoshop/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.div
                style={{
                  backgroundImage: `url('https://i.ibb.co/Cn6hZ4w/9.jpg')`,
                  /* Otra propiedad de estilo opcional */
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 1.3 }}
                className="w-80 h-80 rounded-xl"
              />
            </a>

            <a
              href="https://www.instagram.com/dalidecoshop/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.div
                style={{
                  backgroundImage: `url('https://i.ibb.co/26N1zPM/5.jpg')`,
                  /* Otra propiedad de estilo opcional */
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 1.3 }}
                className="w-80 h-80 rounded-xl"
              />
            </a>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Gallery;
