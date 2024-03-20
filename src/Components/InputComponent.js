import { TextField } from "@mui/material";
import React from "react";
import "../Styles/InputComponent.css";
import { inputChecks } from "../Utils/inputChecks";

//The primary functional component that accepts numerous parameters, including title, type, name, register, multiple, value, setValue, error, and errorMessage. 
const InputComponent = (props) => {
  return (
    <div className="input-component">
      <p className="input-title">{props.title}</p>
      {/* The TextField element has several properties, including variation, type, name, register, multiline, rows, value, onChange, error, and helperText. */}
      <TextField 
        variant="outlined"
        type={props.type}
        name={props.name}
        {...props.register(props.name, inputChecks(props.type, props.name))}
        multiline={props.multiline}
        rows={5}
        value={props.value}
        onChange={(e) => props.setValue(e.target.value.toString())}
        error={props.error}
        helperText={props.errorMessage ? props.errorMessage : null}
      />
    </div>
  );
};

export default InputComponent;


