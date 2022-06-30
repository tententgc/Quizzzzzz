import React from "react";
import styles from "../styles/Question.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
const Question = ({ ...props }) => {
  const questions = [
    { q: "Are you gay?" },
    { q: "Hello?" },
    { q: "Float" },
    { q: "1" },
  ];
  const [qNumber, setQNumber] = React.useState(0);
  const renderLeft = React.useMemo(
    () => (
      <div id="question" className="w-screen flex justify-center items-center">
        {questions[qNumber].q}
      </div>
    ),
    [qNumber]
  );
  const renderRight = React.useMemo(() => {
    if (qNumber == questions.length - 1) {
      return <div>You good at the Game, don't you</div>;
    }
    return (
      <div id="question" className="w-screen flex justify-center items-center">
        {questions[qNumber + 1].q}
      </div>
    );
  }, [qNumber]);

<<<<<<< HEAD

export const getStaticProps = async () => { 

    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();

    return { 
      props : { question : data }
    } 
}


const Question = ({question}) => {
  return (
     <div>
        
     </div>
  )
=======
  const handlePageChange = () => {
    document.querySelectorAll("#question").forEach((e) => {
      e.classList.add(styles.changeQuestion);
    });
    if (qNumber == questions.length) {
      handleEndQuiz();
      return;
    }
    setTimeout(() => {
      document.querySelectorAll("#question").forEach((e) => {
        setQNumber(qNumber + 1);
        e.classList.remove(styles.changeQuestion);
      });
    }, 1000);
  };

  const handleEndQuiz = () => {};
  return (
    <div className={styles.questionScreen} {...props}>
      <button
        onClick={() => handlePageChange()}
        className="absolute right-4 top-1/2 -translate-y-1/4"
      >
        <FontAwesomeIcon icon={faAngleRight} />
      </button>
      {renderLeft}
      {renderRight}
    </div>
  );
>>>>>>> upstream/main
};

export default Question;
