import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

// mapStateToProps converts the state of the Redux store to props for the CheckSelectedId component. In this the selectedTemplateId property is taken from the selectedTemplateReducer slice of the state.
const mapStateToProps = (state) => ({
  selectedTemplateId: state.selectedTemplateReducer.selectedTemplateId,
});

//mapDispatchToProps function converts dispatch actions into props for the CheckSelectedId component. In this the method is empty because this component does not employ any dispatch actions.
const mapDispatchToProps = (dispatch) => {
  return {};
};

//CheckSelectedId functional component determines whether the selectedTemplateId property is true or not. If it is true, the component returns the props.child property. If it is not true, the component returns a Navigate component that sends the user back to the home page.
const CheckSelectedId = (props) => {
  const selectedId = props.selectedTemplateId;
  return selectedId ? props.children : <Navigate to={"/"} />;
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckSelectedId);


