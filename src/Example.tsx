import * as React from "react";
import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "./use-dimensions";
import { MenuToggle } from "./MenuToggle";
import { Navigation } from "./Navigation";
require("@lottiefiles/lottie-player");
import Bootstrap from 'bootstrap';
import {
  Container,
  Navbar,
  Nav,
  Row,
  Col
  // Form,
  // FormControl,
  // Button
} from "react-bootstrap";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};

export const Example = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  const navBarStyles = {
    backgroundColor: "#fff",
    backgroundImage: "linear-gradient(0deg, #D2D2D2 0%, #97D9E1 100%);",
    boxShadow: "0 0 6px 0 rgba(0, 0, 0, 0.3)"
  };

  return (
    <div>
      <Container>
        <Row>
          <Col xs={2} sm={2} md={6} lg={6}>
            <lottie-player
              autoplay
              loop
              mode="normal"
              src="https://assets4.lottiefiles.com/packages/lf20_gssu2dkm.json"
              style={{width: "100%", position: "relative", left: "25%"}}
            >
            </lottie-player>
          </Col>
        <Col sm={3} md={3} lg={3}>
        <motion.nav
          initial={false}
          animate={isOpen ? "open" : "closed"}
          custom={height}
          ref={containerRef}
          style={{background: "#FFFF99"}}
        >
          <motion.div className="background" style={{background: "lightpink"}} variants={sidebar} />
          <Navigation />
          <MenuToggle toggle={() => toggleOpen()} />
        </motion.nav>
        </Col>
        </Row>
      </Container>
    </div>
  );
};
