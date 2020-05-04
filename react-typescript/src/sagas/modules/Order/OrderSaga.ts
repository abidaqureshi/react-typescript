import autobind from 'autobind-decorator';
import { call, CallEffect, ForkEffect, put, PutEffect, takeLatest } from 'redux-saga/effects';
import { orderAPI } from 'src/api/order';
import { orderActions } from 'src/redux/order/actions/orderActionCreator';
import { BaseSaga } from '../../BaseSaga';

export class OrderSaga extends BaseSaga {
 

  @autobind
  public *createOrder(args): IterableIterator<CallEffect | PutEffect<any>> {
    try {
      yield put({ type: orderActions.REQUEST_PENDING });
      console.warn(args.data);
      const data = yield call(orderAPI.createOrder, args.data);
      yield put({ type: orderActions.SHOPPING_ORDER_CREATE_SUCCESS, payload: data });
    } catch (e) {
      yield put({ type: orderActions.REQUEST_ERROR, error: e });
    }
  }



  @autobind
  public *declineAShopper(args): IterableIterator<CallEffect | PutEffect<any>> {
    try {
      yield put({ type: orderActions.REQUEST_PENDING });
      yield call(orderAPI.declineAShopper, args.data);
      yield put({ type: orderActions.DECLINE_A_SHOPPER_SUCCESS });
    } catch (e) {
      yield put({ type: orderActions.REQUEST_ERROR, error: e });
    }
  }




  protected *registerListeners(): IterableIterator<ForkEffect> {   
    yield takeLatest(orderActions.SHOPPING_ORDER_CREATE, this.createOrder);   
    yield takeLatest(orderActions.DECLINE_A_SHOPPER, this.declineAShopper);
   
  }
}
