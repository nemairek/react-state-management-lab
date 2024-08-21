import App from "../App";
import '../App.css'


const ZombieFighters = (props) => {
  const {fighter} = props
  const {handleAddFighter} = props
  return(
<ul>

    <li>
      <img src={fighter.img}/>
      <h2>Name: {fighter.name}</h2>
      <h2>Price: {fighter.price}</h2>
      <h2>Strength: {fighter.strength}</h2>
      <h2>Agility: {fighter.agility}</h2>
     
        
      <button onClick={() => handleAddFighter(fighter)}>Add</button>
    </li>
</ul>
  )
}






export default ZombieFighters
