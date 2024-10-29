export const signUpFormControls = [
  {
    name: "name",
    label: "Name",
    placeholder: "Enter your user name",
    type: "text",
    componentType: "Input",
    validation: {
      required: "Name is required",
    },
  },
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your user email",
    type: "email",
    componentType: "Input",
    validation: {
      required: "Email is required",
      pattern: {
        value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        message: "Invalid email address",
      },
    },
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    type: "password",
    componentType: "Input",
    validation: {
      required: "Password is required",
      minLength: {
        value: 5,
        message: "Password must be at least 5 characters",
      },
    },
  },
  {
    name: "role",
    label: "Role",
    placeholder: "Select your role",
    type: "select",
    componentType: "Select",
    options: [
      { label: "Student", value: "student" },
      { label: "Instructor", value: "instructor" },
    ],
    validation: {
      required: "Select your role",
    },
  },
];

export const initialSignUpFormData = {
  name: "",
  email: "",
  password: "",
};

export const signInFormControls = [
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your user email",
    type: "email",
    componentType: "Input",
    validation: {
      required: "Email is required",
      pattern: {
        value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        message: "Invalid email address",
      },
    },
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    type: "password",
    componentType: "Input",
    validation: {
      required: "Password is required",
      minLength: {
        value: 5,
        message: "Password must be at least 5 characters",
      },
    },
  },
];

export const initialSignInFormData = {
  email: "",
  password: "",
};

export const languageOptions = [
  { value: "english", label: "English" },
  { value: "spanish", label: "Spanish" },
  { value: "french", label: "French" },
  { value: "german", label: "German" },
  { value: "chinese", label: "Chinese" },
  { value: "japanese", label: "Japanese" },
  { value: "korean", label: "Korean" },
  { value: "portuguese", label: "Portuguese" },
  { value: "arabic", label: "Arabic" },
  { value: "russian", label: "Russian" },
];

export const courseLevelOptions = [
  { value: "beginner", label: "Beginner" },
  { value: "intermediate", label: "Intermediate" },
  { value: "advanced", label: "Advanced" },
];

export const courseCategories = [
  { value: "web-development", label: "Web Development" },
  { value: "backend-development", label: "Backend Development" },
  { value: "data-science", label: "Data Science" },
  { value: "machine-learning", label: "Machine Learning" },
  { value: "artificial-intelligence", label: "Artificial Intelligence" },
  { value: "cloud-computing", label: "Cloud Computing" },
  { value: "cyber-security", label: "Cyber Security" },
  { value: "mobile-development", label: "Mobile Development" },
  { value: "game-development", label: "Game Development" },
  { value: "software-engineering", label: "Software Engineering" },
];

export const courseLandingPageFormControls = [
  {
    name: "title",
    label: "Title",
    componentType: "Input",
    type: "text",
    placeholder: "Enter course title",
  },
  {
    name: "category",
    label: "Category",
    type: "select",
    componentType: "Select",
    placeholder: "Select category",
    options: courseCategories,
  },
  {
    name: "level",
    label: "Level",
    componentType: "Select",
    type: "select",
    placeholder: "Select difficulty",
    options: courseLevelOptions,
  },
  {
    name: "primaryLanguage",
    label: "Primary Language",
    componentType: "Select",
    type: "select",
    placeholder: "Select languages",
    options: languageOptions,
  },
  {
    name: "subtitle",
    label: "Subtitle",
    componentType: "Input",
    type: "text",
    placeholder: "Enter course subtitle",
  },
  {
    name: "description",
    label: "Description",
    componentType: "Textarea",
    type: "text",
    placeholder: "Enter course description",
  },
  {
    name: "pricing",
    label: "Pricing",
    componentType: "Input",
    type: "number",
    placeholder: "Enter course pricing",
  },
  {
    name: "objectives",
    label: "Objectives",
    componentType: "Textarea",
    type: "text",
    placeholder: "Enter course objectives",
  },
  {
    name: "welcomeMessage",
    label: "Welcome Message",
    componentType: "Textarea",
    placeholder: "Welcome message for students",
  },
];

export const courseLandingInitialFormData = {
  title: "",
  category: "",
  level: "",
  primaryLanguage: "",
  subtitle: "",
  description: "",
  pricing: "",
  objectives: "",
  welcomeMessage: "",
  image: "",
};
