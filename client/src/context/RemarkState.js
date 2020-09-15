import React, { useReducer } from "react";
import RemarkContext from "./RemarkContext";
import RemarkReducer from "./RemarkReducer";

import axios from "axios";

import { ADD_REMARK, GET_REMARKS } from "./types";

const RemarkState = (props) => {
  const initialState = {
    remarks: null,
  };

  const [state, dispatch] = useReducer(RemarkReducer, initialState);

  const getRemarks = async () => {
    try {
      const remarks = await axios.get("http://localhost:5000/api/users");
      dispatch({ type: GET_REMARKS, payload: remarks.data });
      console.log(state.remarks)
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
      await axios.post("http://localhost:5000/api/users", remark, config);
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

export default RemarkState;
