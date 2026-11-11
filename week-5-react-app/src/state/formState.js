export const initialFormData = {
  fullName: "",
  email: "",
  company: "",
  interest: "",
  contactMethod: "",
  message: "",
  agreeToTerms: false,
};

export const FORM_ACTIONS = {
  UPDATE_NAME: "UPDATE_NAME",
  UPDATE_EMAIL: "UPDATE_EMAIL",
  UPDATE_COMPANY: "UPDATE_COMPANY",
  UPDATE_INTEREST: "UPDATE_INTEREST",
  UPDATE_CONTACT_METHOD: "UPDATE_CONTACT_METHOD",
  UPDATE_MESSAGE: "UPDATE_MESSAGE",
  UPDATE_CONSENT: "UPDATE_CONSENT",
  RESET_FORM: "RESET_FORM",
};

const fieldActions = {
  fullName: FORM_ACTIONS.UPDATE_NAME,
  email: FORM_ACTIONS.UPDATE_EMAIL,
  company: FORM_ACTIONS.UPDATE_COMPANY,
  interest: FORM_ACTIONS.UPDATE_INTEREST,
  contactMethod: FORM_ACTIONS.UPDATE_CONTACT_METHOD,
  message: FORM_ACTIONS.UPDATE_MESSAGE,
  agreeToTerms: FORM_ACTIONS.UPDATE_CONSENT,
};

export function getFieldAction(name, value) {
  const type = fieldActions[name];
  return type ? { type, payload: value } : null;
}

export function formReducer(state, action) {
  switch (action.type) {
    case FORM_ACTIONS.UPDATE_NAME:
      return { ...state, fullName: action.payload };
    case FORM_ACTIONS.UPDATE_EMAIL:
      return { ...state, email: action.payload };
    case FORM_ACTIONS.UPDATE_COMPANY:
      return { ...state, company: action.payload };
    case FORM_ACTIONS.UPDATE_INTEREST:
      return { ...state, interest: action.payload };
    case FORM_ACTIONS.UPDATE_CONTACT_METHOD:
      return { ...state, contactMethod: action.payload };
    case FORM_ACTIONS.UPDATE_MESSAGE:
      return { ...state, message: action.payload };
    case FORM_ACTIONS.UPDATE_CONSENT:
      return { ...state, agreeToTerms: action.payload };
    case FORM_ACTIONS.RESET_FORM:
      return initialFormData;
    default:
      return state;
  }
}
