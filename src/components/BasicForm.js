import useInput from "../hooks/use-input";

const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) => value.includes("@");

const BasicForm = (props) => {
  let formIsValid = false;

  const {
    value: firstNameValue,
    isValid: firstNameIsValid,
    hasError: firstNameHasError,
    valueChangeHandler: firstNameChangedHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstName,
  } = useInput(isNotEmpty);

  const {
    value: lastNameValue,
    isValid: lastNameIsValid,
    hasError: lastNameHasError,
    valueChangeHandler: lastNameChangedHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastName,
  } = useInput(isNotEmpty);

  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangedHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(isEmail);

  if (firstNameIsValid && lastNameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const formSubmisionHandler = (e) => {
    e.preventDefault();

    if (!formIsValid){
      return;
    }

    resetFirstName();
    resetLastName();
    resetEmail();
  };

  const inputClass = (hasError) => {
    return hasError ? "form-control invalid" : "form-control";
  };

  return (
    <form onSubmit={formSubmisionHandler}>
      <div className="control-group">
        <div className={inputClass(firstNameHasError)}>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            onChange={firstNameChangedHandler}
            onBlur={firstNameBlurHandler}
            value={firstNameValue}
          />
          {firstNameHasError && (
            <p className="error-text">First name must not be empty.</p>
          )}
        </div>

        <div className={inputClass(lastNameHasError)}>
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            onChange={lastNameChangedHandler}
            onBlur={lastNameBlurHandler}
            value={lastNameValue}
          />
          {lastNameHasError && (
            <p className="error-text">Last name must not be empty.</p>
          )}
        </div>

        <div className={inputClass(emailHasError)}>
          <label htmlFor="email">E-Mail Address</label>
          <input
            type="text"
            id="email"
            onChange={emailChangedHandler}
            onBlur={emailBlurHandler}
            value={emailValue}
          />
          {emailHasError && (
            <p className="error-text">Please enter a valid email.</p>
          )}
        </div>
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
