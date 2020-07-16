import React, { useReducer, useEffect } from "react";
import "./Input.css";
import { validate } from "./../../util/validators";

const inputReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        value: action.value,
        isValid: validate(action.value, action.validators),
      };
    case "TOUCH":
      return {
        ...state,
        isTouched: true,
      };
    default:
      return state;
  }
};

const Input = (props) => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: props.initialValue || "",
    isValid: props.initialIsValid || false,
    isTouched: false,
  });

  const { value, isValid } = inputState;
  const { onInput, id } = props;

  useEffect(() => {
    onInput(id, isValid, value);
  }, [value, isValid, onInput, id]);

  const changeHandler = (event) => {
    dispatch({
      type: "CHANGE",
      value: event.target.value,
      validators: props.validators,
    });
  };

  const touchHandler = () => {
    dispatch({
      type: "TOUCH",
    });
  };
  const element =
    props.element === "input" ? (
      <input
        id={props.id}
        placeholder={props.placeholder}
        type={props.type}
        onChange={changeHandler}
        onBlur={touchHandler}
        value={inputState.value}
      />
    ) : (
      <textarea
        id={props.id}
        rows={props.rows || 3}
        onChange={changeHandler}
        onBlur={touchHandler}
        value={inputState.value}
      ></textarea>
    );
  return (
    <div
      className={`form-control ${
        !inputState.isValid && inputState.isTouched && "form-control--invalid"
      } `}
    >
      <label htmlFor={props.id}>{props.label}</label>

      {element}
      {!inputState.isValid && inputState.isTouched && <p>{props.errorText}</p>}
    </div>
  );
};

export default Input;
