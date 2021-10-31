import React from "react";

export default function ShowUser(props){
    return(
        <>
        <div>
            <h1>Details</h1>
            <p>Name:{props.record.name}</p>
            <p>Email:{props.record.email}</p>
            <p>City:{props.record.city}</p>
            <p>mo:{props.record.mobile}</p>
        </div>
        <div>
        <button type="button" class="btn btn-primary" onClick={props.handleResetDetails} >ResetDetails</button>
        </div>
        </>
    );
}