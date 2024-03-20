import * as actionTypes from "./actionTypes";

//selectTemplate function returns an action object with a type of SELECTTEMPLATE and a payload of the id parameter. When a user selects a template, an action is sent to the Redux store. 
export const selectTemplate = (id) => ({
  type: actionTypes.SELECTTEMPLATE,
  payload: id,
});

//selectResume function returns an action object with a type of SELECTRESUME and a payload of the id parameter. When the user selects a resume, this action is routed to the redux store.
export const selectResume = (id) => ({
  type: actionTypes.SELECTRESUME,
  payload: id,
});

//addPersonalInfo function returns an action obj with the type ADDPERSONALINFO and the payload corresponding to the details parameter. When a user enters personal info, the redux store receives this action.
export const addPersonalInfo = (details) => ({
  type: actionTypes.ADDPERSONALINFO,
  payload: details,
});

//addExperience function produces an action obj with the type ADDEXPERIENCE and the experience parameter as its payload. When a user adds a new work experience, the redux store receives this activity. 
export const addExperience = (experience) => ({
  type: actionTypes.ADDEXPERIENCE,
  payload: experience,
});

//addAllExperience function returns an action obj with the type ADDALLEXPERIENCE with the payload containing the experiences parameter. This action is sent to Redux store when a user adds all of their job experiences at once.
export const addAllExperience = (experiences) => ({
  type: actionTypes.ADDALLEXPERIENCE,
  payload: experiences,
});

//addNewSkills function returns an action obj with the type property set to ADDNEWSKILLS and the payload set to null. When a user choose to add a new talent, this action is sent to the redux store.
export const addNewSkills = () => ({
  type: actionTypes.ADDNEWSKILLS,
  payload: null,
});

//editSkill function produces an action obj with the property set to EDITSKILL and the payload set to the skills parameter. When a user modifies an existing skill, the redux store receives this action.
export const editSkill = (skills) => ({
  type: actionTypes.EDITSKILL,
  payload: skills,
});

// deleteSkill function returns an action obj with the type DELETESKILL and the payload set to the id parameter. When a user selects to delete a skill, this action is sent to redux store.
export const deleteSkill = (id) => ({
  type: actionTypes.DELETESKILL,
  payload: id,
});

//addEducation function returns an action obj with a type of ADDEDUCATION and a payload of the details parameter. When a user enters their educational info, this action is sent to the redux store.
export const addEducation = (details) => ({
  type: actionTypes.ADDEDUCATION,
  payload: details,
});
