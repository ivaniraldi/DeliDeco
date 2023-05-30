import { motion } from "framer-motion";

const hoja5 = [
  "https://i.ibb.co/KGtSHGR/27.jpg",
  "https://i.ibb.co/9ym1sSy/28.jpg",
  "https://i.ibb.co/NY47FKp/29.jpg",
  "https://i.ibb.co/S0HP89P/30.jpg",
];

function Hoja5() {
  return (
    <div className="flex justify-center my-4">
      <div className="grid grid-cols-2 sm:grid-cols-3  gap-4 sm:gap-12">
        <a
          href="https://www.instagram.com/dalidecoshop/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.div
            style={{
              backgroundImage: `url(${hoja5[0]})`,
              /* Otra propiedad de estilo opcional */
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1.3 }}
            className="rounded-xl h-40 w-40 sm:w-80 sm:h-80"
          />
        </a>
        <a
          href="https://www.instagram.com/dalidecoshop/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.div
            style={{
              backgroundImage: `url(${hoja5[1]})`,
              /* Otra propiedad de estilo opcional */
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1.3 }}
            className="rounded-xl h-40 w-40 sm:w-80 sm:h-80"
          />
        </a>
        <a
          href="https://www.instagram.com/dalidecoshop/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.div
            style={{
              backgroundImage: `url(${hoja5[2]})`,
              /* Otra propiedad de estilo opcional */
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1.3 }}
            className="rounded-xl h-40 w-40 sm:w-80 sm:h-80"
          />
        </a>
        <a
          href="https://www.instagram.com/dalidecoshop/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.div
            style={{
              backgroundImage: `url(${hoja5[3]})`,
              /* Otra propiedad de estilo opcional */
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1.3 }}
            className="rounded-xl h-40 w-40 sm:w-80 sm:h-80"
          />
        </a>

      </div>
    </div>
  );
}

export default Hoja5;
