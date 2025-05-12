import style from "./App.module.css";
import { useDispatch, useSelector } from "react-redux";
import { lazy, Suspense, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { selectIsRefreshing } from "../../redux/auth/selectors";
import { refreshUser } from "../../redux/auth/operations";
import PrivateRoute from "../PrivateRoute";
import RestrictedRoute from "../RestrictedRoute";
import AppBar from "../AppBar/AppBar";
import { Toaster } from "react-hot-toast";
import Layout from "../Layout/Layout";
import NotFoundPage from "../NotFoundPage/NotFoundPage";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const LoginPage = lazy(() => import("../../pages/LoginPage/LoginPage"));
const RegistrationPage = lazy(() =>
    import("../../pages/RegistrationPage/RegistrationPage")
);
const ContactsPage = lazy(() =>
    import("../../pages/ContactsPage/ContactsPage")
);

const App = () => {
    const dispatch = useDispatch();
    const isRefreshing = useSelector(selectIsRefreshing);

    useEffect(() => {
        dispatch(refreshUser());
    }, [dispatch]);

    return isRefreshing ? (
        <strong>Refreshing user...</strong>
    ) : (
        <>
            <Toaster position="top-right" reverseOrder={false} />
            <Suspense>
                <Layout>
                    <div className={style.section}>
                        <Routes>
                            <Route index element={<HomePage />} />
                            <Route
                                path="/register"
                                element={
                                    <RestrictedRoute
                                        redirectTo="/contacts"
                                        component={<RegistrationPage />}
                                    />
                                }
                            />
                            <Route
                                path="/login"
                                element={
                                    <RestrictedRoute
                                        redirectTo="/contacts"
                                        component={<LoginPage />}
                                    />
                                }
                            />
                            <Route
                                path="/contacts"
                                element={
                                    <PrivateRoute
                                        redirectTo="/login"
                                        component={<ContactsPage />}
                                    />
                                }
                            />
                            <Route path="*" element={<NotFoundPage />} />
                        </Routes>
                    </div>
                </Layout>
            </Suspense>
        </>
    );
};

export default App;