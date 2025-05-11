import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsOps';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from './ContactForm.module.css';

const ContactForm = () => {
    const dispatch = useDispatch();

    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .min(2, 'Занадто коротке ім’я')
            .max(50, 'Занадто довге ім’я')
            .required("Обов'язкове поле"),
        number: Yup.string()
            .matches(/^\d{3}-\d{2}-\d{2}$/, 'Формат: 123-45-67')
            .required("Обов'язкове поле"),
    });

    return (
        <Formik
            initialValues={{ name: '', number: '' }}
            validationSchema={validationSchema}
            onSubmit={(values, { resetForm }) => {
                dispatch(addContact(values));
                resetForm();
            }}
        >
            <Form className={styles.form}>
                <label>
                    Ім’я
                    <Field type="text" name="name" className={styles.field} />
                    <ErrorMessage name="name" component="div" className={styles.error} />
                </label>
                <label>
                    Номер
                    <Field type="text" name="number" className={styles.field} />
                    <ErrorMessage name="number" component="div" className={styles.error} />
                </label>
                <button type="submit" className={styles.butt}>Додати контакт</button>
            </Form>
        </Formik>
    );
};

export default ContactForm;
