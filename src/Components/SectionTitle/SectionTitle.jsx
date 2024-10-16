import { useEffect } from "react";
import { useRef } from "react";
import Typed from "typed.js";
import PropTypes from "prop-types";

const SectionTitle = ({
  strings,
  typeSpeed = 50,
  backSpeed = 25,
  loop = true,
  className = "",
}) => {
  const typedRef = useRef(null); // To store Typed.js instance
  const el = useRef(null); // To reference the DOM element

  useEffect(() => {
    const options = {
      strings,
      typeSpeed, // All This options are used from props
      backSpeed,
      loop,
      showCursor: false,
    };

    typedRef.current = new Typed(el.current, options);

    return () => {
      typedRef.current.destroy();
    };
  }, [strings, typeSpeed, backSpeed, loop]);

  return <span ref={el} className={className} />;
};

SectionTitle.propTypes = {
  strings: PropTypes.arrayOf(PropTypes.string).isRequired, // Array of strings, required
  typeSpeed: PropTypes.number,
  backSpeed: PropTypes.number,
  loop: PropTypes.bool,
  className: PropTypes.string,
};
export default SectionTitle;
