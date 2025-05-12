import { ErrorMessage, Field, Form, Formik } from "formik";
import style from "./RegisterForm.module.css";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

const RegisterSchema = Yup.object().shape({
    name: Yup.string()
        .min(3, "Too short!")
        .max(50, "Too long!")
        .required("Required"),
    email: Yup.string().email("Please enter a valid email").required("Required"),
    password: Yup.string()
        .matches(passwordRules, { message: "Please create a stronger password" })
        .required("Required"),
});

const initialValues = {
    name: '',
    email: '',
    password: '',
};

const RegisterForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = (values, actions) => {
        dispatch(register(values));
        actions.resetForm();
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={RegisterSchema}
            onSubmit={handleSubmit}
            validateOnBlur
            validateOnChange
        >
            <Form className={style.form}>
                <div className={style.label}>
                    <label htmlFor="name">Name</label>
                    <Field
                        className={style.field}
                        type="text"
                        name="name"
                        id="name"
                        autoComplete="name"
                    />
                    <ErrorMessage name="name" component="span" className={style.error} />
                </div>

                <div className={style.label}>
                    <label htmlFor="email">Email</label>
                    <Field
                        className={style.field}
                        type="email"
                        name="email"
                        id="email"
                        autoComplete="email"
                    />
                    <ErrorMessage name="email" component="span" className={style.error} />
                </div>

                <div className={style.label}>
                    <label htmlFor="password">Password</label>
                    <Field
                        className={style.field}
                        type="password"
                        name="password"
                        id="password"
                        autoComplete="new-password"
                    />
                    <ErrorMessage
                        name="password"
                        component="span"
                        className={style.error}
                    />
                </div>

                <button className={style.btnForm} type="submit">
                    Register
                </button>
            </Form>
        </Formik>
    );
};

export default RegisterForm;
