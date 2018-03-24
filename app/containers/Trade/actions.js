import { LOAD_TRADES } from './constants';

export function loadTrades() {
  return {
    type: LOAD_TRADES,
  };
}