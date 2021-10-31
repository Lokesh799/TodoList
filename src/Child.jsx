import React from "react";



export default class Child extends React.Component{
    render(){
      return(
 
        <>
          <h1>Child Component</h1>
          <h1>number:{this.props.number}</h1>  
          <h1>string:{this.props.string}</h1>  
          <h1>Date:{this.props.data}</h1>  
          
          
      </>
      )
  }
}