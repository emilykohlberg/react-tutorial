import { useParams, useNavigate } from 'react-router-dom';
import { useFormData } from '../utilities/useFormData';
import { useDbUpdate } from '../utilities/firebase';


const validateUserData = (key, val) => {
  switch (key) {
    case 'title':
      return /(^\w\w)/.test(val) ? '' : 'must be least two characters';
    case 'meets':
      return /[M|Tu|W|Th|F]\s(?:\d{1}|\d{2})[:]\d{2}[-](?:\d{1}|\d{2})[:]\d{2}/.test(val) ? '' 
      : 'must be a legal meeting time with one or more days and a non-empty timespan';
    default: return '';
  }
};

const InputField = ({name, text, state, change}) => (
  <div className="mb-3">
    <label htmlFor={name} className="form-label">{text}</label>
    <input className="form-control" id={name} name={name} 
      defaultValue={state.values?.[name]} onChange={change} />
    <div className="invalid-feedback">{state.errors?.[name]}</div>
  </div>
);

const ButtonBar = ({message, disabled}) => {
  const navigate = useNavigate();
  return (
    <div className="d-flex">
      <button type="button" className="btn btn-outline-dark me-2" onClick={() => navigate(-1)}>Cancel</button>
      <button type="submit" className="btn btn-primary me-auto" disabled={disabled}>Submit</button>
      <span className="p-2">{message}</span>
    </div>
  );
};

const CourseEdit = ({courses}) => {
  const { id } = useParams();
  const course = courses[id];
  const [update, result] = useDbUpdate(`/courses/${id}`);
  const [state, change] = useFormData(validateUserData, course);
  const submit = (evt) => {
    evt.preventDefault();
    if (!state.errors) {
      update(state.values);
    }
  };


  return (
    <form onSubmit={submit} noValidate className={state.errors ? 'was-validated' : null}>
      <InputField name="number" text="Course Number" state={state} change={change} />
      <InputField name="title" text="Course Title" state={state} change={change} />
      <InputField name="meets" text="Course Meeting Times" state={state} change={change} />
      <ButtonBar message={result?.message} />
    </form>
  )
};

export default CourseEdit;