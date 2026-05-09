import React, { useState, useEffect } from 'react';

function App() {
  // We create a piece of state called 'message' and a function 'setMessage' to update it
  const [message, setMessage] = useState("Loading...");
  useEffect(() => {
    // 1. Fetch the data from your backend port
    fetch('http://localhost:5000/api/hello')
      .then((response) => response.json()) // 2. Convert the response to JSON
      .then((data) => {
        // 3. Store the message from {"message": "..."} into our state
        setMessage(data.message); 
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setMessage("Failed to connect to backend.");
      });
  }, []); // The empty array [] means this runs only once when the page loads
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>{message}</h1> 
      <p>Full-Stack Connection Successful!</p>
    </div>
  );
}

export default App;