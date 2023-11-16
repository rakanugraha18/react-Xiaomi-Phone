import LongCard2 from "../../Atoms/LongCard.jsx/longCard2.jsx";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import TitleSeeAll from "../../Atoms/BannerSeeAll/TitleSeeAll.jsx";
import { CartContext } from "../../../context/cartProvider.jsx";
import ShortCard2 from "../../Atoms/ShortCard.jsx/ImgCard.jsx";
import ImgFlagship from "../../Atoms/BannerFlagship/BannerFlagship2.jsx";
import TitleFlagship from "../../Atoms/BannerFlagship/TitleFlagship.jsx";
import BannerFlagship2 from "../../Atoms/BannerFlagship/BannerFlagship2.jsx";
import TitleCard from "../../Atoms/ShortCard.jsx/TitleCard.jsx";
import ImgCard from "../../Atoms/ShortCard.jsx/ImgCard.jsx";
import CustomButton from "../../Atoms/WithCVA/CustomButton.jsx";

export default function PocoSection() {
  const [dataPoco, setDataPoco] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostPerPage] = useState(8);
  const [postPerPageBig, setPostPerPageBig] = useState(2);

  const { cartItems, addToCart } = useContext(CartContext);

  const getApiPoco = async () => {
    const response = await axios(
      "https://6533becde1b6f4c59046358c.mockapi.io/Poco/Product/user/"
    );

    setDataPoco(response.data);
  };

  useEffect(() => {
    getApiPoco();
  }, []);

  const lastPostIndex = currentPage * postsPerPage; // 8 = 1 * 8
  const firstPostIndex = lastPostIndex - postsPerPage; // 0 = 8 - 8
  const shortCurrentPost = lastPostIndex - postPerPageBig * 2; // 4 = 8 - (2*2)
  const bigPostFirst = lastPostIndex - postPerPageBig; // 6 = 8 - 2
  const bannerImg = bigPostFirst / postPerPageBig; // 3 = 6 / 2
  const lastBannerImg = postsPerPage - currentPage; // 7 = 8 - 1
  const currentPost = dataPoco.slice(bannerImg, lastBannerImg); // index ke 3, (sampai) index ke 7
  const currentBigPost = dataPoco.slice(firstPostIndex, postPerPageBig); // index ke 0, (sampai) index ke 2
  const currentBannerImg = dataPoco.slice(lastBannerImg, lastPostIndex);

  return (
    <>
      <div>
        {currentBannerImg.map((poco) => (
          <div key={poco.id} className="flex flex-col md:hover:cursor-pointer">
            <BannerFlagship2
              Title={poco.name}
              Specs={poco.specs}
              CurrentPrice={poco.price}
              PreviousPrice={poco.price}
              PhonePicDesktop={poco.imgBannerDesktop}
              PhonePicMobile={poco.imgBannerMobile}
            ></BannerFlagship2>
          </div>
        ))}
      </div>
      {/* Large Card Start */}
      <section className="flex flex-wrap">
        <div className="grid grid-cols-1 w-full md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 items-center gap-2 mt-2 mb-3 mx-2">
          {currentBigPost.map((poco) => (
            <div
              key={poco.id}
              className={`flex flex-col bg-[#ffffff] items-center md:relative font-inter pt-10 px-5 text-center gap-2 md:hover:shadow-lg md:hover:ease-out md:duration-[250ms] pb-5 `}
            >
              <TitleCard
                id="1"
                Title={poco.name}
                Specs={poco.specs}
                StartingPrice={poco.after_discount}
                PreviousPrice={poco.price}
                PhonePic={poco.image}
                Button="md:my-[14px] md:flex md:gap-1"
                rating={poco.rating}
                Discount={poco.discountPercentage}
                className="pb-5"
                Status="Habis"
              />
              <div className="flex flex-row gap-2">
                <CustomButton
                  text="Beli Sekarang"
                  intent="dark"
                  rounded="yes"
                  onClick={() => addToCart(poco)}
                />
                <CustomButton
                  text="Learn More"
                  intent="light"
                  rounded="yes"
                  border="always"
                  onClick={() => addToCart(poco)}
                />
              </div>
              <ImgCard PhonePic={poco.image} />
            </div>
          ))}
        </div>
        {/* Large Card End */}

        {/* Small Card Start */}
        <div className="grid grid-cols-2 w-full md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center gap-2 mt-2 md:mt-0 mx-2 mb-3">
          {currentPost.length > 0 ? (
            <>
              {currentPost.map((poco, i) => {
                return (
                  <div
                    key={i}
                    className={`flex flex-col bg-[#ffffff] items-center md:relative font-inter pt-10 px-5 text-center gap-2 md:hover:shadow-lg md:hover:ease-out md:duration-[250ms]`}
                  >
                    <TitleCard
                      id="1"
                      Title={poco.name}
                      Specs={poco.specs}
                      StartingPrice={poco.after_discount}
                      PreviousPrice={poco.price}
                      PhonePic={poco.image}
                      rating={poco.rating}
                      Discount={poco.discountPercentage}
                      className="p-5"
                    />
                    <div className="flex flex-row gap-2">
                      <CustomButton
                        text="Beli Sekarang"
                        intent="dark"
                        rounded="yes"
                        size="small"
                        onClick={() => addToCart(poco)}
                      />
                      <CustomButton
                        text="Learn More"
                        intent="light"
                        rounded="yes"
                        border="always"
                        size="small"
                        onClick={() => addToCart(poco)}
                      />
                    </div>
                    <ImgCard PhonePic={poco.image} />
                  </div>
                );
              })}
            </>
          ) : (
            <>
              <div>Tidak ada data</div>
            </>
          )}
        </div>

        {/* Small Card End */}
      </section>
    </>
  );
}

{
}
