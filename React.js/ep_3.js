import React from "react";
import ReactDOM from "react-dom/client";//The react-dom/client APIs let you render React components on the client (in the browser)

const jsxHeading = <h1 id="heading">EPISODE 3</h1>  
const jsxHeading_1= (<h2 id="">
    Hello Dhruvi</h2>) ; //for multiple lines use parenthesis


const root = ReactDOM.createRoot(document.getElementById("root"));
const root_1 = ReactDOM.createRoot(document.getElementById("root_1"));

root.render(jsxHeading);
root_1.render(jsxHeading_1);

const h_1 = function (){ (
    <div id="cont">
     <HeadingComponent_1/>
     <h3>Paddhnee Beth</h3>
     </div>
 );};//normal js function   (not rendered )
 


const HeadingComponent_1 = () => ( <h3>
     Hatttt 
     </h3>);

const HeadingComponent = () => (
   <div id="cont">
    <HeadingComponent_1/>
    <h3>Paddhnee Beth</h3>
    </div>
);

const root_2 = ReactDOM.createRoot(document.getElementById("cn"));
root_2.render(<HeadingComponent/>)




