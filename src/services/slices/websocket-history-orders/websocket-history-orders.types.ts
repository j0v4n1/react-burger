import { IOrder } from '../../../types';

export interface IHistoryMessages {
  readonly success: boolean;
  readonly orders: IOrder[];
  readonly total: number;
  readonly totalToday: number;
}

export interface IWebsocketHistoryState {
  readonly loading: boolean;
  readonly websocketState: 'closed' | 'open';
  readonly connectionStarted: boolean;
  readonly wsConnected: boolean;
  readonly messages: IHistoryMessages;
  readonly error: string | undefined;
}
