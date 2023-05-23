import { Suspense, useState, useRef, useEffect } from "react";
import { motion, MotionConfig, useMotionValue } from "framer-motion";
import { Shapes } from "@/components/canvas/Shapes";
import { transition } from "@/utils/transition";
import useOnScreen from "@/hooks/useOnScreen";
import useMeasure from "react-use-measure";
import { useScroll } from "framer-motion";

const ThreeDDisplay = () => {
  const [ref, bounds] = useMeasure({ scroll: false });
  const containerRef = useRef(null);

  const [isHover, setIsHover] = useState(true);
  const [isPress, setIsPress] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const isVisible = useOnScreen(containerRef);
  const { scrollY } = useScroll();

  // useEffect(() => {
  //   const mouseX = useMotionValue(0);
  // const mouseY = useMotionValue(0);
  // }, [])

  const handleMouseMove = (e) => {
    console.log("e", e);
    mouseY.set(scrollY);
    // mouseY.set(e.clientY - bounds.y - bounds.height / 200);
  };

  const resetMousePosition = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  useEffect(() => {
    if (typeof window === "undefined") return;
    const handleMouseMove = (event) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div ref={containerRef} onMouseMove={handleMouseMove}>
      <MotionConfig transition={transition}>
        <motion.div
          ref={ref}
          className="h-40 w-40 bg-red-100"
          initial={false}
          animate={isVisible ? "hover" : "rest"}
          whileTap="press"
          variants={{
            rest: { scale: 1 },
            hover: { scale: 1.5 },
            press: { scale: 1.4 },
          }}
          onHoverStart={() => {
            resetMousePosition();
            setIsHover(true);
          }}
          onHoverEnd={() => {
            resetMousePosition();
            setIsHover(false);
          }}
          onTapStart={() => setIsPress(true)}
          onTap={() => setIsPress(false)}
          onTapCancel={() => setIsPress(false)}
          // onPointerMove={(e) => {
          //   mouseX.set(e.clientX - bounds.x - bounds.width / 2);
          //   mouseY.set(e.clientY - bounds.y - bounds.height / 2);
          // }}
        >
          <motion.div
            className="shapes"
            variants={{
              rest: { opacity: 0 },
              hover: { opacity: 1 },
            }}
          >
            <div className="container">
              <Suspense fallback={null}>
                <Shapes
                  isHover={isHover}
                  isPress={isPress}
                  mouseX={mouseX}
                  mouseY={mouseY}
                />
              </Suspense>
            </div>
          </motion.div>
          <motion.div
            variants={{ hover: { scale: 0.85 }, press: { scale: 1.1 } }}
            className="label"
          >
            play
          </motion.div>
        </motion.div>
      </MotionConfig>
    </div>
  );
};

export default ThreeDDisplay;
