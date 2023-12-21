const initialState = {
    user: {},
    isLoggedIn: false,
    bet:[] ,
  };
  
  export const RootReducer = (state = initialState, action) => {
    switch (action.type) {

      case 'SET_BET':
        state.bet = action.payload;
        return {...state, bet: state.bet};

      case 'SET_USER':
        state.user = action.payload;
        state.isLoggedIn = true;
        return {
          ...state,
          user: state.user,
          isLoggedIn: state.isLoggedIn,
        };
        // case 'USER_DETAILS':
        //   state.userdetails = action.payload;
         
        //   return {
        //     ...state,
        //     userdetails: state.userdetails,
        //     isLoggedIn: state.isLoggedIn,
        //   };
      case 'LOGOUT':
        state.user = {};
        state.isLoggedIn = false;
        return {
          ...state,
        };
      default:
        return state;
    }
  };

  