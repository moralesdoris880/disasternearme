import React,{useState, useEffect} from "react";
import DisasterList from "./DisasterList";
import DisplayMap from "./DisplayMap";

function Search(){
    const[states,setStates]= useState([ 'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY' ]);
    const[disasters,setDisasters]= useState([]);
    const[filters,setFilters]= useState("");
    const[isSubmitted, setIsSubmitted]= useState(false);

    useEffect(()=>{
        fetch(`https://www.fema.gov/api/open/v2/DisasterDeclarationsSummaries?$filter=(state%20eq%20%27${filters}%27)`)
        .then(response => response.json())
        .then(data => setDisasters(data))
    },[filters]);

    function handleSubmit(){
        return (setIsSubmitted(!isSubmitted))
    }

    return (
        <div>
            <div>
                <select onChange={(e)=> {
                    setIsSubmitted(false)
                    return (setFilters(e.target.value))
                }
                }>
                    {states.map((state)=> <option key={state}>{state}</option>)}
                </select>
                <button onClick={handleSubmit}>{isSubmitted? "Submitted!":"Submit"}</button>
            </div>
            {isSubmitted? <div>
                <DisasterList disasters={disasters}/>
                <DisplayMap />
                </div> : null}
        </div>
    )
}

export default Search;