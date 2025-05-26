import "./portfolio.css"
function Portfolio() {
    return (
        <>
            <h2> </h2>

        <div className="mainPage">
            <div>
                {/* <img src="src\assets\rollers.png"/>
                <img src="src\assets\wynonnaearp.png"/> */}
            </div>
            <div className="name">
                <img src="src\assets\sabrina.png"/>
                <h2> Ellyn Saint-Firmin </h2> 
            </div>
            
            <div className="quality">
                <ul>
                    <h3> Mes qualités </h3>
                    <li>gentille</li>
                    <li>souriante</li>
                    <li>dynamique</li>
                </ul>     
            </div>
            <div className="passions">
                <ul>
                    <h3> Mes passions </h3>

                    <li> lire </li>
                    <li> cuisiner</li>
                    <li> gymnastique artistique</li>
                    <li> badminton</li>
                    <li> patin à roulette </li> 
                </ul>
            </div>
            {/* <button className="seeMore"> Click or not </button> */}
            {/* <h2> https://www.w3schools.com/css/css_display_visibility.asp </h2> */} 
            
        </div> 
        <div className="professionnel">
            <h2> Experiences </h2>

                <div className="process">

                    <ul>
                        <li> École secondaire Henri-Bourassa</li>
                        <li> Bubble Tea Maker/ Cashier</li>
                        <li> Concours robotique Robotique FIRST Québec</li>
                        <li> Compétiton de gymnastique artistique au Jeux du Québec</li>
                    </ul>
                </div>
        </div>
        <div className="projetsInfos">
                    
        </div>

        </>
    )
}

export default Portfolio