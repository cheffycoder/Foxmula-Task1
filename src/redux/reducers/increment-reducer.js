const INITIAL_VALUE={
    value : 0
}

const IncrementReducer = (state=INITIAL_VALUE,action)=>{

    switch(action.type){
    case'INCREMENT':
    return  {
        ...state,
        value:state.value+1
    }
    default:return state;
    }

}

export default IncrementReducer;