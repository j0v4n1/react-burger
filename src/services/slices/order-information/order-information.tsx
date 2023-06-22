import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IOrderInformationState } from './order-information.types';
import { IOrder } from '../../../types';

const initialState: IOrderInformationState = {
  currentOrder: {
    _id: '',
    ingredients: [],
    status: '',
    name: '',
    createdAt: '',
    updatedAt: '',
    number: 0,
  },
};

const orderInformation = createSlice({
  name: 'orderInformation',
  initialState,
  reducers: {
    set: (state, action: PayloadAction<IOrder>) => {
      state.currentOrder = action.payload;
    },
    remove: (state) => {
      state.currentOrder = {
        _id: '',
        ingredients: [],
        status: '',
        name: '',
        createdAt: '',
        updatedAt: '',
        number: 0,
      };
    },
  },
});

const { actions, reducer } = orderInformation;
export default reducer;
export const { set, remove } = actions;
