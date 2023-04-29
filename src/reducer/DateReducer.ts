export type DateStateType = {
  date: string;
};

export type DateActionType =
  | {
      type: "change";
      payload: {
        date: string;
      };
    }
  | {
      type: "clear";
    };

export const dateReducer = (state: DateStateType, action: DateActionType) => {
  switch (action.type) {
    case "change":
      return {
        date: action.payload.date
      };
    case "clear":
      return {
        date: ""
      };
  }
};
