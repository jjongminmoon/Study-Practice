export type InputStateType = {
  text: string;
};

export type InputActionType =
  | {
      type: "change";
      payload: {
        text: string;
      };
    }
  | {
      type: "clear";
    };

export const inputReducer = (state: InputStateType, action: InputActionType) => {
  switch (action.type) {
    case "change":
      return {
        text: action.payload.text
      };
    case "clear":
      return {
        text: ""
      };
  }
};
