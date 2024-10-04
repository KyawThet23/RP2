interface Action {
  type : 'INCREASE' | 'RESET' | 'DECREASE' ;
}

const counterReducer = (state: number,action: Action): number => {

  if (action.type === 'INCREASE') return state + 1;
  if (action.type === 'DECREASE') return state - 1;
  if (action.type === 'RESET')    return 0;
  return state

}

export default counterReducer;