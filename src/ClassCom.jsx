import React from "react";

class ClassCom extends React.Component{
    render()
    {
        return(
            <>
            <h1> class Component</h1>
            <p>

When creating a React component, the component's name must start with an upper case letter.

The component has to include the extends React.Component statement, this statement

 creates an inheritance to React.Component, and gives your component access to React.Component's functions.

The component also requires a render() method, this method returns HTML</p>
            </>
        )
    }
}
export default ClassCom;