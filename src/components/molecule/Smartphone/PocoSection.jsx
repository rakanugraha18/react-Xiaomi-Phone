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

  return (
    <>
      <section className="flex flex-wrap">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center gap-2 mt-2 md:mt-0">
          {dataPoco.length > 0 ? (
            <>
              {dataPoco.map((poco, i) => {
                return (
                  <div key={i}>
                    <ShortCard
                      id="1"
                      Title={poco.name}
                      Specs="Snapdragon 778G | 108MP"
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
  /* <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 items-center gap-5 mt-2 mb-10">
  {dataPoco.map((poco) => (
    <div key={poco.id}>
      <LongCard
        Title={poco.name}
        Specs="Ori Grade triple 50MP Camera | Snapdragon® Gen 1"
        StartingPrice={poco.price}
        PhonePic={poco.image}
        Button="md:my-[14px] md:flex md:gap-1"
        rating={poco.rating}
        Discount={poco.discountPercentage}
        classname="md:bg-[#D0D0D0] md:text-white"
        Status="Habis"
      ></LongCard>
    </div>
  ))}
</div> */
}
