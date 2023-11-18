import React, { useContext } from 'react'
import { CartContext } from '../context/cartProvider'
import EmptyCart from '../components/molecule/Cart/EmptyCart'
import CustomButton from '../components/Atoms/WithCVA/CustomButton'


const Cart = () => {
 const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal } = useContext(CartContext) 
 return (
    <div className="flex flex-col max-w-[100vw] h-full bg-white">
    <div
        id="checkout-cart-header"
        className="h-[157px] w-full max-w-full flex flex-col items-center bg-white mt-1"
      >
        <nav
          id="nav-checkout"
          className="hidden w-full max-w-full flex-col md:flex md:flex-row flex-wrap items-start justify-center md:items-center gap-5 md:gap-0 px-8 md:px-0 bg-white h-full mt-1"
        >
          <div className="nav-checkout-step first sm:pl-[35px]">
            <span className="nav-checkout-number active bg-[#ff6700] text-[#fff]"
              >1</span
            >
            <span className="nav-checkout-text active text-[#ff6700]"
              >Keranjang</span
            >
          </div>
          <div className="nav-checkout-step">
            <span className="nav-checkout-number">2</span>
            <span className="nav-checkout-text">Tempatkan pesanan</span>
          </div>
          <div className="nav-checkout-step">
            <span className="nav-checkout-number">3</span>
            <span className="nav-checkout-text">Ulasan</span>
          </div>
        </nav>
      </div>
  <div className="flex flex-col gap-4">
    {cartItems.map((item) => (
      <div className="flex justify-between items-center" key={item.id}>
        <div className="flex gap-4">
          <img src={item.image} alt={item.name} className="rounded-md h-24" />
          <div className="flex flex-col">
            <h1 className="text-lg font-bold">{item.name}</h1>
            <p className="text-orange-600">{item.price}</p>
          </div>
        </div>
        <div className="flex gap-4">
        <CustomButton onClick={() => {addToCart(item)}} text="+" intent="accent_bg"/>
          <p>{item.quantity}</p>
        <CustomButton onClick={() => {removeFromCart(item)}} text="-" intent="accent_bg"/>
        </div>
      </div>
    ))}
  </div>
  {
    cartItems.length > 0 ? (
      <div className="flex flex-col justify-between items-center">
    <h1 className="text-lg font-bold">Total: Rp {getCartTotal()}</h1>
    <CustomButton onClick={() => {clearCart()}} text="Hapus" intent="accent_bg"/>
  </div>
    ) : (
       <EmptyCart/>
    )
  }
</div>
  )
}

export default Cart