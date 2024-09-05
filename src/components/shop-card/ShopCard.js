import './ShopCard.css'
import '../store/Store.css'

function ShopCard({card}){
  return(
    <div className='main-content'
        style={{backgroundImage: `url(${card.img})`,
                backgroundRepeat: "no-repeat",
                backgroundOrigin: "content-box",
                backgroundSize: "contain"}}>
      
      <div className='content-header'>
        <h1>{card.name}</h1>
        <div className='description'>{card.color}</div>
      </div>
    
      <div className='content-footer'>
        <div className='price'>${card.price}</div>
        <button className='btn'>ADD TO CART</button>
      </div>    
    </div>
  )
}

export default ShopCard;