import { Alltypes, productActionsTypes } from "./actionTypes";

const init = {
  isLoading: false,
  cityData: [],
  gymData: [],
  isError: false,
  terms: JSON.parse(localStorage.getItem("terms")) || [],
  plans: [
    {
      id: 1,
      plan: "Plan 1",
      price: 9999,
      plan_name: "Giant X",
      background:
        "linear-gradient(90deg, #00FFFF 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)",
    },
    {
      id: 2,
      plan: "Plan 2",
      price: 6999,
      plan_name: "Fat To Fit",
      background:
        "linear-gradient(90deg, #FD5C63 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)",
    },
    {
      id: 3,
      plan: "Plan 3",
      price: 6999,
      plan_name: "Beach Body",
      background:
        "linear-gradient(90deg, #F40009 0%, rgba(9,9,121,1) 35%, #007791 100%)",
    },
    {
      id: 4,
      plan: "Plan 4",
      price: 8999,
      plan_name: "IPG(12month)",
      background:
        "linear-gradient(90deg, #F40009 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)",
    },
  ],
};
// console.log( JSON.parse(localStorage.getItem("terms")));
export const gymReducer = (state = init, { type, payload }) => {
  switch (type) {
    case productActionsTypes.REQUEST: {
      return { ...state, isLoading: true };
    }
    case Alltypes.city: {
      return { ...state, isLoading: false, cityData: payload };
    }
    case Alltypes.gym: {
      return { ...state, isLoading: false, gymData: payload };
    }
    case Alltypes.terms: {
      return { ...state, isLoading: false, terms: payload };
    }
    case Alltypes.sortPrice: {
      return {
        ...state,
        isLoading: false,
        plans: [
          ...state.plans.sort((a, b) =>
            payload === "lh"
              ? a.price - b.price
              : payload === "hl"
              ? b.price - a.price
              : a.id - b.id
          ),
        ],
      };
    }

    default:
      return state;
  }
};
