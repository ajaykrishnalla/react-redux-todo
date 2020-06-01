import v4 from "uuid/v4";
import {
  ADD_DEATIL,
  REMOVE_DETAIL,
  GET_DETAIL,
  UPDATE_DETAIL,
} from "../actions/types";
import { DetailsReducerState, Details } from "../constants/types";

const initialState: DetailsReducerState = {
  details: [
    {
      id: v4(),
      name: "ajay krishna reddy",
      email: "ajaykrish.nalla@gmail.com",
      phone: 9866130529,
    },
  ],
  selectedDetail: {} as Details,
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_DEATIL:
      action.payload.id = v4();
      return {
        ...state,
        details: [...state.details, action.payload],
      };
    case REMOVE_DETAIL:
      return {
        ...state,
        details: state.details.filter(
          (detail) => detail.id !== action.payload.id
        ),
      };
    case GET_DETAIL:
      const selectedDetail = state.details.find(
        (detail) => detail.id === action.payload.id
      );
      return {
        ...state,
        selectedDetail,
      };
    case UPDATE_DETAIL:
      return {
        ...state,
        details: state.details.map((detail) =>
          detail.id === action.payload.id ? action.payload : detail
        ),
        selectedDetail: {},
      };

    default:
      return state;
  }
};
