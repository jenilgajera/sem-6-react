import React from 'react'
import Component1 from './day2/component/class'
// import HtmlDoc from './day2/component/htmlcom'xxxx`AZ
import Timetable from './day2/component/timetable'
import Statemanagment from "../src/day3/component/statemanagment"
import Statemanage1 from "../src/day3/component/statemanage1";
import Propexample3 from './day4/propexample3';
import Purefun1 from './day4/purefun1';
import Mycustbutton from './day4/purefun2';
import Hooks from './day4/hooks';


function App() {
  return (
    // <Component1 />
    // <HtmlDoc />
    // <Timetable/>
    // <Statemanagment/>
    // <Statemanage1/>
    // <Propexample3/>
    <>
    {/* <Purefun1 var1={false} var2={"hello"}/>
    <Purefun1 var1={true} var2={"love you"}/> */}

    {/* <Mycustbutton var2={"bhakti"} />
    <br/>
    <Mycustbutton var1={true} var2={"bhakti"}  />
    <br />
    <Mycustbutton var2={"6ceb"} />
    <br />
    <Mycustbutton var1={true} var2={"B.tech"} /> */}

    <Hooks/>
    </>
  )
}

export default App