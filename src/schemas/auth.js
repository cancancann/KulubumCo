import * as yup from 'yup';

const registerSchema = yup.object({
  Username: yup
    .string()
    .min(5, 'Kullanıcı adı en az 5 karakter olmalıdır')
    .max(20, 'Kullanıcı adı maximum 20 karakter olmalıdır.')
    .required('Kullanıcı adı boş geçilemez!'),
  Password: yup.string().min(5, 'Şifre en az 5 karakter olmalıdır!').max(20, 'Şifre maximum 20 karakter olabilir!'),
  PasswordConfirm: yup
    .string()
    .oneOf([yup.ref('Password'), null], 'Şifreler eşleşmiyor!')
    .required('Şifre onay alanı boş olamaz'),
  Email: yup.string().email('Geçersiz email adresi!').required('Email alanı boş olamaz!'),
});

const loginSchema = yup.object({
  Username: yup
    .string()
    .min(5, 'Kullanıcı en az 5 karakter girmelidir.')
    .max(20, 'Kullanıcı max 20 karakter olabilir!')
    .required('Bu input boş bırakılamaz!!'),
  Password: yup
    .string()
    .min(8, 'Min 8 Karakterden oLuşabilir!!')
    .max(16, 'Max 16 karakterden oluşabilir!!')
    .required('Boş Bırakılamaz.'),
});

export { registerSchema, loginSchema };
