import './App.css';
import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './components/Card';


let dataObj = [
  {
    name: "Men Shirt",
    category:"men",
    discpriton: "New Black Shirt For Men",
    imge: "https://cdn.shopify.com/s/files/1/0262/7721/6319/products/01_e9c400c7-50d5-4f6c-93e9-eb09c4b866b4_510x@2x.progressive.jpg?v=1613130498",
    price: "499",
  },
  {
    name: "Men Shirt",
    category:"men",
    discpriton: "New Black Shirt For Men",
    imge: "https://cdn11.bigcommerce.com/s-pkla4xn3/images/stencil/1280x1280/products/13904/137983/Dudalina-Men-Shirt-2018-Long-Sleeve-Shirt-100-Cotton-Male-Casual-Embroidery-Formal-Business-Man-Shirt__19901.1544098303.jpg?c=2?imbypass=on",
    price: "499",
  },
  {
    name: "Men Shirt",
    category:"men",
    discpriton: "New Black Shirt For Men",
    imge: "https://ae01.alicdn.com/kf/HTB1EqHRXQOWBuNjSsppq6xPgpXaf/2020-New-Autumn-Man-Shirt-Pattern-Design-Long-Sleeve-Floral-Flowers-Print-Slim-Fit-Men-Casual.jpg_Q90.jpg_.webp",
    price: "499",
  },
  {
    name: "Men Shirt",
    category:"men",
    discpriton: "New Black Shirt For Men",
    imge: "https://sc04.alicdn.com/kf/Hdae17163cb0a4c1fbb300cc754e19e81l.jpg",
    price: "499",
  },
  {
    name: "women Shirt",
    category:"women",
    discpriton: "New Black Shirt For Men",
    imge: "https://i5.walmartimages.com/asr/cc578322-854a-442b-b82b-7d7323314a60.63058bcd71bdfb060b292e065a744682.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
    price: "499",
  },
  {
    name: "women Shirt",
    category:"women",
    discpriton: "New Black Shirt For Men",
    imge: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiJ9hcPiH_pN1uw6O0cSLGsGqke0dNey50zg&usqp=CAU",
    price: "499",
  },
  {
    name: "women Shirt",
    category:"women",
    discpriton: "New Black Shirt For Men",
    imge: "https://cdn.shopify.com/s/files/1/0671/0621/products/z3xc21z31c_1600x.jpg?v=1633364933",
    price: "499",
  },
  {
    name: "women Shirt",
    category:"women",
    discpriton: "New Black Shirt For Men",
    imge: "https://bigmapapparel.com/wp-content/uploads/2020/08/HTB1L54PX6b.heNjSZFAq6AhKXXad.jpg",
    price: "499",
  },
  {
    name: "women Shirt",
    category:"women",
    discpriton: "New Black Shirt For Men",
    imge: "https://manamanee.net/wp-content/uploads/2020/06/woman-shirt-5-800x800.jpg",
    price: "499",
  },
  {
    name: "kids Shirt",
    category:"kids",
    discpriton: "New Black Shirt For Men",
    imge: "https://alprints.com/wp-content/uploads/2018/09/kids-tshirt-design.jpg",
    price: "499",
  },
  {
    name: "kids Shirt",
    category:"kids",
    discpriton: "New Black Shirt For Men",
    imge: "https://static.fibre2fashion.com/MemberResources/LeadResources/1/2018/5/Buyer/18148222/Images/18148222_0_kids-printed-t-shirt.jpg",
    price: "499",
  },
  {
    name: "kids Shirt",
    category:"kids",
    discpriton: "New Black Shirt For Men",
    imge: "https://static.parenting.com/wp-content/uploads/2021/06/30194223/the-performance-classic-tee-stay-cool.png",
    price: "499",
  },
  {
    name: "kids Shirt",
    category:"kids",
    discpriton: "New Black Shirt For Men",
    imge: "https://ae01.alicdn.com/kf/H7c0e8eb327d14d27befe51970e086e9bF/Summer-Boys-Shirts-Cartoon-Print-Kids-Shirt-Fashion-Cotton-Soft-Short-Sleeve-Baby-Boy-Shirt-For.jpg",
    price: "499",
  },
  {
    name: "kids Shirt",
    category:"kids",
    discpriton: "New Black Shirt For Men",
    imge: "https://static.fibre2fashion.com/MemberResources/LeadResources/1/2018/9/Buyer/18153280/Images/18153280_0_kids-shirt.jpg",
    price: "499",
  },
]





function App() {

  const [currentCards, setCards] = useState(dataObj)

  let changeObjs = (e) =>{
    let y =e.target.value

    y=== 'all categories'?setCards(dataObj):setCards(dataObj.filter(x=>x.category === y))

    // let newArrayObject = dataObj.filter(x=>x.category === y)
    // setCards(newArrayObject)

    // console.log(newArrayObject)
  }


  return (
    <div className="container">

    <div>
      <h2 className='text-center mt-4 mb-3 bg-dark text-light'>MAG STORE</h2>
    </div>

    <div className='mb-3'>
      <select name="" id="" onChange={(e) =>changeObjs(e)}>
        <option value="all categories">All Categories</option>
        <option value="men">Men</option>
        <option value="women">Women</option>
        <option value="kids">Kids</option>
      </select>
      </div>
      {/* <button onClick={changeObjs}>Click here</button> */}


      <div className="d-flex justify-content-start align-items-center flex-wrap">

{
  currentCards.map((x,y)=>{
    return <Card key={y} src={x.imge} title={x.name} discription={x.discpriton} price={x.price}/>
  })
}


</div>
    </div>
  );
}

export default App;
