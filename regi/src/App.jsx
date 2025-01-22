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
import StateExample from './day5/hooksexaple1';
import Stateexaple2 from './day5/Stateexaple2';
import Statemgt3 from './day5/Statemgt3';
import Exce1 from './day6/Exce1';
import Exce2 from './day6/Exce2';
import Exce3 from './day6/Exce3';
import Exce4 from './day6/Exce4';
import ApiSimulation from './day7/hookeffcts';
import Hooksuseeffect1 from './day7/hookeffcts';
import Image_Slider from './day8/Image_Slider';
import CustomCom from './day9/Compo1';
import Register from './day9/Register';


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

    {/* <StateExample/> */}
    {/* <Stateexaple2/> */}
    {/* <Statemgt3/> */}
    {/* <Exce1/> */}
    {/* <Exce2/> */}
    {/* <Exce3/> */}
    {/* <Exce3/> */}
    {/* <ApiSimulation/> */}
    {/* <Image_Slider/> */}
    {/* <CustomCom/> */}
    <Register/>
    </>
  )
}

export default App

//3. implement image changer with useffect 
//take 4 image list change image at interval of 4 second