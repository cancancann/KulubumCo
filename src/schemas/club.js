import * as yup from 'yup';

const addClubSchema = yup.object({
    ClubName: yup.string()
    .min(2,'Min 2 karekter koy')
    .max(20,'Max20 kardeşim')
    .required('zorunlu'),
    ClubMail: yup.string().email('Lütfen emailinizi doğru giriniz.').required('zorunlu'),
    UniversityId:yup.number().required('zorunlu'),
    Description:yup.string().max(1000,'Ebenin nikahı 1000 tane ne yazdın ??')
})


export { addClubSchema }