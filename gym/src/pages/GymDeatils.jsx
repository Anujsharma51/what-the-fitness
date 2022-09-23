import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import Loader from "../components/Loder";
import { showGyms, sortingPrice } from "../redux/action";

import styled from "./GymDetails.module.css";

const GymDeatils = () => {
  const [filter, setFilter] = useState("");
  const { state: el } = useLocation();

  const state = useSelector((state) => state);

  const handleChange = (e) => {
    setFilter(e.target.value);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(sortingPrice(filter));
    // dispatch(showGyms());
  }, [dispatch, filter]);

  if (state.isLoading) {
    return <Loader />;
  }
  return (
    <div className={styled.detailPage}>
      <div className={styled.detail}>
        <h1>{el.gym_name}</h1>
        <p>
          {el.address1},{el.city}
        </p>
        <h3>Description :</h3>
        <p>{el.description}</p>
        <h3>Facilities</h3>
        <div className={styled.Facilities}>
          {el.benefits.map((data, i) => (
            <div key={i}>
              <p>{data.name}</p>
            </div>
          ))}
        </div>

        <h3>Why to choose WTF ?</h3>
        <div className={styled.term}>
          {state.terms.map((el) => {
            return (
              <div key={el.id}>{el.name === null ? "" : <p>{el.name}</p>}</div>
            );
          })}
        </div>
      </div>

      <div className={styled.plans}>
        <h1>Choose Membership</h1>
        <select
          className={styled.sorting}
          onChange={(e) => {
            handleChange(e);
          }}
        >
          <option value="default">Default</option>
          <option value="lh">low to high</option>
          <option value="hl"> high to low</option>
        </select>
        {state.plans.map((el) => {
          return (
            <div
              className={styled.PriceDiv}
              key={el.id}
              style={{ background: el.background }}
            >
              <div>
                <h3>{el.plan}</h3>
                <h4
                  style={{
                    display: "flex",
                    alignItems: "end",
                    justifyContent: "flex-end",

                    objectFit: "cover",
                    color: "red",
                  }}
                >
                  ₹ {el.price}
                </h4>
              </div>
              <div
                style={{
                  blockSize: "fit-content",
                }}
              >
                <h4>{el.plan_name}</h4>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GymDeatils;
