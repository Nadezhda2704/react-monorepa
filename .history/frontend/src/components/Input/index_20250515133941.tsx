import { type FormikProps } from 'formik';

export const Input = ({ name, label, type='text', formik }: { name: string; label: string; type?: string; formik: FormikProps<any> }) => {
  const value = formik.values[name];
  const error = formik.errors[name] as string | undefined;

  return (
    <div style={{ marginBottom: 10 }}>
      <label htmlFor={name}>{label}</label>
      <br />
      {error && <div style={{ color: 'red', fontSize: '14px' }}>{error}</div>}
      <input
        type={type}
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
