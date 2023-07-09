import * as yup from 'yup';

export const staffValidationSchema = yup.object().shape({
  role: yup.string().required(),
  responsibilities: yup.string().required(),
  user_id: yup.string().nullable(),
  organization_id: yup.string().nullable(),
});
