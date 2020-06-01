export interface State {
  readonly allDetails: DetailsReducerState;
}

export interface Details {
  readonly id: string;
  readonly name: string;
  readonly email: string;
  readonly phone: number;
}

export interface DetailsReducerState {
  readonly details: Details[];
  readonly selectedDetail: Details;
}
