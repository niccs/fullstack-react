import { useCallback, useReducer } from "react";

const formReducer = (state, action) => {
  console.log("in the formReducer", action.isValid + " " + action.inputId);
  switch (action.type) {
    case "INPUT_CHANGE":
      let formIsValid = true;
      for (const inputId in state.inputs) {
        if (inputId === action.inputId) {
          formIsValid = formIsValid && action.isValid;
          console.log("in the id clause", inputId + " " + action.inputId);
        } else {
          console.log("in the else clause", inputId + " " + action.inputId);
          formIsValid = formIsValid && state.inputs[inputId].isValid;
        }
      }

      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.inputId]: { value: action.value, isValid: action.isValid },
        },
        isValid: formIsValid,
      };
    case "SET_DATA": {
      return { inputs: action.inputs, isValid: action.formIsValid };
    }
    default:
      return state;
  }
};

export const useForm = (initialInputs, initialFormValidity) => {
  const inputHandler = useCallback((id, isValid, value) => {
    // console.log("inputHandler", id + " " + isValid + " " + value);
    dispatch({
      type: "INPUT_CHANGE",
      inputId: id,
      isValid: isValid,
      value: value,
    });
  }, []);

  const [formState, dispatch] = useReducer(formReducer, {
    inputs: initialInputs,
    isValid: initialFormValidity,
  });

  const setFormData = useCallback((inputData, formValidity) => {
    dispatch({
      type: "SET_DATA",
      inputs: inputData,
      formIsValid: formValidity,
    });
  }, []);
  return [formState, inputHandler, setFormData];
};
