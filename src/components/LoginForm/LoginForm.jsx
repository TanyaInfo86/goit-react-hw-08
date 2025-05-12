import { Field, Form, Formik } from "formik";
import style from "./LoginForm.module.css";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import { useId } from "react";
import toast from "react-hot-toast";

const initialValues = {
    email: "",
    password: "",
};

const LoginForm = () => {
    const dispatch = useDispatch();

    const emailFieldId = useId();
    const passwordId = useId();

    const handleSubmit = (values, actions) => {
        dispatch(logIn(values))
            .unwrap()
            .then(() => {
                console.log("Login success!");
            })
            .catch(() => {
                toast.error("Login or password error!");
            });

        actions.resetForm();
    };

    return (
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            <Form className={style.form}>
                <div className={style.label}>
                    <label htmlFor={emailFieldId}>Email</label>
                    <Field
                        className={style.field}
                        type="email"
                        name="email"
                        id={emailFieldId}
                    />
                </div>
                <div className={style.label}>
                    <label htmlFor={passwordId}>Password</label>
                    <Field
                        className={style.field}
                        type="password"
                        name="password"
                        id={passwordId}
                    />
                </div>

                <button className={style.btnForm} type="submit">
                    Log In
                </button>
            </Form>
        </Formik>
    );
};

export default LoginForm;