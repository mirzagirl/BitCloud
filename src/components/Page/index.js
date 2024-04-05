import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { clearAllBodyScrollLocks } from "body-scroll-lock";
import styles from "./Page.module.sass";
import Header from "../Header";
import Footer from "../Footer";
import { useSelector } from "react-redux";
import ChatSupport from "../../screens/ChatSupport";

const Page = ({ headerHide, children, footerHide, headerWide }) => {
    const { pathname } = useLocation();
    const { chatOpen  } = useSelector(state=>state.settings)
    console.log("test      ",{chatOpen})
    useEffect(() => {
        window.scrollTo(0, 0);
        clearAllBodyScrollLocks();
    }, [pathname]);

    return (
        <>
            <div className={styles.page}>
                {!headerHide && <Header headerWide={headerWide} />}
                {chatOpen && <ChatSupport/>}
                <div className={styles.inner}>{children}</div>
                {!footerHide && <Footer />}
            </div>
        </>
    );
};

export default Page;
