import { IShoppingDetail } from 'src/types';
import { orderActions } from './actions/orderActionCreator';

export interface IOrderReducer {
  orderId: string;
  orderState: string;
  isSpecialOrder: boolean;
  data: IShoppingDetail[];
  isLoading: boolean;
  loaded: boolean;
  error: any;
}

const initialState: IOrderReducer = {
  orderId: '',
  orderState: '',
  data: [],
  isSpecialOrder: false,
  isLoading: false,
  loaded: false,
  error: null,
};

export const orderReducer = (state = initialState, action): IOrderReducer => {
  switch (action.type) {
    case orderActions.REQUEST_PENDING:
      return {
        ...state,
        isLoading: true,
        loaded: false,
        error: null,
      };
    case orderActions.SHOPPING_ORDER_SPECIAL_SUCCESS:
      return {
        ...state,
        orderId: action.payload,
        isLoading: false,
        loaded: true,
        error: null,
      };
    case orderActions.SHOPPING_ORDER_CREATE_SUCCESS:
      return {
        ...state,
        orderId: action.payload,
        orderState: 'Created',
        isLoading: false,
        loaded: true,
        error: null,
      };
    case orderActions.OPEN_ORDER_FOR_SHOPPERS_SUCCESS:
      return {
        ...state,
        orderState: 'Pending',
        isLoading: false,
        loaded: true,
        error: null,
      };
    case orderActions.POOL_RUNNER_APPLICATIONS_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        orderState: action.payload.data.state,
        isLoading: false,
        loaded: true,
        error: null,
      };
    case orderActions.ACTIVE_ORDER_SUCCESS:
      return {
        ...state,
        orderId: action.payload.id,
        data: action.payload.data,
        orderState: action.payload.state,
        isLoading: false,
        loaded: true,
        error: null,
      };
    case orderActions.ASSIGN_A_SHOPPER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        loaded: true,
        error: null,
      };
    case orderActions.CANCEL_ORDER_SUCCESS:
      return {
        ...state,
        orderState: 'Cancelled',
        isLoading: true,
        loaded: false,
        error: null,
      };
    case orderActions.RESET_ORDER_STATE:
      return {
        ...state,
        orderId: '',
        orderState: '',
        data: [],
        isLoading: false,
        loaded: true,
        error: null,
      };
    case orderActions.REQUEST_ERROR:
      return {
        ...state,
        isLoading: false,
        loaded: false,
        error: action.error,
      };
    default:
      return state;
  }
};
