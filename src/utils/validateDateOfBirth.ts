export const validateDateOfBirth = (value: string): string | boolean => {
  const inputDate = new Date(value);
  const currentDate = new Date();
  const hundredYearsAgo = new Date();
  hundredYearsAgo.setFullYear(hundredYearsAgo.getFullYear() - 116);

  if (inputDate < hundredYearsAgo) {
    return 'Date of birth cannot be more than 116 years ago';
  }
  if (inputDate > currentDate) {
    return 'Date of birth cannot be in the future';
  }

  return true;
};
