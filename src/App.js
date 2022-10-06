import './App.css';
import React, {useState} from 'react';

function App() {
const [lastName, setLastName] = useState('');
const [error, setError] = useState(false);

const handleSubmit = (e) => {
  e.preventDefault();
  if(lastName.length === 0){
    setError(true)
}
  try {
    setLastName('');
    console.log('lastName:', lastName);
  } catch (error) {
    error()
  }
}

return (
  <div>
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder='lastName' name="last_name" value={lastName} onChange={event => setLastName(event.target.value)}/>
      {error&&lastName.length <= 0 ? <label>Last Name can't be Empty</label> : ""}
      <button type="submit">Submit form</button>
    </form>
  </div>
);
};

export default App;
