import { useInView } from "react-intersection-observer";

export default function Animate({
  children,
  animationClass = "animate__fadeInLeft",
}) {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={`animate__animated ${inView ? animationClass : ""}`}
    >
      {children}
    </div>
  );
}
