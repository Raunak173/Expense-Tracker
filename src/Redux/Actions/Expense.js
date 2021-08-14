import {
    ADD_EXPENSE,
    DELETE_EXPENSE,
    SEARCH_EXPENSE,
  } from "../Action-types/Expense";
  
  export const addExpense = (data) => {
    return {
      type: ADD_EXPENSE,
      data, //data:data
    };
  };
  
  export const deleteExpense = (data) => {
    return {
      type: DELETE_EXPENSE,
      data,
    };
  };
  
  export const searchExpense = (query) => {
    return {
      type: SEARCH_EXPENSE,
      query,
    };
  };