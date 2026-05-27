import { useEffect, useState } from "react"

import laddu from "../assets/laddu_cursor.png"

function CustomCursor() {

  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  })



  useEffect(() => {

    const moveCursor = (e) => {

      setPosition({
        x: e.clientX,
        y: e.clientY,
      })

    }

    window.addEventListener("mousemove", moveCursor)

    return () => {
      window.removeEventListener("mousemove", moveCursor)
    }

  }, [])



  return (

    <div className="hidden lg:block">

      <img
        src={laddu}
        alt="cursor"
        className="fixed top-0 left-0 w-10 pointer-events-none z-[9999]"
        style={{
          transform: `translate(${position.x+20}px, ${position.y +20}px)`
        }}
      />

    </div>

  )
}

export default CustomCursor