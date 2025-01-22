import { useEffect, useState } from "react";
import { Promise } from "bluebird";
Promise.config({cancellation: true});
const fetchuser = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: 13,
        name: "RJ",
      });
    }, 5000);
  });
};
const Cleanup = () => {
  const [id, setid] = useState("loading....");
  const [name, setname] = useState("loading....");
  useEffect(() => {
    const promise = fetchuser().then((var1) => {
      setid(var1.id);
      setname(var1.name);
    });
    return () => {
      promise.cancel(); // Cancel the promise when cleanup function is called
    };
  }, []);

  return (
    <div>
      <h1>User Id : {id}</h1>
      <h1>User Name : {name}</h1>
    </div>
  );
};

export default Cleanup;

//create a registration form
//with following details
//1.cricketer name (text box) minimum 8 character
//2.gender (radio button )
//3.email (text box) email formet validation 
//4. match (checkbox ) odi , test , t20 , Domestic
//5. passoword and confirm passoword  both  password should be same 
//6 .save button 
//when user click on save button 
//all above details should be 
//displayed below form in 
// table format