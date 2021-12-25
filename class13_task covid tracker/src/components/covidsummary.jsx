import React from 'react';
import Card from './card';
import NumberFormat from 'react-number-format';
import image from './image/covid.gif'
const Covidsummary = (props) => {
    const {
        totalconfirmed,
        totalrecovered,
        totaldeaths,
        country
    } = props;
    return (
        <div >

            <h1 style={{ textTransform: "capitalize", backgroundColor: "#a8dadc", padding: "40px" }}>{country === "" ? "CORONA REPORT ALL OVER THE WORLD" : country}</h1>
            <div style={{
                display:"flex",
                justifyContent:"center",
                marginLeft:"400px",
                marginBottom:'20px'
            }} >
                <div className="container" >
                    <div className="row" >


                        <div className="col-3" style={{ backgroundColor: "#e63946", margin: "10px", color: "black" }}>

                            <Card  >
                                <span style={{color:'#f1faee'}}><b> Total Confirmed </b></span> <br /><br /><br />
                                <span>
                                    {

                                        <NumberFormat style={{color:'#f1faee'}} value={totalconfirmed} displayType={'text'} thousandSeparator={true} />
                                    }
                                </span>
                            </Card >
                        </div>
                        
                        <div className="col-3" style={{ backgroundColor: "#e63946", margin: "10px", color: "black" }}>

                            <Card>
                                <span style={{color:'#f1faee'}}><b>Total Deaths </b>  </span> <br /><br /><br />
                                <span>
                                    {

                                        <NumberFormat style={{color:'#f1faee'}} value={totaldeaths} displayType={'text'} thousandSeparator={true} />
                                    }


                                </span>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Covidsummary