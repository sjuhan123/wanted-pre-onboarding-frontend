export const END_POINT = {
  SIGN_UP: `${process.env.REACT_APP_BASE_URL}auth/signup`,
  SIGN_IN: `${process.env.REACT_APP_BASE_URL}auth/signin`,
  TODOS: `${process.env.REACT_APP_BASE_URL}todos`,
} as const;
