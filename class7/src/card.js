import React from "react";


function Cards(props){

let headCss = {border:'10px',borderColor:"darkcyan",width:"250px",borderRadius:50 }

return( 


    <div style={headCss}>
        <div style={{borderColor:'blue',border:'5px'}}>
            <h2 style={{backgroundColor: "red", borderColor:"blue"}}>{props.head}</h2>
            <p>{props.para}</p>
            <h5>{props.update}</h5>
        </div>
    </div>
    
)
}



export default Cards;