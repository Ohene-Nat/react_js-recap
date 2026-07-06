import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");

  function handleInputChange(event) {
    setName(event.target.value);
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={handleInputChange}
      />
    </div>
  );
} 

export default App;