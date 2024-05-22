import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import "swiper/css";
import { images } from "../../image-dara";

// const variants = {
//   enter: (direction) => ({
//     x: direction > 0 ? 1000 : -1000,
//     opacity: 0,
//   }),
//   center: {
//     zIndex: 1,
//     x: 0,
//     opacity: 1,
//   },
//   exit: (direction) => ({
//     zIndex: 0,
//     x: direction < 0 ? 1000 : -1000,
//     opacity: 0,
//   }),
// };

// const swipeConfidenceThreshold = 1000;
// const swipePower = (offset, velocity) => Math.abs(offset) * velocity;

const HomeBanner = () => {
  // const [[page, direction], setPage] = useState([0, 0]);

  // const imageIndex = wrap(0, images.length, page);

  // const paginate = (newDirection) => {
  //   setPage([page + newDirection, newDirection]);
  // };

  return (
    <>
      {/* <AnimatePresence initial={false} custom={direction}>
        <motion.img
          key={page}
          src={images[imageIndex]}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 100, damping: 30 },
            opacity: { duration: 0.1 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        />
      </AnimatePresence> */}
    </>
  );
};

export default HomeBanner;
