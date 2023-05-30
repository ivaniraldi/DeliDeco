import { motion } from "framer-motion";

const hoja1 = [
  "https://i.ibb.co/ZxbHxrf/1.jpg",
  "https://i.ibb.co/bssm5wt/2.jpg",
  "https://i.ibb.co/17xHbfw/3.jpg",
  "https://i.ibb.co/BfJkSV8/4.jpg",
  "https://i.ibb.co/tzWg7MD/5.jpg",
  "https://i.ibb.co/kKzWg32/6.jpg",
];

function Hoja1() {
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
              backgroundImage: `url(${hoja1[0]})`,
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
              backgroundImage: `url(${hoja1[1]})`,
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
              backgroundImage: `url(${hoja1[2]})`,
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
              backgroundImage: `url(${hoja1[3]})`,
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
              backgroundImage: `url(${hoja1[4]})`,
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
              backgroundImage: `url(${hoja1[5]})`,
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

export default Hoja1;
