import { useState, useEffect } from "react";

export default (ref, options) => {
  const [intersection, setIntersection] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIntersection(entry);
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      observer.unobserve(ref.current);
    };
  }, []);

  return intersection;
};
