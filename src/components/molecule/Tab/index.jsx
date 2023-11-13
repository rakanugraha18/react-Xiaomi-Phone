import React from "react";
import TabButton from "../../Atoms/TabButton";

function index() {
  const tab = [
    {
      name: "Tentang Kita",
      path: "/About",
    },
    {
      name: "Leadership Team",
      path: "/Leadership",
    },
    {
      name: "Persetujuan pengguna",
      path: "/Agreement",
    },
    {
      name: "Kebijakan privasi",
      path: "/Privasi",
    },
  ];

  return (
    <div>
      <section className="w-full justify-center px-16 lg:w-full bg-slate-100">
        <h2 className="font-bold text-[45px] font-Inter text-center pt-16">
          Tentang kita
        </h2>
        <section>
          <div className="w-full justify-center px-4 p-6 lg:w-full text-center">
            <TabButton type="secondary" text="Tentang Kita" />
            <TabButton text="Leadership Team" />
            <TabButton text="Persetujuan pengguna" />
            <TabButton text="Kebijakan privasi" />
          </div>
        </section>
      </section>
    </div>
  );
}

export default index;
