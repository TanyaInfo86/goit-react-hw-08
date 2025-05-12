import { useDispatch } from "react-redux";
import { changeContact } from "../../redux/contacts/operations";
import css from "./ContactEditModal.module.css";
import { Field, Form, Formik } from "formik";
import toast from "react-hot-toast";
import { MdOutlinePublishedWithChanges } from "react-icons/md";

const ContactEditModal = ({ isOpen, onClose, contact }) => {
    const dispatch = useDispatch();

    if (!isOpen) return null;

    const handleSubmit = (values, actions) => {
        dispatch(changeContact({ id: contact.id, ...values }))
            .unwrap()
            .then(() => {
                toast(`Contact "${values.name}" updated!`, {
                    icon: <MdOutlinePublishedWithChanges size="20px" color="green" />,
                });
                onClose();
            })
            .catch(() => {
                toast.error(`Failed to update contact "${values.name}"`);
            });

        actions.setSubmitting(false);
    };

    return (
        <div className={css.backdrop}>
            <div className={css.modal}>
                <h3>Change contact:</h3>
                <Formik initialValues={contact} onSubmit={handleSubmit}>
                    <Form className={css.form}>
                        <label className={css.label}>
                            Name
                            <Field type="text" name="name" className={css.field} />
                        </label>
                        <label className={css.label}>
                            Number
                            <Field type="text" name="number" className={css.field} />
                        </label>
                        <button className={css.btnForm} type="submit">
                            Edit
                        </button>
                    </Form>
                </Formik>
            </div>
        </div>
    );
};

export default ContactEditModal;