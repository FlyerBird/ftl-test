import React, {useState} from 'react';

function Input() {
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
    <div className='exerciseAnswer'>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Write something here' name="last_name" value={lastName} onChange={event => setLastName(event.target.value)}/>
            {error&&lastName.length <= 0 ? <p style={{ color: 'red' }}>The previous field cannot be empty</p> : ""}
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default Input