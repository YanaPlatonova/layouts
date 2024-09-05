import './ShopItem.css';
import '../store/Store.css';

function ShopItem({item}){
  return(
    <div className='item-content'>
        <img src={item.img} alt="" width='100px'></img>
        <h1>{item.name}</h1>
        <div className='description'>{item.color}</div>
        <div className='price'>${item.price}</div>
        <button className='btn'>ADD TO CART</button>
    </div>    
  )
}

export default ShopItem;