import React, { useState } from "react";
import Navbar from "../Components/Common/Navbar";
import DetailFillingSidebar from "../Components/DetailFillingSidebar";
import EducationComponent from "../Components/EducationComponent";
import KeySkillsComponent from "../Components/KeySkillsComponent";
import PersonalInfoComponent from "../Components/PersonalInfoComponent";
import PreviewComponent from "../Components/PreviewComponent";
import WorkExperienceComponent from "../Components/WorkExperienceComponent";
import "../Styles/DetailsFilling.css";

// DetailsFilling function defines a functional component. It accepts props as an argument, which is an obj. containing the properties passes to the component.
const DetailsFilling = (props) => {
  const [tab, setTab] = useState(0); //It use the useState hook to declare a state variable called tab. The initial value of tab is zero and useState hook also returns a function named setTab, which can be used to change the value of the tab.

  return (
    <div className="details-filling">
      <Navbar active={""} /> 
      {tab === 4 ? null : (
        <div className="details-filling-cont">
          <DetailFillingSidebar tab={tab} setTab={setTab} />
          {tab === 0 ? (
            <PersonalInfoComponent setTab={setTab} tab={tab} />
          ) : null}
          {tab === 3 ? <KeySkillsComponent setTab={setTab} tab={tab} /> : null}
          {tab === 1 ? (
            <WorkExperienceComponent setTab={setTab} tab={tab} />
          ) : null}
          {tab === 2 ? <EducationComponent setTab={setTab} tab={tab} /> : null}
        </div>
      )}
      {tab === 4 ? <PreviewComponent setTab={setTab} tab={tab} /> : null}
    </div>
  );
};

export default DetailsFilling;



