import { useState } from "react";

const User =(props)=>{
    const{name,location,contact}=props;
    const [count,setCount]=useState(0);
    return (
        <div className="user-card m-4 p-4 bg-gray-50 rounded-lg">
            <h2>Name:{name}</h2>
            <h3>Location:{location}</h3>
            <h4>Contact:{contact}</h4>
            <button onClick={()=>{
                setCount(count+1);
            }}>Count:{count}</button>
        </div>
    );
}

export default User;