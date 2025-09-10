import React from "react";

export const Button = React.memo(({text, color, pateta}) => {
      let col;
      switch (color) {
    case "pink":
      col = "bg-pink-500"
      break
    case "green":
      col = "bg-green-500"
    	break
    default:
      col = "bg-white"
  }

  return <button onClick={() => pateta()} className={`border-2 p-2 ${col}`}>{text}</button>;
})