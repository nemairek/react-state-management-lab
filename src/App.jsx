// src/App.jsx
import { useState } from 'react';
import ZombieFighters from './components/ZombieFighters';
import Money from './components/Money';
import Team from './components/Team';

  


const App = () => {
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [totalStrength, setTotalStrength] = useState(0);
  const [totalAgility, setTotalAgility] = useState(0);
  const [zombieFighters, setZombieFighters] = useState(
    [
      {
        name: 'Survivor',
        price: 12,
        strength: 6,
        agility: 4,
        img: 'https://via.placeholder.com/150/92c952',
      },
      {
        name: 'Scavenger',
        price: 10,
        strength: 5,
        agility: 5,
        img: 'https://via.placeholder.com/150/771796',
      },
      {
        name: 'Shadow',
        price: 18,
        strength: 7,
        agility: 8,
        img: 'https://via.placeholder.com/150/24f355',
      },
      {
        name: 'Tracker',
        price: 14,
        strength: 7,
        agility: 6,
        img: 'https://via.placeholder.com/150/d32776',
      },
      {
        name: 'Sharpshooter',
        price: 20,
        strength: 6,
        agility: 8,
        img: 'https://via.placeholder.com/150/1ee8a4',
      },
      {
        name: 'Medic',
        price: 15,
        strength: 5,
        agility: 7,
        img: 'https://via.placeholder.com/150/66b7d2',
      },
      {
        name: 'Engineer',
        price: 16,
        strength: 6,
        agility: 5,
        img: 'https://via.placeholder.com/150/56acb2',
      },
      {
        name: 'Brawler',
        price: 11,
        strength: 8,
        agility: 3,
        img: 'https://via.placeholder.com/150/8985dc',
      },
      {
        name: 'Infiltrator',
        price: 17,
        strength: 5,
        agility: 9,
        img: 'https://via.placeholder.com/150/392537',
      },
      {
        name: 'Leader',
        price: 22,
        strength: 7,
        agility: 6,
        img: 'https://via.placeholder.com/150/602b9e',
      },
    ],
  
  );


const totalStrengthCalculation = (team) => {
return team.reduce((acc, fighter) => acc + fighter.strength, 0)
};

const totalAgilityCalculation = (team) => {
  return team.reduce((acc, fighter) => acc + fighter.agility, 0)
  }






const handleAddFighter = (fighter) => { 
if (money >= fighter.price) {
  const newTeam = [...team, fighter];
      setTeam(newTeam);
      setMoney(money - fighter.price)
      setTotalStrength(totalStrengthCalculation(newTeam))
      setTotalAgility(totalAgilityCalculation(newTeam))
} else {console.log('not enough money')};

};

const removeFighter = (fighter) => {
  const fighterExists = team.some(member => member.name === fighter.name);
  if (fighterExists)  {
    const newTeam = team.filter(member => member.name !== fighter.name);
    setTeam(newTeam)
    setMoney(money + fighter.price)
      setTotalStrength(totalStrengthCalculation(newTeam))
      setTotalAgility(totalAgilityCalculation(newTeam))
  } else {console.log('No team member with this index')}

}


  return (
    <div>

<>
        {team.length !== 0 ? (
          <h1>Team:</h1>
          
        ) : (
          
         <p></p>
          
        )}
      </>

<>
        {team.length === 0 ? (
          <p>Pick some team members!</p>
        ) : (
          
          team.map((fighter, index) => (
            <>         
            <li key={index}>
      <h3>Name: {fighter.name}</h3>
      <h4>Price: {fighter.price}</h4>
      <h4>Strength: {fighter.strength}</h4>
      <h4>Agility: {fighter.agility}</h4>  
      <button onClick={() => removeFighter(fighter)}>Remove</button>
        
    </li>
            </>
          ))
        )}
      </>

        <>
          
        <Money
        key={Money.id}
        money={money}
        /> 
        </>

      <>
      <h1> Total Strength: {totalStrength} </h1>
      <h1> Total Agility: {totalAgility} </h1>
      </>


      {
      zombieFighters.map((fighter) => (
        <ZombieFighters
        key={ZombieFighters.id}
        fighter={fighter} 
        handleAddFighter={handleAddFighter}      
        />
      ))
     
    }
   
    </div>
  );
  
};




   








 

export default App
