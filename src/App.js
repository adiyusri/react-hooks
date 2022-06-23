// useState Hook
import './App.css';
import { useState } from "react"; // to be able to use this hook, you have to import the useState hook from React. We are using a functional component called app.

const names = ["adi","budi", "caca", "dika", "endah"];

function App() {
  const [name, setName] = useState(0); // create state and give an initial value which is "Yustian". The state variable is name, and setName is function for updating its value.
  const changeName = () => {
    setName(name === names.length - 1 ? 0 : name + 1);
  };

  return ( // the DOM has a paragraph containing the name variable and a button which fires a function when clicked. The changeName() function calls the setName() function which then changes the value of the name variable to the value passed in to the setName() function.
    <div className="App">
      <p>You can call me {names[name]}</p>
      <button onClick={changeName}>Click on this</button>
    </div>
  );
}

export default App;

//----------------------------------------------------------------------------------------------------------------------------------

// Use the useState Hook in Forms
// import { useState } from "react";

// function App () {
//   const [name, setName] = useState(""); // We will create the initial state. But it is going to be an empty string since we are dealing with the value of an input element. Hard coding the value means the input will have that value whenever the page is reloaded.

//   return ( // the onChange event listener which waits for any value change in the input field. Whenever there is a change, an anonymous function (which takes in the event object as a parameter (e)) is fired which in turn calls the setName() function to update the name variable with the current value of the input field.
//     <div> 
//       <form>
//         <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your Name"/>
//         <p>{name}</p>
//       </form>
//     </div>
//   );
// }

// export default App;

//----------------------------------------------------------------------------------------------------------------------------------

// useEffect Hook
// import { useEffect, useState } from "react";

// function App () {
//   const [count, setCount] = useState(0); // state variable count with an initial value of zero.

//   useEffect(() => {
//     console.log(`You have clicked the button ${count} times`) // The useEffect hook will run every time the count variable changes and then log out some information to the console.
//   });

//   return ( // A button in the DOM will increase the value of this variable by one every time it is clicked.
//     <div>
//       <button onClick={() => setCount(count + 1)}>Click Me</button>
//       <div>
//       {count}
//       </div>
//     </div>
//   );
// }

// export default App;

//---------------------------------------------------------------------------------------------------------------------------------------

// attach an effect to a particular state
// import { useEffect, useState } from "react";

// function App () { // Each state has an after effect attached to it by passing the name of the state [count] and [count2] to the corresponding useEffect array dependency.
//   const [count, setCount] = useState(0);

//   useEffect(() => { // So when the state of count changes, the useEffect hook responsible for watching these changes will carry out any after effect assigned to it.
//     console.log(`You Have Clicked The First Button ${count} Times`);
//   }, [count]);

//   const [count2, setCount2] = useState(0);

//   useEffect(() => {
//     console.log(`you have clicked the second button ${count2} times`);
//   }, [count2]);

//   return (
//     <div>
//       <button onClick={() => setCount(count + 1)}>First Button</button>
//       {count}
//       <button onClick={() => setCount2(count2 + 1)}>Second Button</button>
//       {count2}
//     </div>
//   );
// }

// export default App;

//---------------------------------------------------------------------------------------------------------------------------------

// Create Your Own Hooks

