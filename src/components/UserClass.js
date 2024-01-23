import React from "react";
import { GITHUB_URL } from "../utils/constants";

class UserClass extends React.Component{
    
    constructor(props){
        super(props);
        this.state={
            login:"default name",
            image:"default",
        };
    }

    async componentDidMount(){
    const data=await fetch(GITHUB_URL);
    const json=await data.json();
    this.setState({
       login:json.login,
       image:json.avatar_url,    
    });
    }

    componentDidUpdate(){
        console.log("ComponentDidUpdate called");
    }

    componentWillUnmount(){
        console.log("ComponentWillUnMount Called");
    }

    render(){
        const {login,image}=this.state;
        return(
            <div className="user-card">
                <h1>Name:{login}</h1>
                <img src={image}></img>
            </div>
        );
    }
}

export default UserClass;