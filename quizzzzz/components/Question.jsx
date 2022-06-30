import React from "react";


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
};

export default Question;
