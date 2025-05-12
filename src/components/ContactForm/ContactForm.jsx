import { ErrorMessage, Field, Form, Formik } from "formik";
import style from "./ContactForm.module.css";
import * as Yup from "yup";
import { useId } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import toast from "react-hot-toast";
import { BsPersonAdd } from "react-icons/bs";
import { selectContacts } from "../../redux/contacts/selectors";
import { RiErrorWarningLine } from "react-icons/ri";

const ContactSchema = Yup.object().shape({
    name: Yup.string()
        .min(3, "Too short!")
        .max(50, "Too long!")
        .required("Required"),
    // number: Yup.string().matches(/^\d{3}-\d{2}-\d{2}$/, 'Format: 123-45-67').required('Required'),
    number: Yup.string()
        .min(3, "Too short!")
        .max(50, "Too long!")
        .matches(/^\d{3}-\d{2}-\d{2}$/, 'Format: 123-45-67')
        .required("Required"),
});

const initialValues = {
    name: "",
    number: "",
};

const ContactForm = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(selectContacts);

    const nameFieldId = useId();
    const numberId = useId();

    const handleSubmit = (values, actions) => {
        const isDuplicate = contacts.some(
            (contact) => contact.name.toLowerCase() === values.name.toLowerCase()
        );

        if (isDuplicate) {
            toast(`Contact "${values.name}" already exists!`, {
                icon: <RiErrorWarningLine size="20px" color="#6b3f7d" />,
            });
            return;
        }

        dispatch(addContact(values))
            .unwrap()
            .then(() => {
                toast(`Contact "${values.name}" added!`, {
                    icon: <BsPersonAdd size="20px" color="#407d3f" />,
                });
            })
            .catch(() => {
                toast.error(`Failed to add contact`);
            });
        actions.resetForm();
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={ContactSchema}
            onSubmit={handleSubmit}
        >
            <Form className={style.form}>
                <div className={style.label}>
                    <label htmlFor={nameFieldId}>Name</label>
                    <Field
                        className={style.field}
                        type="text"
                        name="name"
                        id={nameFieldId}
                    />
                    <ErrorMessage name="name" component="span" className={style.error} />
                </div>
                <div className={style.label}>
                    <label htmlFor={numberId}>Number</label>
                    <Field
                        className={style.field}
                        type="text"
                        name="number"
                        id={numberId}
                    />
                    <ErrorMessage
                        name="number"
                        component="span"
                        className={style.error}
                    />
                </div>

                <button className={style.btnForm} type="submit">
                    Add contact
                </button>
            </Form>
        </Formik>
    );
};

export default ContactForm;