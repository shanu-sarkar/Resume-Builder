import React, { useEffect, useState } from "react";
import Navbar from "../Components/Common/Navbar";
import "../Styles/MyResumes.css";
import { Button } from "@mui/material";
import BlackScreen from "../Components/BlackScreen";
import { templates } from "../Data/templates";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import { Box } from "@mui/system";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import JsPDF from "jspdf";
import { connect } from "react-redux";
import {
  addAllExperience,
  addEducation,
  addPersonalInfo,
  editSkill,
  selectResume,
  selectTemplate,
} from "../Redux/actions";
import { useNavigate } from "react-router-dom";
import Footer from '../Components/Common/footer'

// builds a styled component using the Emotion library styled API. It applies certain styles to Material-UI's paper component.
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

// mapStateToProps function converts Redux state into component props. In this state, it retrieves the selectedTemplateId from the state.
const mapStateToProps = (state) => ({
  selectedTemplateId: state.selectedTemplateReducer.selectedTemplateId,
});

// mapDispatchToProps func converts dispatch actions into props for the component. It returns several functions that dispatch Redux actions.
const mapDispatchToProps = (dispatch) => ({
  setSelectedTemplateId: (id) => dispatch(selectTemplate(id)),
  setSelectedResumeId: (id) => dispatch(selectResume(id)),
  onAddPersonalInfo: (details) => dispatch(addPersonalInfo(details)),
  setAllExperience: (experiences) => dispatch(addAllExperience(experiences)),
  onAddEducation: (details) => dispatch(addEducation(details)),
  onEditSkill: (skills) => dispatch(editSkill(skills)),
});

// This is for MyResumes component.
const MyResumes = (props) => {
  const [resumes, setResumes] = useState([]);


  // this hook is used to set the resumes state when the component is mounted. It retrieves the resumes from local storage, parses them from a JSON string, and assigns them to the resumes state.
  useEffect(() => {
    const newResumes = window.localStorage.getItem("resumes")
      ? JSON.parse(window.localStorage.getItem("resumes"))
      : [];

    setResumes(newResumes);
  }, []);

  const navigate = useNavigate();

  const getTemplate = (resume, index) => {
    let template = templates.find(
      (eachTemplate) => eachTemplate.id === resume.template_id
    );
  
    const TemplateComp = React.cloneElement(template.template, {
      personalinfo: resume.personalInfo,
      workexperience: resume.experiences,
      educationinfo: resume.educationInfo,
      skills: resume.skills,
      key: resume.id,
      index: index,
    });

    return TemplateComp;
  };

  const deleteResume = (resume) => {
    let resumes = window.localStorage.getItem("resumes");

    let newResumes = JSON.parse(resumes);
    const newSetOfResumes = newResumes.filter((eachResume) => {
      return eachResume.id !== resume.id;
    });

    window.localStorage.setItem("resumes", JSON.stringify(newSetOfResumes));
    setResumes(newSetOfResumes);
  };

  const downloadResume = (id) => {
    const report = new JsPDF("portrait", "pt", "a4");
    report.html(document.getElementById(`${id}report`)).then(() => {
      report.save(`resume.pdf`);
    });
  };

  // setUserData function takes a resume obj, extracts its contents, then uses redux actions to update the application's state.
  const setUserData = (resume) => {
    // console.log(resume);
    //set personal info

    props.onAddPersonalInfo(resume.personalInfo);

    //set work experience

    props.setAllExperience(resume.experiences);

    //set education info

    props.onAddEducation(resume.educationInfo);

    //set skills

    props.onEditSkill(resume.skills);
  };

  //navigateToFillDetails function sets the selectedTemplateId, selectedResumeId, and user data before navigating to the /template/fill-details route.
  const navigateToFillDetails = (resume) => {
    props.setSelectedTemplateId(resume.template_id);
    props.setSelectedResumeId(resume.id);
    setUserData(resume);
    navigate("/template/fill-details");
  };

  return (
    <>
      <Navbar active={"My Resumes"} />
      <div className="my-resumes">
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            className="grid">
            {resumes.length >= 1 ? (
              resumes.map((resume, index) => {
                return (
                  <Grid
                    item
                    className={`resume `}
                    id={`${index}resume`}
                    margin={2}
                    key={index}>
                    <Item id={`${index}ITEM`}>
                      {getTemplate(resume, index)}
                      <BlackScreen />
                      <div className="use-template-btn-cont">
                        <Button
                          className="use-template-btn"
                          onClick={() => {
                            downloadResume(index);
                          }}
                          size="medium"
                          variant="contained">
                          Download
                        </Button>
                        <Button
                          className="use-template-btn"
                          onClick={() => {
                            deleteResume(resume);
                          }}
                          size="medium"
                          variant="contained">
                          Delete
                        </Button>
                        <Button
                          className="use-template-btn"
                          onClick={() => navigateToFillDetails(resume)}
                          size="medium"
                          variant="contained">
                          Edit Template
                        </Button>
                      </div>
                    </Item>
                  </Grid>
                );
              })
            ) : (
              <div className="no-resumes-container">
                <SentimentVeryDissatisfiedIcon fontSize="large" />
                <p className="no-resumes-text" style={{margin:'0 13px'}}>
                <strong style={{fontSize:"20px"}}>Oops!.</strong>  You do not have any Resumes yet.  Make One to view it here.
                  You do not have any Resumes yet. Make One to view it here.
                </p>
              </div>
            )}
          </Grid>
        </Box>
      </div>
            <Footer/>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(MyResumes);

