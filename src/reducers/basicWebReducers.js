const initialState = {
  currentPage:''
}

export default (state = initialState, action) => {
  switch(action.type) {
    case 'CURRENT_PAGE':
      return {
        ...state,
        currentPage: action.currentPage
      }
  }
}