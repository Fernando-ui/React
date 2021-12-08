import {types} from '../types/types'
import moment from "moment";
const initialState = {
  events: [
    {
      title: "Cumpleaños del jefe",
      start: moment().toDate(),
      end: moment().add(2, "hours").toDate(),
      bgcolor: "#fafafa",
      notes: "Comprar el pastel",
      user: {
        _id: "123",
        name: "Fernando S",
      },
    },
  ],
  activeEvent: null,
};

export const calendarReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.eventSetActive:
      return {
        ...state,
        activeEvent: action.payload,
      };
      case types.eventAddNew:
        return{
          ...state,
          events:[
            ...state.events,
            action.payload
          ]
        }
      case types.eventActiveEvent:
        return{
          ...state,
          activeEvent:null,
        }
    default:
      return state;
  }
};
