import React, { useEffect, useState } from "react";
import styled from "./Gym.module.css";
import { MdLocationOn } from "react-icons/md";
import { FiNavigation } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { showCitys, showGyms } from "../redux/action";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loder";

const GymSection = () => {
  const [filter, setFilter] = useState("");
  const [text, setText] = useState("");

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(showCitys());
  }, []);
  useEffect(() => {
    dispatch(showGyms(filter));
  }, [filter]);

  const AllData = useSelector((state) => state);

  const navigate = useNavigate();
  if (AllData.isLoading) {
    return <Loader />;
  }
  return (
    <div className={styled.main}>
      <div className={styled.inputSection}>
        <input type="text" onChange={(e) => setText(e.target.value)} />
        <button className={styled.loctionIcon}>
          <MdLocationOn fontSize={25} />
        </button>
        <button className={styled.loctionIcon}>Clear</button>
      </div>

      <div className={styled.showGym}>
        <div>
          <p className={styled.Filters}>Filters</p>
          <p className={styled.Cities}>Cities</p>
          <select onChange={(e) => setFilter(e.target.value)}>
            <option>Select City</option>
            {AllData.cityData.map((el, i) => {
              return (
                <option value={el.city} key={i}>
                  {el.city}
                </option>
              );
            })}
          </select>
        </div>

        <div className={styled.ProductMapDiv}>
          {AllData?.gymData.map((el, ind) => {
            return (
              <div
                key={ind}
                className={styled.gymDiv}
                onClick={() => {
                  navigate(`/GymDeatils/${el.user_id}`, { state: el });
                }}
              >
                <h2>{el.gym_name}</h2>
                <p>{+Math.floor(Math.random(1) * 4) + 1} ★★★★★</p>
                <p>
                  {el.address1} , {el.address2}, {el.city}
                </p>

                <div className={styled.otherDeatild}>
                  <FiNavigation style={{ color: "green" }} />
                  {el.duration_text} | {el.distance_text}
                </div>

                <div className={styled.bookbtn}>
                  <button>Book Now</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default GymSection;
