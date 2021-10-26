import React from 'react'


export default function Card({src,title,discription,price}){
    return (
        <div className="my-2 mx-1 p-3" style={{border:'2px solid darkCyan'}}>
            <div className="img">
                <img src={src} alt="" width='150px' />
            </div>

            <div className="title">
                {title}
            </div>

            <div className="discription">
                {discription}
            </div>

            <div className="price">
                {price}
            </div>


        </div>
        

    )
}