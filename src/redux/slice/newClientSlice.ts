import { createSlice } from "@reduxjs/toolkit";

export interface NewClientInterface {
  clientType: null | "own" | "start";
  currentPage: string;
  problem: string | null;
}

const initialState: NewClientInterface = {
  clientType: null,
  currentPage: "index",
  problem: null,
};

const newClientState = createSlice({
  name: "counter",
  initialState,
  reducers: {
    resetClient: () => {
      return initialState;
    },
    setClientType: (state, action: { payload: null | "own" | "start" }) => {
      return { ...state, clientType: action.payload };
    },
    setCurrentPage: (state, action: { payload: string }) => {
      return {
        ...state,
        currentPage: action.payload,
      };
    },
    setProblem: (state, action: { payload: string | null }) => {
      return { ...state, problem: action.payload };
    },
  },
});

export const { resetClient, setClientType, setCurrentPage, setProblem } =
  newClientState.actions;

export default newClientState.reducer;
