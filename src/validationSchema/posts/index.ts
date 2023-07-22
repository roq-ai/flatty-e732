import * as yup from 'yup';

export const postValidationSchema = yup.object().shape({
  title: yup.string().required(),
  content: yup.string().required(),
  category_id: yup.string().nullable().required(),
  user_id: yup.string().nullable().required(),
});