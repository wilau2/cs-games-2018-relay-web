import { LOAD_ORDERS } from './constants';

export function loadOrders() {
  return {
    type: LOAD_ORDERS,
  };
}