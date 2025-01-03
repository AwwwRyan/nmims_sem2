import './App.css';
import React from 'react';
import Hellocomponent from './hellocomponent';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
function App() {
  return (
    <div className="App">
      <h1>My First React App</h1>
      <h2>My app is working</h2>
      <Hellocomponent />
    </div>
  );
}
export default App;
