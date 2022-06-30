import React from "react";


export const getStaticProps = async () => { 

    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();

    return { 
      props : { quiz : data }
    }


}
const Question = ({quiz}) => {
  console.log(quiz)
  return <div className="h-screen"> {quiz.name}</div>;
};

export default Question;
