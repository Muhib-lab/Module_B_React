import logo from './logo.svg';
import './App.css';
import Navbar from './component/navbar';
import BELOWNAVBAR from './component/belownavbar';
import FirstCard from './component/firstcard';
import CardsNested from './component/cards';
import { Box } from '@mui/system';
import CardsNested1 from './component/cards1';
import NestedGridCard from './component/card2'
import NestedGridCard1 from './component/card2a';
import NestedGridCard2 from './component/card2b';
import ColumnsGrid from './component/cardGroup';
import LabelBottomNavigation from './component/footer';



function App() {
  return (
    <div className="App">

      <Navbar />

      <BELOWNAVBAR />
      
      <FirstCard  />

      {/* ..........................................3 card in a row */}
    
    <div style={{display:'flex'}}>
    
      <CardsNested title='New Arrival' rupees='$3.99' description='Trending now' description1='Trending now' firstImg='https://media.istockphoto.com/photos/groceries-picture-id171302954?k=20&m=171302954&s=612x612&w=0&h=kDpFXA8IoG22Uxog3YUmWvzBRzwyibd6r4S2v5z-Mno=' 
      secondImg='https://i2.wp.com/grocerybazaar.store/wp-content/uploads/2019/08/groceries.png?fit=800%2C800&ssl=1'  />
      
      <CardsNested title='Top Ranked Products' rupees='$5.50' description='1 Piece'  description1='1 Piece' firstImg='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2jjpHwIKqPjOw8ePrxvJ1iqugVdJCoYSJkQ&usqp=CAU' 
       secondImg='https://thumbs.dreamstime.com/b/groceries-23958998.jpg'  />

      <CardsNested title='Personel Protective ' rupees='$4.33'  firstImg='https://www.soocial.com/wp-content/uploads/2021/04/Grocery-Store-Names.jpg'
       secondImg='https://media.gettyimages.com/photos/groceries-picture-id165835430?s=612x612'  />

      </div>


      <div style={{display:'flex',marginTop:'-20px'}}>
    
      <CardsNested title='Drop Shipping' rupees='$3.99' description='1 Piece' description1='1 Piece' firstImg='https://media.istockphoto.com/photos/groceries-picture-id171302954?k=20&m=171302954&s=612x612&w=0&h=kDpFXA8IoG22Uxog3YUmWvzBRzwyibd6r4S2v5z-Mno=' 
      secondImg='https://i2.wp.com/grocerybazaar.store/wp-content/uploads/2019/08/groceries.png?fit=800%2C800&ssl=1'  />
      
      <CardsNested title='Global Original Sources' rupees='$5.50' description='1 Piece'  description1='1 Piece' firstImg='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2jjpHwIKqPjOw8ePrxvJ1iqugVdJCoYSJkQ&usqp=CAU' 
       secondImg='https://thumbs.dreamstime.com/b/groceries-23958998.jpg'  />

      <CardsNested title='True View ' rupees='$4.33'  firstImg='https://www.soocial.com/wp-content/uploads/2021/04/Grocery-Store-Names.jpg'
       secondImg='https://media.gettyimages.com/photos/groceries-picture-id165835430?s=612x612'  />

      </div>

      {/* ......................................3 card in a row end */}


      {/* .....................................2 card in a row start */}

      <div style={{display:'flex'}}>

    <CardsNested1 image1='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8PrCoxoydihtTi5N4vU0NwmmWlhZRgfSbUg&usqp=CAU'
     title='Customized products' title1='Partner with one of 60,000 experienced manufacturers with design & production' 
        image2a='https://s.alicdn.com/@sc04/kf/Hb81daf4ceeeb4a3db25f2ceeb3b4e96bk.jpg_q80.jpg'
        image2b='https://s.alicdn.com/@sc04/kf/H0f3d666df34142c1a3acb50b96295e0eS.jpg_q80.jpg'
        image2c='https://s.alicdn.com/@sc04/kf/H61d3374f236c45d2b78ebfd3341059147.jpg_q80.jpg' 
        title2='Premium OEM Factories'     
        title3='Top-Ranking Suppliers'    
        image3a='https://s.alicdn.com/@sc04/kf/H53ce156c1b97458fb9508083244fa4b3P.jpg_q80.jpg'
        image3b='https://s.alicdn.com/@sc04/kf/H284adf42f29c4ce2911909acf0d9a6ee6.png_q80.jpg'
        image3c='https://s.alicdn.com/@sc04/kf/Hb93bfd7d812f4f3f8a1c09ee2d167badc.png_q80.jpg'  />
    <CardsNested1 title='Ready-to-ship products' title1='Source from 15 million products that are ready to ship, and leave the facility within 15' 
     image1='https://thumbs.dreamstime.com/b/delivery-truck-icon-natural-orange-round-button-isolated-143268426.jpg'   
      title2='Fast Dispatch'
      title3='Weekly Deals'
      image2a='https://s.alicdn.com/@sc04/kf/H8cc024747ab74510ab5283ee3ed44c61k.jpg_q80.jpg'
      image2b='https://s.alicdn.com/@sc04/kf/H166fb47daa154085af17a0a3d2972ae93.jpg_q80.jpg'
      image2c='https://s.alicdn.com/@sc04/kf/Haf9320422c0e4be9bca99636186dcbf3Q.jpg_q80.jpg'
      image3a='https://s.alicdn.com/@sc04/kf/H3e57508bab074f139ebb8125989b6ebcb.jpg_q80.jpg'
      image3b='https://s.alicdn.com/@sc04/kf/H0e44beed75d64620bf939ec0524601e6a.jpg_q80.jpg'
      image3c='https://s.alicdn.com/@sc04/kf/H3841f117dbf94dfa89bf3dca45454c72D.jpg_q80.jpg'     />

    </div>
      
{/* .......................2 card in a row end */}




{/* ...........................nested grid card start */}

    <div >

    
    <NestedGridCard  />
    <NestedGridCard1 />
    <NestedGridCard2 />

    <h1>Just for you</h1>
    

    </div>

    {/* ...........................just for you card start */}

    <div style={{marginBottom:'40px'}}>

      <ColumnsGrid  image1='https://s.alicdn.com/@sc04/kf/H2d2cf1c40e7c4f5fa12257ffdb66edff5.jpg'
      para1='New style Bikini Beach Leopard Print Swimsuit Shorts Swimwear Children Kids Girl Set'
      price1='$5.00 - $9.20'
       title1='30 Bags (Min. Order)' 
       image2='https://s.alicdn.com/@sc04/kf/Hf7963202819d4c2384e557b6562b1cf8c.jpg'
       para2='Hot sale factory direct price custom cardboard packaging gift boxes'
       price2='$0.10 - $2.90'
       title2='1 Piece (Min. Order)'
       image3='https://s.alicdn.com/@sc04/kf/Ha0d776119362437582abfe16268e35e4g.jpg'
       para3='The new golf ladies summer tight-fitting slimming sports waist jersey set dress women'
       price3='$54.55 - $81.80'
       title3='1 Piece (Min. Order)'
       image4='https://s.alicdn.com/@sc04/kf/H16685c466bf941cda95e11143c60e410L.jpg'
        para4='Pet backpack portable Casual pet bag for pet custom'
        price4='$19.66 - $26.99'
        title4='3 Pieces (Min. Order)' />


<div> <br /></div>
        <ColumnsGrid  image1='https://s.alicdn.com/@sc04/kf/H06951797beb940b0bb99916ed4f3cee6x.jpg'
        para1='15.6in Garden Support Stake 2 Pack Half Round Metal Garden Plant Supports Border Support'
        price1='$1.08 - $1.88'
        title1='1 Piece (Min. Order)'
        image2='https://s.alicdn.com/@sc04/kf/Hfe3d50178505467ba67a4fdc3f6691b3A.jpg'
        para2='high elasticity waterproof memory foam mattress pet bed'
        price2='$10.29 - $14.14'
        title2='10.0 Pieces (Min. Order)'
        image3='https://s.alicdn.com/@sc04/kf/H061d3feb40e942728fdf645227c123d7s.jpg'
        para3='Europe and the United States 2021 summer popular new U-neck hollow long-sleeved'
        price3='$4.39 - $6.29'
        title3='1 Piece (Min. Order)'
        image4='https://s.alicdn.com/@sc04/kf/H6b6d62b38310458e9e9b4081bafd7f62X.jpg'
        para4='2021 autumn winter sweater letter printing fashion casual large women'
        price4='$9.68 - $10.38'
        title4='1 Piece (Min. Order)' />

    </div>
    <div style={{alignItems:'center'}}>
      <LabelBottomNavigation />
    </div>
     

    </div>
  );
}

export default App;
