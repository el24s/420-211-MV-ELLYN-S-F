import React from "react";
import { useState } from "react";

function ProjectForm() {
    // const [add, setAdd] = useState[""];

    function enter(formData) {
        const jutr = formData.get("new");
    }
    return (
        <>
            <h1> ProjectForm </h1>

            <div className="form">
                <form action={enter}>
                    <label htmlFor="title">Titre: </label>
                        <input
                            type="text"
                            name="title"
                            id="title"
                        />
                    
                    <button className="clicky"> Ajouter un projet </button>

                </form>

            </div>
        </>
    )
}

export default ProjectForm