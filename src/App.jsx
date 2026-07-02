import { useState } from "react";
import "./App.css";

function Greeting({ name }) {
  return <h1>Hello, I am {name}!</h1>;
}

function App() {
  const name = "Nathan";
  const [showGreeting, setShowGreeting] = useState(false);

  function toggleGreeting() {
    setShowGreeting(!showGreeting);
  }

  return (
    <div>
      <button onClick={toggleGreeting}>Toggle Greeting</button>
      {showGreeting && <Greeting name={name} />}
    </div>
  );
}

export default App;