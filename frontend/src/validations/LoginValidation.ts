export interface LoginErrors {
  email?: string;
  password?: string;
}

export const validateLogin = (
  email: string,
  password: string
): LoginErrors => {
  const errors: LoginErrors = {};

  if (!email.trim()) {
    errors.email = "Email is required";
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)
  ) {
    errors.email = "Enter a valid email";
  }

  if (!password.trim()) {
    errors.password = "Password is required";
  } else if (password.length < 6) {
    errors.password = "Minimum 6 characters";
  }

  return errors;
};