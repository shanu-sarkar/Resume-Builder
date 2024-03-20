import { Button, CircularProgress } from "@mui/material";
import React from "react";
import "../Styles/BackNextBtnComponent.css";

// BackNextBtnComponent is a functional component that accepts props as its parameter. Props is an obj containing the properties that were supplied to the component.
const BackNextBtnComponent = (props) => {
  return (
    // Inside the component, there is a div with the class back-next-btn-content. This is the container for the back and next buttons.
    <div className="back-next-btn-cont">
      {props.tab === 0 ? null : (
        <Button
          onClick={props.onBack}
          className="outlined-btn"
          sx={{ marginRight: "20px" }}
          variant="outlined"
        >
          {props.backTitle}
        </Button>
      )}
      {props.loading ? (
        <CircularProgress size={25} /> //when the loading prop is set to true, the Material-UI CircularProgress component displays a circular progress indicator.
      ) : (
        <Button type="submit" className="contained-btn" variant="contained">
          {props.nextTitle}
        </Button>
      )}
    </div>
  );
};

export default BackNextBtnComponent;
