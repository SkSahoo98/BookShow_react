import React, { useEffect, useState } from "react";
import apis from "../api/api";
import Card from "../components/Card";
import "./home.css";

export default function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    console.log("daat");
    await apis.getShowList().then((res) => {
      console.log("res", res.data);
      setData(res.data);
    });
  };
  return (
    <>

      <div>
        <a href="/" className="logo">
          ShowBook
        </a>
      </div>

      <div className="showCard">
        {data.length > 0
          ? data.map((item, i) => {
              return <Card item={item} index={i} />;
            })
          : "Fetching"}
      </div>

    </>
  );
}
