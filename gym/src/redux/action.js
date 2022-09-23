import axios from "axios";
import { Alltypes, productActionsTypes } from "./actionTypes";

export const getCity = (payload) => ({
  type: Alltypes.city,
  payload,
});

export const getGym = (payload) => ({
  type: Alltypes.gym,
  payload,
});
export const getTerms = (payload) => ({
  type: Alltypes.terms,
  payload,
});
/////////////////////
export const productFetchRequest = () => ({
  type: productActionsTypes.REQUEST,
});
export const productFetchSuccess = (payload) => ({
  type: productActionsTypes.SUCCESS,
  payload,
});

////////////////////////////////

export const showCitys = () => (dispatch) => {
  dispatch(productFetchRequest());
  axios.get("https://devapi.wtfup.me/gym/places").then(({ data }) => {
    dispatch(getCity(data.data));
  });
};
export const showGyms = (city) => (dispatch) => {
  dispatch(productFetchRequest());
  axios
    .get(
      `https://devapi.wtfup.me/gym/nearestgym?lat=30.325488815850512&long=78.0042384802231&city=${city}`
    )
    .then(({ data }) => {
      console.log("data:", data);

      dispatch(getGym(data.data));

      localStorage.setItem("terms", JSON.stringify(data.terms));

      dispatch(getTerms(data.terms));
    });
};

export const getSorting = (payload) => ({
  type: Alltypes.sortPrice,
  payload,
});
export const sortingPrice = (filter) => (dispatch) => {
  dispatch(productFetchRequest());
  dispatch(getSorting(filter));
};
