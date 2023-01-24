import * as yup from 'yup';

const registerSchema = yup.object({
  Username: yup
    .string()
    .min(5, 'Kullanıcı adı en az 5 karakter olmalıdır')
    .max(20, 'Kullanıcı adı maximum 20 karakter olmalıdır.')
    .required('Kullanıcı adı boş geçilemez!'),
  Userpassword: yup
    .string()
    .min(8, 'Şifre en az 8 karakter olmalıdır!')
    .max(20, 'Şifre maximum 20 karakter olabilir!')
    .required('Lütfen şifrenizi giriniz'),
  PasswordConfirm: yup
    .string()
    .oneOf([yup.ref('Userpassword'), null], 'Şifreler eşleşmiyor!')
    .required('Şifre onay alanı boş olamaz'),
  Email: yup.string().email('Geçersiz email adresi!').required('Email alanı boş olamaz!'),
  Universite: yup.string().min(1).max(1000).required('Üniversite Alanını doldurunuz!!'),
});

const loginSchema = yup.object({
  Username: yup
    .string()
    .min(5, 'Kullanıcı en az 5 karakter girmelidir.')
    .max(20, 'Kullanıcı max 20 karakter olabilir.')
    .required('Kullanıcı adı boş bırakılamaz.'),
  Userpassword: yup
    .string()
    .min(8, 'Şifre en az 8 Karakterden oLuşabilir.')
    .max(20, 'Şifre maximum 20 karakterden oluşabilir.')
    .required('Şifre alanı boş bırakılamaz.'),
});

const changePasswordSchema = yup.object({
  oldPassword: yup
    .string()
    .min(8, 'Şifre en az 8 karakter olmalıdır!')
    .max(20, 'Şifre maximum 20 karakter olabilir!')
    .required('Eski şifre alanı bol bırakılamaz'),

  newPassword: yup
    .string()
    .min(8, 'Şifre en az 8 karakter olmalıdır!')
    .max(20, 'Şifre maximum 20 karakter olabilir!')
    .required('Yeni şifre boş bırakılamaz'),
  newPasswordConfirm: yup
    .string()
    .oneOf([yup.ref('newPassword'), null], 'Şifreler eşleşmiyor!')
    .min(8, 'Şifre en az 8 karakter olmalıdır!')
    .max(20, 'Şifre maximum 20 karakter olabilir!')
    .required('Şifre onay alanı boş bırakılamaz'),
});

const postCreateSchema = yup.object({
  postHeader: yup
    .string()
    .min(8, 'en az 10 karakter olmalıdır!')
    .required('Post header boş  bırakılamaz'),
  postDescription: yup
    .string()
    .min(8, 'en az 10 karakter olmalıdır!')
    .required('Post text alanı boş  bırakılamaz'),
})
export { registerSchema, loginSchema, changePasswordSchema, postCreateSchema };
