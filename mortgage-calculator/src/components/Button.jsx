import React from "react";

export const Button = React.memo(({text, color, pateta, disabled}) => {
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

  return <button disabled={disabled} onClick={() => pateta()} className={`border-2 p-2 ${disabled ? 'bg-gray-300' : col}`}>{text}</button>;
})