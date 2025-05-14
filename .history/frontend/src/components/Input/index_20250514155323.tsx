import { type FormikProps } from 'formik';

export const Input = ({ name, label, type, formik }: { name: string; label: string; type: string; formik: FormikProps<any> }) => {
  const value = formik.values[name];
  return (
    <div style={{ marginBottom: 10 }}>
      <label htmlFor={name}>{label}</label>
      <br />
      <input
        type={type | 'text'}
        onChange={(e) => {
          void formik.setFieldValue(name, e.target.value);
        }}
        value={value}
        name={name}
        id={name}
      />
    </div>
  );
};
