import React from 'react'; 

export const getStaticProps = async () => {

    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();

    return {
        props: { question: data }
    }
}


const Quiz1 = ({ quiz }) => {
    return <div className="h-screen"> Question</div>;
};

export default Quiz1;