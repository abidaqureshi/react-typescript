import { all, AllEffect } from 'redux-saga/effects';
import { OrderSaga } from './modules/Order/OrderSaga';


export default function* rootSaga(): IterableIterator<AllEffect<any>> {
  yield all([
    new OrderSaga().watch(),
  ]);
}
