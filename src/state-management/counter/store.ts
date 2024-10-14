import { mountStoreDevtool } from "simple-zustand-devtools";
import { create } from "zustand";

interface CounterStore {
  counter : number;
  max: number;
  increase: () => void;
  reset: () => void;
}

const useCounterStore =  create<CounterStore>(set => ({
  counter: 0,
  max: 5,
  increase: () => set(store => ({ counter: store.counter + 1 })),
  reset: () => set(() => ({ max: 10 }))
}));

if(process.env.NODE_ENV === 'development')
  mountStoreDevtool('Counter Store' , useCounterStore) 

export default useCounterStore;