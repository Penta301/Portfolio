import { useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

function Logic() {
  const unfoldAnimation = useAnimation();
  const rotationAnimation = useAnimation();
  const [unfold, setUnfold] = useState(false);

  useEffect(() => {
    if (unfold) {
      unfoldAnimation.start({
        height: "100%",
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0.3,
        },
      });
      rotationAnimation.start({
        rotateX: 360,
      });
      return;
    }
    unfoldAnimation.start({
      height: "20%",
      transition: {
        type: "spring",
        duration: 1,
        bounce: 0.3,
      },
    });
    rotationAnimation.start({
      rotateX: -180,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [unfold]);

  return {
    setUnfold,
    unfold,
    unfoldAnimation,
    rotationAnimation,
  };
}

export default Logic;
