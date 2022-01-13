import React,{useState} from "react";
import DisasterTile from "./DisasterTile";


function DisasterList({disasters}){
    const[updatedDisasters,setUpdatedDisasters]= useState(disasters.DisasterDeclarationsSummaries)

    return (
        <div>
            <div>
                <p>YEAR</p>
                <select>
                    
                </select>

                <p>COUNTY</p>
                <select>
                    
                </select>

                <p>TYPE</p>
                <select>
                    
                </select>
            </div>

            <div id="disasterlist">
                {updatedDisasters.map((disaster)=> <DisasterTile key={disaster.id} disaster={disaster} />)}
            </div>
        </div>
    )
}

export default DisasterList;