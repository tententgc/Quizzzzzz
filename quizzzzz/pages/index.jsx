import React, { useEffect } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import Question from "../components/Question";
import useScrollLock from "../hooks/useScrollLock";

// function disable() {
//   document.querySelector("body").classList.add("disable-scroll");
// }

// function enable() {
//   document.querySelector("body").classList.remove("disable-scroll");

//   window.scrollBy(0, window.innerHeight);
//   document.querySelector("bouncing")?.classList.add("");
// }

export default function Home() {
  const { lockScroll, unlockScroll } = useScrollLock();
  const [isScroll, setIsScroll] = React.useState(false);

  const showQuestion = () => {
    scrollTo(0, window.innerHeight);
    setIsScroll(true);
  };

  useEffect(() => {
    lockScroll();
  }, []);
  useEffect(() => {
    if (window.scrollY >= window.innerHeight) {
      setIsScroll(true);
    }
  }, [lockScroll]);
  return (
    // <React.Suspense fallback="loading">
    <div className={styles.container}>
      <Head>
        <title>Quizzzzz</title>
        <meta name="description" />
      </Head>
      <div>
        <main className={styles.main}>
          <div
            id="main"
            className="screen"
            style={{ flexDirection: "column", overflow: "hidden" }}
          >
            <span
              className="flex"
              style={{
                fontSize: "64px",
              }}
            >
              Welcome to Qu
              <span className="bouncing">
                <FontAwesomeIcon icon={faInfoCircle} />
              </span>
              zzzzzz
            </span>
            <div
              style={{
                fontSize: "12px",
                fontWeight: "400",
                alignSelf: "end",
              }}
            >
              Build by Floaty_KT
            </div>
          </div>
          <Question />
          <footer
            className="flex center"
            style={{
              position: "fixed",
              left: 0,
              right: 0,
              bottom: "20px",
            }}
          >
            {!isScroll && (
              <button
                className="bouncing"
                onClick={() => showQuestion()}
                style={{
                  backgroundColor: "transparent",
                  animationDelay: "0.5s",
                }}
              >
                Go to question
                <FontAwesomeIcon className="ml-2" icon={faAngleDown} />
              </button>
            )}
          </footer>
        </main>
      </div>
    </div>
    // </React.Suspense>
  );
}
