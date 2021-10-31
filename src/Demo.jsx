import React, { Component } from 'react';
 import Child from "./Child";


export default class Demo extends React.Component{
    render(){
        return(
            <>
              <h1>class parent</h1>
                < Child number={3} string={"this is string"} data={new Date().toLocaleString() + ''}/> 
            </>
        )
    }
}