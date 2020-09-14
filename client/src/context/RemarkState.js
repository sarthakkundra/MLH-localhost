import React, { useReducer } from "react";
import RemarkContext from "./RemarkContext";
import RemarkReducer from "./RemarkReducer";

import axios from "axios";

import { ADD_REMARK, GET_REMARKS } from "./types";

const remarkState = (props) => {
  const initalState = {
    remarks: [],
  };

  const [state, dispatch] = useReducer(RemarkReducer, initialState);

  const getRemarks = async () => {
    try {
      const remarks = await axios.get("/users");
      dispatch({ type: GET_REMARKS, payload: remarks });
    } catch (e) {
      console.error(e);
    }
  };

  const addRemark = async (remark) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      await axios.post("/users", remark, config);
      dispatch({ type: ADD_REMARK, payload: remark });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <RemarkContext.Provider
      value={{
        remarks: state.remarks,
        getRemarks,
        addRemark,
      }}
    >
      {props.children}
    </RemarkContext.Provider>
  );
};

export default remarkState;
