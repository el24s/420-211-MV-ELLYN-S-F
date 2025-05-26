import { useEffect } from "react"
import "./interest.css"
function Interest() {
    const [data, setData] = useState(null)
    // let id =2;
    useEffect(() => {
      fetch("https://www.themealdb.com/api.php" + id)
      .then(res => res.json())
      .then(data => console.log(data))
    },[id])   
     
    function switchThis() {
        
    }
    return (
        <>
        <h2> Mes centres d'intérêts </h2>
        <div className="mainPage">
        <div className="secondPage">
            <h1>  </h1>  
        </div>
        <div>
            there3
            <button className="" onClick="switchThis"></button>
        </div>
        </div>
        </>
    )
}

export default Interest