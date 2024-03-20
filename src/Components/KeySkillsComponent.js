import { Paper, Divider, Button } from "@mui/material";
import React, { useState } from "react";
import InputComponent from "./InputComponent";
import "../Styles/KeySkillsComponent.css";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import BackNextBtnComponent from "./BackNextBtnComponent";
import { connect } from "react-redux";
import { addNewSkills, deleteSkill, editSkill } from "../Redux/actions";
import { useForm } from "react-hook-form";

//A func for mapping the redux store state to the component's props. It extracts skills from the Redux store's state. mapDispatchToProps is a func that maps Redux dispatch operations to component props. It defines the onAddNewSkill,onEditSkill, and onDeleteSkill func, which trigger the relevant Redux actions. 
const mapStateToProps = (state) => ({
  skills: state.keySkillsReducer.skills,
});

//The primary functional component that gets multiple props, including skills, setTab, onAddNewSkill, onEditSkill, onDeleteSkill, and Redux-related props.
const mapDispatchToProps = (dispatch) => ({
  onAddNewSkill: () => dispatch(addNewSkills()),
  onEditSkill: (skills) => dispatch(editSkill(skills)),
  onDeleteSkill: (index) => dispatch(deleteSkill(index)),
});

function KeySkillsComponent(props) {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

 //An event handler func that executes the editSkill action with the updated skills arr and moves to the next tab after a one-second delay.
  const handlePreview = (data) => {
    // console.log("data",data);
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      props.setTab(props.tab + 1);
    }, 1000);

  };

  //An event handler func that moves to the previous tab.
  const handleBack = () => {
    props.setTab(props.tab - 1);
  };

  //onEditSkill is a func that updates the skill at the specified index with the new value.
  const onEditSkill = (value, id) => {
    const newSkills = props.skills.map((skill, index) => {
      if (index === id) {
        return value;
      } else return skill;
    });

    props.onEditSkill(newSkills);
  };


  return (
    <Paper elevation={3} className="key-skills-paper">
      <h2 className="key-skills-heading">Key Skills</h2>
      <Divider />
      <form onSubmit={handleSubmit(handlePreview)}>
        <div className="key-skills-form-fields">
          {props.skills.map((skill, index) => {
            return (
              <div key={index} className="key-input-with-delete">
                <InputComponent
                  type="text"
                  name={`skill${index + 1}`}
                  register={register}
                  multiline={false}
                  value={skill}
                  setValue={(skill) => onEditSkill(skill, index)}
                  error={errors[`skill${index + 1}`] ? true : false}
                  errorMessage={
                    errors[`skill${index + 1}`]
                      ? errors[`skill${index + 1}`].message
                      : null
                  }
                />
                {props.skills.length === 1 ? null : (
                  <DeleteOutlineOutlinedIcon
                    sx={{ marginLeft: "10px" }}
                    onClick={() => props.onDeleteSkill(index)}
                  />
                )}
              </div>
            );
          })}
        </div>
        {props.skills.length >= 6 ? null : (
          <Button
            className="add-new-btn"
            variant="text"
            onClick={props.onAddNewSkill}>
            Add new
          </Button>
        )}
        <Divider className="key-skills-divider" />
        {/* BackNextBtnComponent is a custom component that displays the "Back" and "Next" buttons. If there are validation issues on the form, the "Next" button will be disabled. */}
        <BackNextBtnComponent
          onNext={handlePreview}
          loading={loading}
          tab={props.tab}
          onBack={handleBack}
          nextTitle={"Preview"}
          backTitle={"Back"}
        />
      </form>
    </Paper>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(KeySkillsComponent);


