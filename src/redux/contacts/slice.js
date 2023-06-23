import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts } from "redux/operations";

const contactsInitialState = {
  contacts: [],
  isLoading: false,
  error: null,
  updated:0
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: contactsInitialState,
 reducers: {
      listUpdated(state) {
      state.updated = state.updated+1;//no funciona de esta forma ya que cuando se asigna 1 el componente no lo ve por que ya este montado
      console.log('state.updated', state.updated)
    },
  }, 
  extraReducers: {
    [fetchContacts.pending](state) {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = null;
      state.contacts = payload;
    },
    [fetchContacts.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
    
  },
});

export const { listUpdated } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;


