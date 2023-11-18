import React from 'react'

const CheckoutNavbar = () => {
  return (
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
  )
}

export default CheckoutNavbar