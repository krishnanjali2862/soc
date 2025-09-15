// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App









// import { useState } from "react";

// function App() {
//   // state variable 'count' with initial value 0
//   const [count, setCount] = useState(0);

//   return (
//     <div style={{ textAlign: "center", marginTop: "50px" }}>
//       <h2>Count: {count}</h2>

//       {/* Increment button */}
//       <button onClick={() => setCount(count + 1)}>Increment</button>

//       {/* Decrement button */}
//       <button onClick={() => setCount(count - 1)} style={{ marginLeft: "10px" }}>
//         Decrement
//       </button>
//     </div>
//   );
// }

// export default App;








import { useState } from "react";

function App() {
  const [input, setInput] = useState("");

  // Handle button clicks
  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  // Clear input
  const clearInput = () => {
    setInput("");
  };

  // Calculate result
  const calculate = () => {
    try {
      // eslint-disable-next-line no-eval
      const result = eval(input);
      setInput(String(result));
    } catch {
      setInput("Error");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>React Calculator</h2>

      {/* Display */}
      <input
        type="text"
        value={input}
        readOnly
        style={{
          width: "200px",
          height: "40px",
          fontSize: "18px",
          textAlign: "right",
          marginBottom: "10px",
        }}
      />

      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 50px)", gap: "10px", justifyContent: "center" }}>
        {/* Number buttons */}
        {[1, 2, 3, "+", 4, 5, 6, "-", 7, 8, 9, "*", "C", 0, "=", "/"].map((btn, idx) => (
          <button
            key={idx}
            onClick={() => {
              if (btn === "C") clearInput();
              else if (btn === "=") calculate();
              else handleClick(btn);
            }}
            style={{ height: "40px", fontSize: "18px" }}
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
