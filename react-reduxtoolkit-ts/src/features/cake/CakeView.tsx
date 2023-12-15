// import React from "react";
// import { useDispatch, useSelector } from 'react-redux'
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { ordered, restocked } from "./cakeSlice";

const CakeView = () => {
  const numOfCakes = useAppSelector((state) => state.cake.numOfCakes); // useSelector called selector > function redux state as argument
  const dispatch = useAppDispatch(); // returns reference to dispatch function from the redux store
  return (
    <div>
      <h2>Number of cakes : {numOfCakes}</h2>
      <button onClick={() => dispatch(ordered())}>Order cake</button>
      <button onClick={() => dispatch(restocked(5))}>Restock cake</button>
    </div>
  );
};

export default CakeView;
