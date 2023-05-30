import { motion } from "framer-motion";

const hoja3 = [
  "https://i.ibb.co/c2G2FP4/15.jpg",
  "https://i.ibb.co/G2QmGjh/16.jpg",
  "https://i.ibb.co/MMWq8nL/17.jpg",
  "https://i.ibb.co/23yDqKD/18.jpg",
  "https://i.ibb.co/wCCxzmT/19.jpg",
  "https://i.ibb.co/pd8Jqg9/20.jpg",
];

function Hoja3() {
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
              backgroundImage: `url(${hoja3[0]})`,
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
              backgroundImage: `url(${hoja3[1]})`,
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
              backgroundImage: `url(${hoja3[2]})`,
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
              backgroundImage: `url(${hoja3[3]})`,
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
              backgroundImage: `url(${hoja3[4]})`,
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
              backgroundImage: `url(${hoja3[5]})`,
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

export default Hoja3;
