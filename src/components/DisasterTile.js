import React from "react";


function DisasterTile({disaster}){
    return (
        <div>
          <h1>{`${disaster.declarationTitle} of ${disaster.fyDeclared}`}</h1> 
          <p>{`Type: ${disaster.incidentType}`}</p>
          
        </div>
    )
}

export default DisasterTile;