import { motion } from "framer-motion";

const hoja4 = [
  "https://i.ibb.co/YXcYRGw/21.jpg",
  "https://i.ibb.co/CWy7qWw/22.jpg",
  "https://i.ibb.co/j65SvVv/23.jpg",
  "https://i.ibb.co/7N4dr2y/24.jpg",
  "https://i.ibb.co/hRD75qK/25.jpg",
  "https://i.ibb.co/RjtdgcM/26.jpg",
];

function Hoja4() {
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
              backgroundImage: `url(${hoja4[0]})`,
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
              backgroundImage: `url(${hoja4[1]})`,
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
              backgroundImage: `url(${hoja4[2]})`,
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
              backgroundImage: `url(${hoja4[3]})`,
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
              backgroundImage: `url(${hoja4[4]})`,
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
              backgroundImage: `url(${hoja4[5]})`,
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

export default Hoja4;
