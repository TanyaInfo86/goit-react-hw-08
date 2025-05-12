import { useEffect, useState } from "react";
import style from "./NotFoundPage.module.css";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
    const [countdown, setCountdown] = useState(11);
    const navigate = useNavigate();

    useEffect(() => {
        const intervalId = setTimeout(() => {
            setCountdown((prev) => prev - 1);
        }, 1000);

        if (countdown === 1) {
            navigate("/");
        }

        return () => {
            clearTimeout(intervalId);
        };
    }, [countdown, navigate]);

    return (
        <div className={style.wrapper}>
            <div className={style.card}>
                <img
                    // src="https://i.imgur.com/A040Lxr.png"
                    alt="Space"
                    className={style.img}
                />
                <h3 className={style.title}>This Page is Lost in Space</h3>
                <p className={style.number}>
                    Return to the Home page in {countdown} seconds</p>
            </div>
        </div>
    );
};

export default NotFoundPage;