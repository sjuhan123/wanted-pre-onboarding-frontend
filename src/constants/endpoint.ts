const BASE_URL = 'https://www.pre-onboarding-selection-task.shop/';

export const END_POINT = {
  SIGN_UP: `${BASE_URL}/auth/signup`,
  SIGN_IN: `${BASE_URL}/auth/signin`,
  TODOS: `${BASE_URL}/todos`,
} as const;
