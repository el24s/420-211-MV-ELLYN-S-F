import "./home.css"

function Home() {
    // https://www.sitew.com/Conseils-experts-en-creation-de-site/exemples-pages-accueil
    return(
        <>
        <div className="container">
            <div className="portfolio">
                <h3> Portfolio </h3>
                <h4> Une présentation personnelle et une présentation de l'expérience professionnelle.</h4>
            </div>
            <div className="interest">
                <h3> Intérêt </h3>
                <h4> Une démonstration d'une de mes passions avec de jolies images.</h4>
            </div>
            <div className="projectForm">
                <h3> Projets </h3>
                <h4> Pour bonifier les intérêts en ajoutant de nouveaux projets dans notre boutique.</h4>
            </div>
        </div>
        </> 
    )
}

export default Home