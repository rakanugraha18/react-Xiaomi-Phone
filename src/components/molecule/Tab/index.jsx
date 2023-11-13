import React from "react";
import TabButton from "../../Atoms/TabButton";

function index() {
  return (
    <div>
      <section>
        <div className="w-full justify-center px-4 p-6 lg:w-full text-center">
          <TabButton redirect="/About" type="secondary" text="Tentang Kita" />
          <TabButton redirect="/Leadership" text="Leadership Team" />
          <TabButton redirect="Agreement" text="Persetujuan pengguna" />
          <TabButton redirect="/Privasi" text="Kebijakan privasi" />
        </div>
      </section>
    </div>
  );
}

export default index;
