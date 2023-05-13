import React, { useState } from 'react';

// Define the Calculator component as a function that returns some JSX
function Calculator() {
  // Declare two state variables, num1 and num2, and their setter functions
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');

  // Declare a state variable, result, and its setter function
  const [result, setResult] = useState('');

  // Define a function, handleCalculation, that performs a calculation based on the selected operator
  function handleCalculation(operator) {
    let calculatedResult;

    // Validate that both input fields contain a value before performing the calculation
    if (num1 && num2) {
      const n1 = parseFloat(num1);
      const n2 = parseFloat(num2);

      // Perform the calculation based on the selected operator
      switch (operator) {
        case '+':
          calculatedResult = n1 + n2;
          break;
        case '-':
          calculatedResult = n1 - n2;
          break;
        case '*':
          calculatedResult = n1 * n2;
          break;
        case '/':
          calculatedResult = n1 / n2;
          break;
        default:
          break;
      }

      // Update the result state variable with the calculated result
      setResult(calculatedResult.toFixed(2)); //const num = 3.14159;  const roundedNum = num.toFixed(2); console.log(roundedNum); // Output: "3.14"
      
    } else {
      // If either input field is empty, display an error message
      if (!num1) {
        alert('num1 cannot be empty');
      } else if (!num2) {
        alert('num2 cannot be empty');
      }
    }
  }

  // Return some JSX that defines the layout and functionality of the Calculator component
  return (
    <div style={{ background: 'black', color: 'white', padding: '20px' }}>
      <h1>React Calculator</h1>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <input
          type="text"
          placeholder="Enter num1"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter num2"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
        />

        <div style={{ display: 'flex', justifyContent: 'center', margin: '10px' }}>
          <button onClick={() => handleCalculation('+')}>+</button>
          <button onClick={() => handleCalculation('-')}>-</button>
          <button onClick={() => handleCalculation('*')}>*</button>
          <button onClick={() => handleCalculation('/')}>/</button>
        </div>

        {result ? (
          <div style={{ color: 'green' }}>Success: Your result is {result}</div>
        ) : null}
      </div>
    </div>
  );
}

export default Calculator;


/* ****************************************OR****************************************************

import React, { useState } from 'react';

const Calculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operator, setOperator] = useState('');
  const [result, setResult] = useState('');
  const [error, setError] = useState('');

  const handleNum1Change = (e) => {
    setNum1(e.target.value);
  };

  const handleNum2Change = (e) => {
    setNum2(e.target.value);
  };

  const handleOperatorClick = (op) => {
    if (num1 === '' || num2 === '') {
      setError(`Error: ${num1 === '' ? 'num1 cannot be empty' : 'num2 cannot be empty'}`);
    } else {
      setError('');
      setOperator(op);
      switch (op) {
        case '+':
          setResult(parseFloat(num1) + parseFloat(num2));
          break;
        case '-':
          setResult(parseFloat(num1) - parseFloat(num2));
          break;
        case '*':
          setResult(parseFloat(num1) * parseFloat(num2));
          break;
        case '/':
          setResult(parseFloat(num1) / parseFloat(num2));
          break;
        default:
          setResult('');
          break;
      }
    }
  };

  return (
    <div style={{ backgroundColor: 'black', color: 'white' }}>
      <h1>React Calculator</h1>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <input type="text" value={num1} onChange={handleNum1Change} placeholder="Enter num1" />
        <input type="text" value={num2} onChange={handleNum2Change} placeholder="Enter num2" />
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <button onClick={() => handleOperatorClick('+')}>+</button>
          <button onClick={() => handleOperatorClick('-')}>-</button>
          <button onClick={() => handleOperatorClick('*')}>*</button>
          <button onClick={() => handleOperatorClick('/')}>/</button>
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {result !== '' && (
          <p style={{ color: 'green' }}>
            Success: Your result is {result}
          </p>
        )}
      </div>
    </div>
  );
};

export default Calculator; */

/* Explanation:
Line 112 -->setOperator(op);
setOperator(op) is a function call that sets the value of the operator state variable to the value of the op argument.

In the context of the React calculator component, the setOperator function is called when an arithmetic operator button is clicked. The op argument passed to setOperator is the value of the clicked button (e.g., +, -, *, or /).

By setting the operator state variable to the clicked button's value, the component can keep track of which operator was selected and use it to perform the appropriate arithmetic operation when the equals button is clicked.


Line 111--->setError('');
setError('') is a function call that sets the value of the error state variable to an empty string.

In the context of the React calculator component, the setError function is called when an arithmetic operator button is clicked and the num1 or num2 input field is empty. This indicates a validation error, and the setError function is called to display the appropriate error message to the user.

When the user enters valid input values into the input fields, the setError('') call is used to clear any existing error messages, so that the component can display the result of the arithmetic operation instead. */
