//useState
//useEffect
//useReducer
//useContext
//useMemo useReference
//useCallback

//state , this.setState

import {React,useState} from "react";

const StateExample=()=>{
    const [name] = useState("Rku");
    return <h1>{name}</h1>
}
export default StateExample;
