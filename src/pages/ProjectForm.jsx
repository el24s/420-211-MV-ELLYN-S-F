import { useState } from "react";

function ProjectForm() {
    // const [add, setAdd] = useState[""];

    function enter(formData) {
        const take = formData.get("technologies");

    }

    // function next {
    //     add ? 
    // }
    return (
        <>
           

            <div className="form">

                <h1> ProjectForm </h1>

                <form action={enter} className="new">
                    <label htmlFor="title">Titre:
                        <input
                            type="text"
                            name="title"
                            id="title"
                        />
                    </label>
                    <label htmlFor="description">Description:
                        <input
                            type="text"
                            name="desc"
                            id="desc"
                        />
                    </label>

                    <fieldset>
                        <legend> Technologies </legend>

                        <label>
                            HTML
                            <input
                                type="checkbox"
                                name="technologies"
                                defaultChecked={true}
                                value="html"
                            />
                            
                        </label>
                        <label>
                            CSS
                            <input
                                type="checkbox"
                                name="technologies"
                                value="css"
                            />
                        </label>
                        <label>
                            Java
                            <input
                                type="checkbox"
                                name="technologies"
                                value="java"
                            />

                        </label>
                        <label>
                            JavaScript
                            <input
                                type="checkbox"
                                name="technologies"
                                value="javascript"
                            />

                        </label>
                        <label>
                            React
                            <input
                                type="checkbox"
                                name="technologies"
                                value="react"
                            />

                        </label>
                    </fieldset>

                    {/* <div className="images">
                        <img src="src\assets\.png" alt="Chargement" />
                        <img src="src\assets\.png" alt="Chargement" />

                    </div> */}
                    
                        <img src="src\assets\HTML.png"/>
                        <img src="src\assets\CSS.png" alt="Chargement..." />                            
                        <img src="src\assets\java.png" alt="Chargement..." />
                        <img src="src\assets\JavaScript.png" alt="Chargement..." />
                        <img src="src\assets\react.png" alt="Chargement..." />


                    <button className="clicky" onClick={enter}> Ajouter un projet </button>

                </form>

            </div>
        </>
    )
}

export default ProjectForm