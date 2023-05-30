import { motion } from "framer-motion";

const hoja2 = [
  "https://i.ibb.co/yNzbP60/7.jpg",
  "https://i.ibb.co/MSnGv8N/10.jpg",
  "https://i.ibb.co/Wc5yVPZ/11.jpg",
  "https://i.ibb.co/2gQ8QXw/12.jpg",
  "https://i.ibb.co/x1ncXKR/13.jpg",
  "https://i.ibb.co/cx265S4/14.jpg",
];

function Hoja2() {
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
              backgroundImage: `url(${hoja2[0]})`,
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
              backgroundImage: `url(${hoja2[1]})`,
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
              backgroundImage: `url(${hoja2[2]})`,
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
              backgroundImage: `url(${hoja2[3]})`,
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
              backgroundImage: `url(${hoja2[4]})`,
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
              backgroundImage: `url(${hoja2[5]})`,
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

export default Hoja2;
