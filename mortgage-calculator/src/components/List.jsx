import React from "react";

export const List = React.memo(({list}) => {

	console.log('hello')
	return (
    <ul>
      {list.map((el) => {
        return <li key={"el" + el}>{el}</li>;
      })}
    </ul>
  );
})