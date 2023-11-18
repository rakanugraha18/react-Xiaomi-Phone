import React from "react";
import PocoSection from "../components/organism/Products/PocoSection";
import NavbarProducts from "../components/organism/Navbar/NavbarProducts";

function Poco() {
  return (
    <>
      <NavbarProducts
        titleHead="POCO Phones"
        title1="POCO Phones"
        title2="Xiaomi Phones"
        title3="Redmi Phones"
      />

      <div>
        <PocoSection />
      </div>
    </>
  );
}

export default Poco;
