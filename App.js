import React from 'react';
import ReactDOM  from 'react-dom/client';
const heading = React.createElement(
    "h1",
    {id:"heading",xyz:"abc"},
    "Hello World from React!"
);
            

const parent=React.createElement
("div",
{id:"Parent"},
React.createElement("div",{id:"Child"},
[React.createElement("h1",{},"Pavan Kumar Pasumarthy"),React.createElement("h1",{},"Srinivas Rao Pasumarthy")]));

const root=ReactDOM.createRoot(document.getElementById("root"));
            
root.render(parent);