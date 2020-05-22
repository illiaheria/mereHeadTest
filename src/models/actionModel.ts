export interface IAction {
  type: string;
  endpoint: string | null;
  verb?: string;
  payload?: any;
  headers?: any;
}
