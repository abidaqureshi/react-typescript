import * as React from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  createOrder,
  openOrderForShoppers,
  assignAShopper,
  declineAShopper,
  cancelBuyerOrder,
  rateARunner,
  getActiveOrder,
} from 'src/redux/order/actions/orderActionCreator';
import { IOrderReducer } from 'src/redux/order/orderReducer';
import { useStateSelector } from 'src/redux/reducers';
import { IUserState } from 'src/redux/user/userReducer';
import { WizardContainer } from './order.styles';

const Order: React.FC = () => {
  const { orderId, orderState, data, error } = useStateSelector<IOrderReducer>((state: { order: any; }) => state.order);
  const { profile }: IUserState = useSelector<any, IUserState>((state: { user: any; }) => state.user);
  const [intervalId, setIntervalId] = React.useState<any>('');
  const dispatch = useDispatch();
  const history = useHistory();

  const getUserShoppingListFromWizzard = (shoppingOrder: object, estOrderAmount: number, numOfstores: number, context: any): void => {
    if (profile?.id) {
      dispatch(
        createOrder({
          buyerId: profile?.id,
          shoppingList: shoppingOrder,
          estOrderAmount,
          numberOfStores: numOfstores,
          ...context,
        }),
      );
    }
  };

  const getRating = (rating: number): void => {
    dispatch(rateARunner({ orderId, rating }));
  };

  const getRunnerAccepted = (isAccepted: boolean, runnerId: string): void => {
    if (isAccepted) {
      dispatch(assignAShopper({ runnerId, orderId, orderState: 'Assigned' }));
    }

    dispatch(declineAShopper({ runnerId, orderId, decline: true }));
  };

  const cancelOrder = () => {
    dispatch(cancelBuyerOrder({ orderId, orderState: 'Cancelled' }));
  };

  React.useEffect(() => {
    if (['Cancelled'].includes(orderState)) {
      clearInterval(intervalId);
      history.push('/');
    }
    if (!orderId && !orderState) {
      dispatch(getActiveOrder());
    } else if (orderId && ['Created'].includes(orderState)) {
      dispatch(openOrderForShoppers({ orderId, orderState: 'Pending' }));
    } 

    if (orderId && ['Delivered'].includes(orderState)) {
      return () => clearInterval(intervalId);
    }
  }, [data, dispatch, error, history, intervalId, orderId, orderState, profile]);

  return (
    <WizardContainer/>
  );
};


export default Order;
