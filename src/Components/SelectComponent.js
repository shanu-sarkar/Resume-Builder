import { FormControl, FormHelperText } from "@mui/material";
import React from "react";
import "../Styles/SelectComponent.css";

//This is a functional Component named SelectComponent that renders a select input field and an optional error message.
const SelectComponent = (props) => {
  return (
    <div className="select-component">
      <p className="select-title">{props.title}</p>
      <FormControl fullWidth error={props.error}>
        {props.children}
        <FormHelperText>{props.errorMessage}</FormHelperText>
      </FormControl>
    </div>
  );
};

export default SelectComponent;

