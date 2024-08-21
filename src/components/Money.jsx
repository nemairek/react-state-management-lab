import App from "../App";
import '../App.css';







const Money = (props) => {
    
    const {money} = props

    return(
    <>
    <h1>Remaining Money: {money}</h1>
    </>
    )
  }

export default Money