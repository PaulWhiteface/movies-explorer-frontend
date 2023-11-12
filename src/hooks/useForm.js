import React, { useCallback } from "react";

//хук управления формой
export default function useForm() {
    const [values, setValues] = React.useState({});
    const [errors, setErrors] = React.useState({});
    const [isValid, setIsValid] = React.useState(false);

  const handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    setValues({...values, [name]: value});
    setErrors({
      ...errors, [name]: event.target.validationMessage,
    });

    setIsValid(event.target.closest('#form').checkValidity());
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return {
    values,
    errors,
    isValid,
    handleChange,
    resetForm
  }
}
