import { GET_LOGS, SET_LOADING, LOGS_ERROR, ADD_LOG } from "./types";

// export const getLogs = () => {
//   return async (dispatch) => {
//     // redux-thunk middleware allows async functions inside actions, so we can wait for a response, then dispatch to reducer
//     setLoading();
//     const res = await fetch("./logs");
//     const data = await res.json();

//     dispatch({
//       type: GET_LOGS,
//       payload: data,
//     });
//   };
// };

// Get logs from server (Refactored with error handling)
export const getLogs = () => async (dispatch) => {
  // redux-thunk middleware allows async functions inside actions, so we can wait for a response, then dispatch to reducer
  try {
    setLoading();

    const res = await fetch("./logs");
    const data = await res.json();

    dispatch({
      type: GET_LOGS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.data,
    });
  }
};

// Add new log
export const addLog = (log) => async (dispatch) => {
  // redux-thunk middleware allows async functions inside actions, so we can wait for a response, then dispatch to reducer
  try {
    setLoading();

    const res = await fetch("./logs", {
      method: "POST",
      body: JSON.stringify(log),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();

    dispatch({
      type: ADD_LOG,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.data,
    });
  }
};

// Set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
