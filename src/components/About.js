import UserClass from "./UserClass";
import React from "react";


class About extends React.Component{
    constructor(props){
        super(props);
        this.state={
         count:0,   
        }
    }

    async componentDidMount(){
        console.log("componentDidMount Called")
    }

    render(){
        return(
            <div>
                <h1>This is all about me</h1>
                <UserClass name="Pavan"location="California"/>
            </div>
        );
    }

}
export default About;