export const orderActions = {
  REQUEST_PENDING: 'REQUEST_PENDING',
  REQUEST_ERROR: 'REQUEST_ERROR',

  SHOPPING_ORDER_SPECIAL: 'SHOPPING_ORDER_SPECIAL',
  SHOPPING_ORDER_SPECIAL_SUCCESS: 'SHOPPING_ORDER_SPECIAL_SUCCESS',

  SHOPPING_ORDER_CREATE: 'SHOPPING_ORDER_CREATE',
  SHOPPING_ORDER_CREATE_SUCCESS: 'SHOPPING_ORDER_CREATE_SUCCESS',

  OPEN_ORDER_FOR_SHOPPERS: 'OPEN_ORDER_FOR_SHOPPERS',
  OPEN_ORDER_FOR_SHOPPERS_SUCCESS: 'OPEN_ORDER_FOR_SHOPPERS_SUCCESS',

  POOL_RUNNER_APPLICATIONS: 'POOL_RUNNER_APPLICATIONS',
  POOL_RUNNER_APPLICATIONS_SUCCESS: 'POOL_RUNNER_APPLICATIONS_SUCCESS',

  ASSIGN_A_SHOPPER: 'ASSIGN_A_SHOPPER',
  ASSIGN_A_SHOPPER_SUCCESS: 'ASSIGN_A_SHOPPER_SUCCESS',

  RATE_A_RUNNER: 'RATE_A_RUNNER',
  RATE_A_RUNNER_SUCCESS: 'RATE_A_RUNNER_SUCCESS',

  DECLINE_A_SHOPPER: 'DECLINE_A_SHOPPER',
  DECLINE_A_SHOPPER_SUCCESS: 'DECLINE_A_SHOPPER_SUCCESS',

  ACTIVE_ORDER: 'ACTIVE_ORDER',
  ACTIVE_ORDER_SUCCESS: 'ACTIVE_ORDER_SUCCESS',

  CANCEL_ORDER_REQUEST: 'CANCEL_ORDER_REQUEST',
  CANCEL_ORDER_SUCCESS: 'CANCEL_ORDER_SUCCESS',
  RESET_ORDER_STATE: 'RESET_ORDER_STATE',
};

export const specialOrder = (bol: boolean) => ({
  type: orderActions.SHOPPING_ORDER_SPECIAL,
  data: bol,
});

export const createOrder = (args = {}) => ({
  type: orderActions.SHOPPING_ORDER_CREATE,
  data: { ...args },
});

export const openOrderForShoppers = (data = {}) => ({
  type: orderActions.OPEN_ORDER_FOR_SHOPPERS,
  data,
});

export const poolRunnerApplications = (data = {}) => ({
  type: orderActions.POOL_RUNNER_APPLICATIONS,
  data,
});

export const assignAShopper = (data = {}) => ({
  type: orderActions.ASSIGN_A_SHOPPER,
  data,
});

export const declineAShopper = (data) => ({
  type: orderActions.DECLINE_A_SHOPPER,
  data,
});

export const rateARunner = (data = {}) => ({
  type: orderActions.RATE_A_RUNNER,
  data,
});

export const getActiveOrder = () => ({
  type: orderActions.ACTIVE_ORDER,
});


export const cancelBuyerOrder = (data = {}) => ({
  type: orderActions.CANCEL_ORDER_REQUEST,
  data,
});
