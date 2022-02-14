import React from "react";
import "./Grid.css";

const renderValue = (value) => {
  if (value === "cross") {
    return "X";
  } else if (value === "circle") {
    return "O";
  } else {
    return null;
  }
};

let Grid = (props) => {
  let { turn, data, winner, setGrid } = props;

  return (
    <>
      <div className="container">
        {data.map((value, index) => {
          return (
            <div key={index} onClick={() => setGrid(index)}>
              {renderValue(value)}
            </div>
          );
        })}
      </div>
      <div className="grid-turn">{`turn: ${turn}`}</div>
      {winner ? (
        <div className="grid-result">{`Player ${
          turn === "cross" ? "circle" : "cross"
        } won`}</div>
      ) : null}
      {!data.filter((grid) => grid === null).length && !winner ? (
        <div className="grid-result"> Match draw</div>
      ) : null}
    </>
  );
};

export default Grid;
