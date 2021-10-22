import React from "react";



function Card(){
    const cardInfo = [
        {
        image:"https://cdn.vox-cdn.com/thumbor/QytuXmIKkJXnSXTY-NZ5_rhnczM=/0x0:2040x1360/1200x0/filters:focal(0x0:2040x1360):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/9599227/jbareham_171101_2099_A_0088_02.jpg" , 
        title:"IPhone X" ,
         text:"Discontinued"
        },
        {image:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone11-black-select-2019?wid=834&hei=1000&fmt=jpeg&qlt=95&.v=1566956144418" , 
        title:"IPhone 11" , 
        text:"Discontinued"
        },
        {image:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-blue-select-2020?wid=940&hei=1112&fmt=png-alpha&.v=1604343704000" , 
        title:"IPhone 12" ,
         text:"1000$"
        },
        {image:"https://static.toiimg.com/thumb/resizemode-4,msid-78671024,imgsize-500,width-800/78671024.jpg" , 
        title:"IPhone 12 Pro max" ,
         text:"1200$"
        }
    ]
    const renderCard =(card,index)=>{

        <div className='main' style={{width:'20rem',border:'3px solid blue',margin:'0px auto'}} key={index}>
            <img  width='100%'  src={card.image}/>
            <div style={{padding:'5px'}}>
            <h2 style={{textAlign:'left'}}>{card.title}</h2>
            <p>{card.text}</p>
            <p>price: 150Rs</p>
            </div>

        </div>
    }

    return (
        <div className='App'>
            {cardInfo.map(renderCard)}
        </div>
    )
}




export default Card;