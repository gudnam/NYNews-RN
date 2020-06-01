const initialState = {
  newsDatas: [],
};
const NewsDatas = (state = initialState, action) => {
  switch (action.type) {
    case 'NEWS_STATE':
      console.log('TEST2');
      console.log(state);
      return { newsDatas: state };
    default:
      return state;
  }
};

export default NewsDatas;
