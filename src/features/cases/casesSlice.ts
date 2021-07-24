import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ECaseStatus, ICase } from '../../types';

export interface ICasesState {
  cases: ICase[]
}

const initialState: ICasesState = {
  cases: []
};

export const casesSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addCase: (state, action: PayloadAction<ICase>) => {
      state.cases.push({...action.payload, id: state.cases.length + 100001});
    },
    deleteCase: (state, action: PayloadAction<number>) => {
      state.cases = state.cases.filter( c => c.id !== action.payload);
    },
    submitCase: (state, action: PayloadAction<number>) => {
      state.cases.find(c => c.id === action.payload)!.status = ECaseStatus.SUBMITTED
    },
    acceptCase: (state, action: PayloadAction<number>) => {
      state.cases.find(c => c.id === action.payload)!.status = ECaseStatus.APPROVED
    },
    rejectCase: (state, action: PayloadAction<number>) => {
      state.cases.find(c => c.id === action.payload)!.status = ECaseStatus.REJECTED
    },
    resubmitCase: (state, action: PayloadAction<number>) => {
      state.cases.find(c => c.id === action.payload)!.status = ECaseStatus.RESUBMITTED
    },
    updateCase: (state, action: PayloadAction<ICase>) => {
      state.cases = state.cases.map( c => {
        if ( c.id === action.payload.id ) {
          return action.payload
        } else {
          return c
        }
      })
    },
  },
});

export const { addCase, deleteCase, submitCase, acceptCase, rejectCase, resubmitCase, updateCase } = casesSlice.actions;

export default casesSlice.reducer;
