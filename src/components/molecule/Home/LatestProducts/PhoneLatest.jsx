import React from 'react'
import CustomButton from '../../../Atoms/WithCVA/CustomButton'

const PhoneLatest = () => {
  return (
    <section
                className='w-[100%] max-w-full overflow-hidden md:w-[50%] relative h-[650px] flex items-center flex-col bg-white text-white bg-cover bg-center'>
                    {/* 
                    <div className="site-banner site-banner--light site-banner--half"
                    data-ot-expose="{&quot;tip&quot;:{&quot;c&quot;:&quot;3122-2|1-banner&quot;},&quot;event&quot;:&quot;view_item_list&quot;}"
                    role="button" tabIndex="-1">
                    <picture className="responsive-image site-banner__image site-banner__image">

                        <source media="(max-width: 720px)" type="image/jpeg"
                            srcSet="//i02.appmifile.com/351_operator_id/05/05/2023/19d9489a4da7932901d5535c6bd94c4f.jpg" />

                        <source media="(min-width: 720px) and (max-width: 1024px)" type="image/jpeg"
                            srcSet="//i02.appmifile.com/351_operator_id/05/05/2023/19d9489a4da7932901d5535c6bd94c4f.jpg" />


                        <img src="//i02.appmifile.com/351_operator_id/05/05/2023/19d9489a4da7932901d5535c6bd94c4f.jpg"
                            alt="Redmi Note 12" loading="lazy" />
                    </picture>
                    <div className="site-banner__info site-banner__info">
                        <h2 className="site-banner__title mi-brand mi-brand--redmi">Redmi Note 12</h2>
                        <h4 className="site-banner__subtitle">50MP triple kamera | Layar AMOLED 120Hz</h4>
                        <div className="site-banner__actions">
                                    
                                    <a
                                href="https://www.mi.co.id/id/product/redmi-note-12/?skupanel=1"
                                className="cta-button-simple  site-banner__link"
                                tabIndex="0"><span className="text-[#ff6900]">Beli sekarang</span><i
                                    className="micon micon-link-arrow text-[#ff6900]"></i></a>
                                <a href="https://www.mi.co.id/id/product/redmi-note-12/"
                                className="cta-button-simple site-banner__link"
                                tabIndex="0"><span className="">Learn More</span><i
                                    className="micon micon-link-arrow"></i></a>
                                </div>
                    </div>
                    </div>
                    */}
                
                <picture
          className=" flex h-[700px] mx-auto overflow-hidden absolute w-auto z-1"
        >
          <source
            media="(max-width: 720px)"
            type="image/jpeg"
            srcSet="//i02.appmifile.com/67_operator_id/13/06/2023/8f2a3ef42c1fdc7f22980c0e69bb876e.jpg"
          />

          <source
            media="(min-width: 720px) and (max-width: 1024px)"
            type="image/jpeg"
            srcSet="//i02.appmifile.com/67_operator_id/13/06/2023/8f2a3ef42c1fdc7f22980c0e69bb876e.jpg"
          />

          <img
            className="h-full object-cover object-fit w-full object-center mt-[-80px] "
            src="//i02.appmifile.com/67_operator_id/13/06/2023/8f2a3ef42c1fdc7f22980c0e69bb876e.jpg"
            alt="XIAOMI 13T"
            loading="lazy"
          />
        </picture>
        <div
          id="site-banner__info"
          className="justify-center text-center  w-[500px] absolute z-2 top-[4%] gap-[0px] lg:gap-[0px] flex flex-col left-0 w-full py-[3.9vw] px-0 "
          fmp-c="4"
        >
            <div className="flex flex-col gap-[10px]">
                <h2
            id="title"
            className="text-black block text-[20px] md:text-[25px] lg:text-[40px] font-medium m-0 overflow-hidden text-ellipsis whitespace-pre-line "
          >
            Redmi 10 2022
          </h2>
          <h3
            id="subtitle"
            className="text-black block text-[20px] lg:text-[22px] font-normal m-0 overflow-hidden text-ellipsis whitespace-pre-line line-1"
          >
            Harga super Hemat
          </h3>
            </div>
          
          <div className="flex flex-col w-full gap-[10px]">



             <div className="flex-inline space-x-[0px] justify-center md:justify-left w-full">
              <div className='flex justify-center w-full'> 
              <CustomButton text="Beli sekarang" intent="accent_nobg" border="yes" hover="yes_underline" rounded="yes" icon=">" order="textFirst"/>
              <CustomButton text="Learn More " intent="dark_nobg" border="no" hover="yes_underline" rounded="yes" icon=">" order="textFirst"/></div>
            </div>
          </div>
          
           
          </div>

            </section>
  )
}

export default PhoneLatest