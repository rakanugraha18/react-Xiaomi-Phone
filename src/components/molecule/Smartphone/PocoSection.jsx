import LongCard from "../../Atoms/LongCard.jsx";
import ShortCard from "./../../Atoms/ShortCard.jsx/index";
import { useEffect, useState } from "react";
import axios from "axios";

export default function PocoSection() {
  const [dataPoco, setDataPoco] = useState([]);

  const getApiPoco = async () => {
    const response = await axios(
      "https://6533becde1b6f4c59046358c.mockapi.io/Poco/Product/user/"
    );

    setDataPoco(response.data);
  };

  useEffect(() => {
    getApiPoco();
  }, []);

  console.log(dataPoco);

  return (
    <>
      <section className="m-[9px] md:flex md:justify-evenly md:hover:cursor-pointer md:w-full">
        {/*         
        <LongCard
          id={poco.id}
          Title={poco.name}
          Specs="Ori Grade triple 50MP Camera | Snapdragon® Gen 1"
          StartingPrice={poco.price}
          PhonePic={poco.image}
          Button="md:my-[14px] md:flex md:gap-1"
          rating={poco.rating}
          Discount={poco.discountPercentage}
          classname="md:bg-[#D0D0D0] md:text-white"
          Status="Habis"
        ></LongCard> */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 mt-2 md:mt-0">
          {dataPoco.length > 0 ? (
            <>
              {dataPoco.map((poco, i) => {
                return (
                  <div>
                    <ShortCard
                      id={poco.id}
                      Title={poco.name}
                      Specs="Ori Grade triple 50MP Camera | Snapdragon® Gen 1"
                      StartingPrice={poco.price}
                      PhonePic={poco.image}
                      Button="md:my-[14px] md:flex md:gap-1"
                      rating={poco.rating}
                    />
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
      </section>
    </>
  );
}

{
  /* <ShortCard
  Title="Xiaomi 12T 5G"
  Specs="Ultra Stable 108MP Main Camera with OIS"
  StartingPrice="5.999.000"
  PreviousPrice="Rp 6.599.000"
  Discount="9%"
  DiscountBorder="text-[#ff6900] border border-[#ff6900]"
  PhonePic="/public/smartphone/3bmobile.webp"
  Button="md:my-[14px] md:flex md:gap-1"
></ShortCard> */
}
