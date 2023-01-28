import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import { phones } from "./phones";
import Phone from "./Phone";

function PhoneList() {
  return (
    <>
      <h1>Top Phones Selled</h1>
      <section className="booklist">
        {phones.map((phone) => {
          return <Phone {...phone} key={phone.id} />;
        })}
      </section>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<PhoneList />);
