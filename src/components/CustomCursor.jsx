import { useEffect, useState } from "react";
import laddu from "../assets/laddu_cursor.png";
import { useLocation } from "react-router-dom";

function CustomCursor() {

  const [particles, setParticles] = useState([]);
  const location = useLocation();

  if (
    location.pathname === "/dashboard" ||
    location.pathname === "/owner-login"
  ) {
    return null;
  }

  useEffect(() => {

    const handleMove = (e) => {

      const target = e.target;

      if (
        target.closest("nav") ||
        target.closest("button") ||
        target.closest("a")
      ) {
        return;
      }

        if (window.innerWidth < 768) return;

        if (Math.random() > 0.35) return;

        const id = Date.now() + Math.random();

        const particle = {
          id,
          x: e.clientX,
          y: e.clientY,
          size: 18 + Math.random() * 10,
          rotate: Math.random() * 360,
          opacity: 0.4 + Math.random() * 0.6,
        };

        setParticles((prev) => [
          ...prev.slice(-12),
          particle,
        ]);

        setTimeout(() => {
          setParticles((prev) =>
            prev.filter((p) => p.id !== id)
          );
        }, 1200);

      };

    window.addEventListener(
      "mousemove",
      handleMove
    );

    return () =>
      window.removeEventListener(
        "mousemove",
        handleMove
      );

  }, []);

  return (
    <>
      {particles.map((p) => (

        <div
          key={p.id}
          className="
          fixed
          pointer-events-none
          laddu-particle
          z-[9999]
          "
          style={{
            left: p.x - p.size / 2,
            top: p.y - p.size / 2,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
            transform: `rotate(${p.rotate}deg)`,
            filter: "drop-shadow(0 0 6px rgba(255,200,0,0.5))",
          }}
        >

          <img
            src={laddu}
            alt=""
            className="
            w-full
            h-full
            object-contain
            "
          />

        </div>

      ))}
    </>
  );
}

export default CustomCursor;