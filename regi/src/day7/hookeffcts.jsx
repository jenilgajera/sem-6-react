import React from "react";

function Fetchuserdata(){
    return new Promise((resolve)=>{
        setTimeout(() => {
            // Promise resolves with an object containing name: "vaibhav goriya" and id: 1.
            resolve({name:"vaibhav goriya",id:1});
        }, 5000);
    });
}
function ApiSimulation(){
    const[name,setname]=React.useState("loding.....");
    const[id,setid]=React.useState("loding.....");
    React.useEffect(()=>{
        Fetchuserdata().then((data)=>{
            setname(data.name);
            setid(data.id);
        });
    },[]);
    //Add an empty dependency array [] in useEffect to ensure it runs only once.
    return (
        <>
        <div>
            id : {id}
            <br />
            usename : {name}
        </div>
        </>
    )
}

export default ApiSimulation;