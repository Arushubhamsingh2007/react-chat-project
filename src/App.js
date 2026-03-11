import React from "react";
import Counter from "./Counter";
import NameExample from "./NameExample";
import ToggleExample from "./ToggleExample";
import ArrayExample from "./TodoList";
import ObjectExample from "./ObjectExample";

function App() {
  return (
    <div
      style={{
        display: "flex",           // Use flexbox
        flexDirection: "column",   // Stack components vertically
        alignItems: "center",      // Center horizontally
        justifyContent: "center",  // Center vertically
        minHeight: "100vh",        // Full screen height
        textAlign: "center",       // Center text
        fontFamily: "Arial",
        padding: "20px",
        backgroundColor: "#f0f0f0" // Optional light background
      }}
    >
      <h1>5 Simple useState Examples</h1>
      <Counter />
      <hr style={{ width: "50%" }} />
      <NameExample />
      <hr style={{ width: "50%" }} />
      <ToggleExample />
      <hr style={{ width: "50%" }} />
      <ArrayExample />
      <hr style={{ width: "50%" }} />
      <ObjectExample />
    </div>
  );
}

export default App;