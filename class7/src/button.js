import React from "react";

function Button(props){
    return <button>Click me</button>
}

function LoginButton(props){
    return <button>{props.buttonText}</button>
}


export {Button,LoginButton}