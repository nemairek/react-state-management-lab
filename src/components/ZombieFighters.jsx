import App from "../App";
import '../App.css'


const ZombieFighters = (props) => {
  const {fighter} = props
  return(
<ul>

    <li>
      <img src={fighter.img}/>
      <h2>Name: {fighter.name}</h2>
      <h2>Price: {fighter.price}</h2>
      <h2>Strength: {fighter.strength}</h2>
      <h2>Agility: {fighter.agility}</h2>
     
        
      <button type="submit">Add</button>cd ..
    </li>
</ul>
  )
}






export default ZombieFighters
