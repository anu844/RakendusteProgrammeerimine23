
import './App.css';
import React, { useState } from 'react';

function App() {
  const initialHobbies = ['Muusika kuulamine', 'Heegeldamine', 'Taimede kasvatamine', 'Looduses jalutamine', 'Lugemine', 'Joonistamine', 'Puslede kokkupanemine', 'Koeraga mängimine', 'Ristsõnade lahendamine', 'Netflixi vaatamine', 'Kingituste tegemine', 'Küpsetamine'];

  // Kasuta useState'i, et luua dünaamiline nimekiri hobidest
  const [hobbies, setHobbies] = useState(initialHobbies);

  return (
    
    <div className="App">
      <header className="App-header">
        <h1>Anu Sarapuu</h1>
        <a className="allajoonitud">
          Minu hobid:
        </a>
        <ul>
          {hobbies.map((hobi, index) => (
            <li key={index}>{hobi}</li>
          ))}
        </ul>
      
        <p>
          
        </p>
        
      </header>
    </div>
  );
}

export default App;
