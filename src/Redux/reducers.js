import * as actionTypes from "./actionTypes";

// This declares a constant variable entitled initialSelectedTemplateState which includes an obj with two attributes, selectedTemplateId and selectedResumeId, which are both set or null.
const initialSelectedTemplateState = {
  selectedTemplateId: null,
  selectedResumeId: null,
};

//This defines a constant variable called initialPersonalInfoState which includes an obj with only one property, personalInfo, which is an obj with properties for each piece of personal info required foe a resume.
const initialPersonalInfoState = {
  personalInfo: {
    profileImg: "",
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    address: "",
    city: "",
    state: "",
    postalCode: "",
    objective: "",
  },
};

// This creates a constant variable called initialWorkExperienceState that contains an obj with a single property, experiences, which is an arr of obj, each representing a work experience entry.
const initialWorkExperienceState = {
  experiences: [
    {
      id: 1,
      jobTitle: "",
      organizationName: "",
      startYear: "",
      endYear: "",
    },
  ],
};

//This creates a constant variable called initialEducationState that has an obj with a single property, educationInfo, which is an obj with properties for each piece of education information required for a resume.
const initialEducationState = {
  educationInfo: {
    domain: "",
    university: "",
    degree: "",
    startYear: "",
    endYear: "",
  },
};

//This creates a constant variable called initialSkillsState that includes an obj with a single value, skills, which is an arr of strings, each indicating a skill.
const initialSkillsState = {
  skills: ["", "", ""],
};

// selectedTemplateReducer handles template section and resume operations.
export const selectedTemplateReducer = (
  state = initialSelectedTemplateState,
  action
) => {
  switch (action.type) {
    case actionTypes.SELECTTEMPLATE:
      return { ...state, selectedTemplateId: action.payload };
    case actionTypes.SELECTRESUME:
      return { ...state, selectedResumeId: action.payload };
    default:
      return state;
  }
};

//personalInfoReducer manages actions connected to adding personal information.
export const personalInfoReducer = (
  state = initialPersonalInfoState,
  action
) => {
  switch (action.type) {
    case actionTypes.ADDPERSONALINFO:
      return {
        ...state,
        personalInfo: { ...state.personalInfo, ...action.payload },
      };
    default:
      return state;
  }
};

//workExperienceReducer manages actions related to adding work experience.
export const workExperienceReducer = (
  state = initialWorkExperienceState,
  action
) => {
  switch (action.type) {
    case actionTypes.ADDEXPERIENCE:
      return {
        ...state,
        experiences: [...state.experiences, action.payload],
      };
    case actionTypes.ADDALLEXPERIENCE:
      return {
        ...state,
        experiences: action.payload,
      };
    default:
      return state;
  }
};


//keySkillsReducer manages actions related to skill addition and editing.
export const keySkillsReducer = (state = initialSkillsState, action) => {
  switch (action.type) {
    case actionTypes.ADDNEWSKILLS:
      return { ...state, skills: [...state.skills, ""] };
    case actionTypes.EDITSKILL: {
      return {
        ...state,
        skills: action.payload,
      };
    }
    case actionTypes.DELETESKILL: {
      const newSkills = state.skills.filter(
        (skill, id) => id !== action.payload
      );

      return { ...state, skills: newSkills };
    }
    default:
      return state;
  }
};

//educationDetailsReducer manages actions connected to adding educational information.
export const educationDetailsReducer = (
  state = initialEducationState,
  action
) => {
  switch (action.type) {
    case actionTypes.ADDEDUCATION:
      return { ...state, educationInfo: action.payload };
    default:
      return state;
  }
};
