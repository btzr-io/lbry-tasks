import React from "react";

const backgroundId = "grid";

function Circle({ gridSpacing = 36, gridDotSize = 2 }) {
  const position = gridDotSize / 2;

  return (
    <circle className="circle" cx={position} cy={position} r={gridDotSize} />
  );
}

function DotPattern({ gridSpacing = 36, gridDotSize = 2 }) {
  return (
    <pattern
      id={backgroundId}
      key={backgroundId}
      width={gridSpacing}
      height={gridSpacing}
      patternUnits="userSpaceOnUse"
    >
      <Circle gridSpacing={gridSpacing} gridDotSize={gridDotSize} />
    </pattern>
  );
}

function Grid({ gridSize = 40960, gridSpacing = 36, gridDotSize = 2 }) {
  return (
    <div className="grid">
      <svg>
        <DotPattern gridSpacing={gridSpacing} gridDotSize={gridDotSize} />
        <g className="view">
          <rect
            className="background"
            x={-gridSize / 4}
            y={-gridSize / 4}
            width={gridSize}
            height={gridSize}
            fill={`url(${"#" + backgroundId || ""})`}
          />
        </g>
      </svg>
    </div>
  );
}

export default Grid;
