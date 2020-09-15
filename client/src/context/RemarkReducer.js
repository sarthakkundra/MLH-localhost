import { ADD_REMARK, GET_REMARKS } from "./types";

export default (state, action) => {
  switch (action.type) {
    case GET_REMARKS:
      return {
        ...state,
        remarks: action.payload,
      };

    case ADD_REMARK:
      return {
        ...state,
        remarks: [...state.remarks, action.payload],
      };

    default:
      return state;
  }
};
