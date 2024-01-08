import React from 'react';
import ReactDOM  from 'react-dom/client';

const Title=()=>
    (<h1 id="heading" className='Pasumarthy'>
    Pavan Kumar
    </h1>
    );
            
const HeadingComponent=()=>{
    return(
        <div>
            <Title />
            <h1 id="heading"></h1>
        </div>
    );
}

const root=ReactDOM.createRoot(document.getElementById("root"));
            
root.render(<HeadingComponent />  ); 

