import * as yup from 'yup';

const addClubSchema = yup.object({
  ClubName: yup
    .string()
    .min(2, 'Min 2 karekter koy')
    .max(20, 'Klüp ismi max 20 karakter olabilir')
    .required('Klüp ismi gerekli'),
  ClubMail: yup.string().email('Lütfen emailinizi doğru giriniz.').required('Klüp maili gerekli'),
  UniversityId: yup.number('Universite idsi numara olmalıdır').required('Universite alanı zorunludur'),
  Description: yup.string().max(1000, 'Ebenin nikahı 1000 tane ne yazdın ??').required('Açıklama alanı gereklidir'),
});

export { addClubSchema };
