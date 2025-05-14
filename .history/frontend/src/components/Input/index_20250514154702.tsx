import { type FormikProps } from 'formik';

export const Input = ({ name, label, formik }: { name: string; label: string; formik: FormikProps }) => {
  return (
    <div style={{ marginBottom: 10 }}>
      <label htmlFor={name}>{label}</label>
      <br />
      <input
        type="text"
        onChange={(e) => {
          setState({ ...state, [name]: e.target.value });
        }}
        value={state[name]}
        name={name}
        id={name}
      />
    </div>
  );
};
