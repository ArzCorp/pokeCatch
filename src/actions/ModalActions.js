export const turnModalState = (modalState) => (dispatch) => {
  dispatch({
    type: 'modal',
    payload: modalState,
  });
};
