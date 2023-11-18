import BannerFlagship from "../../Atoms/BannerFlagship/index.jsx";
import { useEffect, useState } from "react";
import axios from "axios";
import ShortCardXiaomi from "../../Atoms/ShortCardXiaomi/index.jsx";

const Xiaomi = () => {
  const [dataXiaomi, setDataXiaomi] = useState([]);

  const getApiXiaomi = async () => {
    const response = await axios(
      "https://6555a21884b36e3a431e0535.mockapi.io/xiaomi"
    );

    setDataXiaomi(response.data);
  };

  useEffect(() => {
    getApiXiaomi();
  }, []);

  return (
    <>
      <BannerFlagship
        Title="XIAOMI 12T 5G"
        Specs="Ultra Steady 108MP with OIS | Dimensity 8100-Ultra"
        CurrentPrice="Rp 5.999.000"
        PreviousPrice="Rp 6.599.000"
        PhonePicDesktop="/public/smartphone/1desktop.webp"
        PhonePicMobile="/public/smartphone/1mobile.webp"
      ></BannerFlagship>

      <section
        id="card_product"
        className="grid grid-cols-1 grid-flow-row items-center text-center sm:grid-cols-3 lg:grid-cols-3 font-inter"
      >
        {dataXiaomi.map((xiaomi) => (
          <div
            key={xiaomi.id}
            className="flex flex-col md:hover:cursor-pointer"
          >
            <ShortCardXiaomi
              Title={xiaomi.name}
              Specs={xiaomi.specs}
              StartingPrice={xiaomi.price}
              PreviousPrice={xiaomi.before_discount}
              PhonePic={xiaomi.image}
            ></ShortCardXiaomi>
          </div>
        ))}
      </section>
    </>
  );
};

export default Xiaomi;
