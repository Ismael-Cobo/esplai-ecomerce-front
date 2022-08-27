import { TYPES } from '../types/types'

export const productReducer = (state = [], action) => {
  switch (action.type) {
    case TYPES.productGetAll:
      return {
        ...state,
        products: [...action.payload],
      }

    case TYPES.produtGetOne:
      return {
        ...state,
        activeProduct: { ...state.products.filter((product) => product.id === action.payload) },
      }

    case TYPES.productAddOne:
      return {
        ...state,
        products: [...state.products, action.payload],
      }

    case TYPES.productUpdateOne:
      return {
        ...state,
        products: state.products.map((producto) => (producto.id === action.payload.id ? action.payload : producto)),
      }

    case TYPES.productUpdateOne:
      return {
        ...state,
        products: state.products.map((producto) => (producto.id === action.payload.id ? action.payload : producto)),
      }

    case TYPES.produtDeleteOne:
      return {
        ...state,
        products: state.products.filter((producto) => producto.id !== action.payload),
      }

    default:
      return state
  }
}
