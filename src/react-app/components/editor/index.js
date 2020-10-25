import React from "react";
import ReactFlow, { Background } from "react-flow-renderer";
const elements = [
  {
    id: "1",
    type: "input",
    data: { label: "Node 1" },
    position: { x: 50, y: 5 },
  },
  // you can also pass a React Node as a label
  { id: "2", data: { label: <div>Node 2</div> }, position: { x: 50, y: 100 } },
  { id: "e1-2", source: "1", target: "2", animated: true },
];

function Editor() {
  return (
    <div className="panel editor">
      <div className="editor_toolbar" />
      <div className="editor_viwer">
        <ReactFlow elements={elements}>
          <Background
            variant="dots"
            gap={32}
            size={1}
            style={{ opacity: 0.8 }}
          />
        </ReactFlow>
      </div>
    </div>
  );
}

export default Editor;
