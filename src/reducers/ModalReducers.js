const INITIAL_STATE = {
  isOpenModal: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'modal':
      return {
        ...state,
        isOpenModal: action.payload,
      };
    default: return state;
  }
};
