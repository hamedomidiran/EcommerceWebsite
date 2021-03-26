export const initialState = {
  basket: [],
  user: null,
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {

  let index = 0;
  let newBasket = [];

  switch (action.type) {

    case "ADD_TO_BASKET":

      index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.item.id
      );

      newBasket = [...state.basket];      

      if (index >= 0) {
        newBasket[index].count = newBasket[index].count + 1;
      } else {
        newBasket = [...state.basket, action.item];
      }

      return {
        ...state,
        basket: newBasket,
      };      

    case "EMPTY_BASKET":
      return {
        ...state,
        basket: [],
      };

    case "REMOVE_FROM_BASKET":
      index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      console.log(index, action);
      debugger;
      if(index < 0)  console.warn( "Cant remove product (id: ${action.id}) as its not in basket!");

      newBasket = [...state.basket];
      
      if (newBasket[index].count <= 1 ) {
        newBasket.splice(index, 1);
      } else {
        newBasket[index].count = newBasket[index].count - 1;        
      }
      
      // if (index >= 0) {
      //   newBasket.splice(index, 1);
      // } else {
      //   console.warn(
      //     "Cant remove product (id: ${action.id}) as its not in basket!"
      //   );
      // }

      return {
        ...state,
        basket: newBasket,
      };

    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  
  }
};

export default reducer;
