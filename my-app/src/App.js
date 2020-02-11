import React from 'react';
import Article from './componets/Article'
import './App.css';


let App =() => {
  return (
    <div className="App">
      <form>
        <p><input type = "text" placeholder = "ФИО"></input></p>

        <p><input type = "text" placeholder = "Марка Авто"></input> </p>

        <p><input  type = "text"  placeholder = "Гос Номера"></input></p>

        <p><input type = "text" placeholder = "Vin"></input></p>
         <input type = "submit"></input>
        </form>
    </div>
  );
}

export default App;
