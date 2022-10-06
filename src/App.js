import './App.css';
import Input from './components/Input';

function App() {
return (
  <div className='App'>
  <div className='exerciseQuestion'>
    <h1>FTL FRONTDEV TEST</h1>
    <h3>
      Write a simple component with an input and a submit button. 
      This submit button must retrieve the input’s value and save 
      it to a variable. If the “submit” button is pressed without 
      filling the input, an error message must be displayed below the input.
    </h3>
  </div>
   
    <Input />
  </div>
);
};

export default App;
