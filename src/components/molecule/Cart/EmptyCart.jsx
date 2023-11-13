import React from 'react'

const EmptyCart = () => {
  return (
    <div id="cart-empty" class="w-full max-w-full">
    <section class="w-full h-full flex flex-col p-20 items-center">
      <img
        class="cart-empty-section__image"
        alt="Keranjang Anda kosong."
        src="//i01.appmifile.com/webfile/globalimg/i18n_frontend/cart/cart-empty.svg"
      />
      <p class="text-[#b0b0b0] text-[20px] leading-[24px] mt-[26px]">
        Keranjang Anda kosong.
      </p>
      {/* Add later on*/}
      <button
        class="py-[12px] px-[36px] mt-[26px] bg-[#ff6700] text-white"
        aria-label="Belanja sekarang >"
      >
        Belanja sekarang &gt;
      </button>
    </section>
  </div>
  )
}

export default EmptyCart