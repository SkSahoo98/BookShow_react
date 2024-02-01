import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import apis from "../api/api";
import "./show.css";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import Modal from "../components/Modal";

export default function () {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    async function fetchData() {
      console.log("feth");
      await apis.getShowSummary(id).then((res) => {
        console.log("res", res.data);
        setData(res.data);
      });
    }
    fetchData();
  }, []);

  return (
    <>
      <div className="show">
        <div className="bnr">
          <h1>
            <a href="/" className="show-head">
              <FaRegArrowAltCircleLeft />
            </a>
          </h1>
          <h1 className="show-head">
            <a href="/">Shows</a>{" "}
          </h1>
        </div>

        {data ? (
          <div className="show-body">
            {" "}
            <h1>{data?.name}</h1>
            <div className="movie">
              <img src={data?.image?.medium} />
              <button className="ticket-btn" onClick={openModal}>
                Book Ticket
              </button>
            </div>
            <div
              className="summary"
              dangerouslySetInnerHTML={{ __html: data?.summary }}
            />
            <Modal isOpen={isModalOpen} onClose={closeModal} movie={data} />
          </div>
        ) : (
          "Loading"
        )}
      </div>
    </>
  );
}
