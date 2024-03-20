import React from "react";
import Navbar from "../Components/Common/Navbar";
import "../Styles/Home.css";
import { templates } from "../Data/templates";
import BlackScreen from "../Components/BlackScreen";
import { Button, Stack } from "@mui/material";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectTemplate } from "../Redux/actions";
import Footer from "../Components/Common/footer";

// mapStateToProps func that converts the state of the Redux store into props for the Home component. In this scenario, it retrieves the selectedTemplateId from the selectedTemplateReducer state slice.
const mapStateToProps = (state) => ({
  selectedTemplateId: state.selectedTemplateReducer.selectedTemplateId,
});

// This func links Redux actions to Home component props. In this case, it maps the selectTemplate action to a setSelectedTemplate prop, which can be used with a template ID to alter the selectedTemplate state in the Redux store.
const mapDispatchToProps = (dispatch) => ({
  setSelectedTemplateId: (id) => dispatch(selectTemplate(id)),
});

// functional component that takes props as a parameter.
const Home = (props) => {
  const navigate = useNavigate(); //this used the react-router-dom library's useNavigate hook to obtain a reference to the navigate func, which can be used to programmatically navigate to various routes.

  // This is a helper func that sets the selectedTemplate state with the setSelectedTemplateId prop and then navigates to the /template/fill-details route.
  const navigateToFillDetails = (id) => {
    props.setSelectedTemplateId(id);
    navigate("/template/fill-details");
  };

  return (
    <>
    {/* Rendering the 'Navbar' component with the 'active' prop set to 'Resume Templates'*/}
      <Navbar active={"Resume Templates"} />

      <>
        <div className="home">
          <div className="home-templates-cont">
            <h2 className="template-header-title">Resume Templates</h2>
            <p className="template-select-text">
              Select a template to get started
            </p>

           {/* This Stack components from the Material-UI framework displays the various templates in a grid arrangement. It creates a responsive grid layout by setting the width 100% and applying the gridTemplateColumns and gridGap styles. */}
            <Stack
              sx={{
                width: "100%",
                display: "grid",
                gridTemplateColumns: {
                  sm: "1fr 1fr",
                  md: "1fr 1fr",
                  lg: "1fr 1fr 1fr",
                  xl: "1fr 1fr 1fr 1fr",
                },
                gridGap: "20px",
              }}
            >
              {/* This is using the map func to iterate over the templates arr and render a div for each template. */}
              {templates.map((template) => { 
                return (
                  <div
                    key={template.id}
                    id="template"
                    className="templates-img-cont"
                  >
                    <img
                      style={{ width: "90%", height: "60vh" }}
                      className="template-img"
                      src={template.template_img}
                      alt={template.template_name}
                    />
                    <BlackScreen />
                    <Button
                      className="use-template-btn"
                      onClick={() => navigateToFillDetails(template.id)}
                      size="medium"
                      variant="contained"
                    >
                      Use Template
                    </Button>
                  </div>
                );
              })}
            </Stack>
          </div>
        </div>
      </>
      <Footer/>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
