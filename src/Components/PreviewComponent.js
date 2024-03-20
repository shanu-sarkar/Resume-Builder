import { Button, CircularProgress, Container, TextField } from "@mui/material";
import React, { useState } from "react";
import "../Styles/PreviewComponent.css";
import { connect } from "react-redux";
import { templates } from "../Data/templates";
import JsPDF from "jspdf";
import uniqid from "uniqid";

//Converts selected data from Redux state to component properties.
//MapStateToProps function
const mapStateToProps = (state) => ({
  selectedTemplateId: state.selectedTemplateReducer.selectedTemplateId,
  selectedResumeId: state.selectedTemplateReducer.selectedResumeId,
  personalInfo: state.personalInfoReducer.personalInfo,
  experiences: state.workExperienceReducer.experiences,
  educationInfo: state.educationDetailsReducer.educationInfo,
  skills: state.keySkillsReducer.skills,
});

//mapDispatchToProps function
const mapDispatchToProps = (dispatch) => ({});

//PreviewComponent function component
const PreviewComponent = (props) => {
  //Local state using useState hook
  const [loading, setLoading] = useState(false);
  const [resumeName, setResumeName] = useState("");
  const [error, setError] = useState("");
  
// Function to get the template based on selectedTemplateId
  const getTemplate = (template, index) => {
    if (template.id === props.selectedTemplateId) {
      const TemplateComp = React.cloneElement(template.template, {
        personalinfo: props.personalInfo,
        workexperience: props.experiences,
        educationinfo: props.educationInfo,
        skills: props.skills,
        index: index,
      });
      return TemplateComp;
    }
  };

  //function for preserving the resume.
  const handleSave = () => {
    //validation for empty resumeName field.
    if (resumeName.length === 0) {
      setError("*Please fill this field");
    } else {
      //reset error and set loading state.
      setError("");
      setLoading(true);
      //creating a new JsPDF instance for generating PDF.
      const report = new JsPDF("portrait", "pt", "a4");
      report
        .html(document.getElementById(`${props.selectedTemplateId - 1}report`))
        .then(() => {
          //saving the denerated PDF with resumeName.
          report.save(`${resumeName}.pdf`);
          setLoading(false);
          //Saving the user data in localstorage
          let resumes = window.localStorage.getItem("resumes");
          // console.log(resumes);
          if (resumes) {
            let newResumes = JSON.parse(resumes);

            let resumeFound = newResumes.find(
              (resume) => resume.id === props.selectedResumeId
            );

            if (resumeFound) {
              const allNewResumes = newResumes.map((resume) => {
                if (resume.id === props.selectedResumeId) {
                  return {
                    template_id: props.selectedTemplateId,
                    id: props.selectedResumeId,
                    personalInfo: props.personalInfo,
                    experiences: props.experiences,
                    educationInfo: props.educationInfo,
                    skills: props.skills,
                  };
                } else return resume;
              });

              window.localStorage.setItem(
                "resumes",
                JSON.stringify(allNewResumes)
              );

              window.location.reload();

              return;
            }

            newResumes.push({
              template_id: props.selectedTemplateId,
              id: uniqid(),
              personalInfo: props.personalInfo,
              experiences: props.experiences,
              educationInfo: props.educationInfo,
              skills: props.skills,
            });

            window.localStorage.setItem("resumes", JSON.stringify(newResumes));
          } else {
            window.localStorage.setItem(
              "resumes",
              JSON.stringify([
                {
                  template_id: props.selectedTemplateId,
                  id: uniqid(),
                  personalInfo: props.personalInfo,
                  experiences: props.experiences,
                  educationInfo: props.educationInfo,
                  skills: props.skills,
                },
              ])
            );
          }

          //Redirect user to the myResumes page
          window.location.reload();
        })
        .catch((error) => console.log(error.message));
    }
  };

  //function to handle going back to the previous tab
  const handleBack = () => {
    props.setTab(props.tab - 1);
  };

  //Return statement of the component
  return (
    <Container
      sx={{
        padding: {
          xs: "40px 20px",
          md: "60px 80px",
        },
      }}
      className="preview-container">
      <h2 className="preview-header-title">Resume Preview</h2>
      <div className="resume-preview-grid-container">
        <div className="resume-preview-grid-item" id="previewresume">
          {templates.map((template, index) => {
            return getTemplate(template, index);
          })}
        </div>
        <div className="resume-preview-grid-item">
          <div className="resume-save-container">
            <h3 className="resume-save-title">Create File Name</h3>
            <TextField
              value={resumeName}
              onChange={(e) => setResumeName(e.target.value)}
              className="resume-name-field"
              sx={{ width: "70%" }}
              id="outlined-basic"
              variant="outlined"
              error={error.length > 0 ? true : false}
              helperText={error}
            />
            <div className="resume-back-next-container">
              <Button
                onClick={handleBack}
                className="outlined-btn"
                sx={{ marginRight: "20px" }}
                variant="outlined">
                Back
              </Button>
              {loading ? (
                <CircularProgress size={25} />
              ) : (
                <Button
                  onClick={handleSave}
                  className="contained-btn"
                  variant="contained">
                  Save
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

//connect the component to Redux
export default connect(mapStateToProps, mapDispatchToProps)(PreviewComponent);
