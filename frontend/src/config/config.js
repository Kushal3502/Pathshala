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
    componentType: "Input",
    options: [
      { label: "Student", value: "Student" },
      { label: "Instructor", value: "Instructor" },
    ],
    validation: {
      required: "Select your role",
    },
  },
];

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
