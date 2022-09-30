import React from 'react';
import './QuestionCard,css'

const QuestionCard = () => {
    return (
        <div className="card_container grid sm:grid-cols-1 md:grid-cols-1 md:p-8 lg:grid-cols-2 xl:grid-cols-3 gap-5 mt-8 sm:mr-[60px]">
        <div className=" card card-compact bg-base-100 shadow-xl border-2 border-gray-800">
          <div className="card-body">
            <h2 className="card-title">how does react works ?</h2>
            <p>ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.</p>
          </div>
        </div>
        <div className="card card-compact bg-base-100 shadow-xl border-2 border-gray-800">
          <div className="card-body">
            <h2 className="card-title">Where else is useEffect used except for data load ?</h2>
            <p>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components. The this. setState property is used to update the state values in the component.</p>
          </div>
        </div>
        <div className="card card-compact bg-base-100 shadow-xl border-2 border-gray-800">
          <div className="card-body">
            <h2 className="card-title">how does react works</h2>
            <p>According to the official documentation, effects run after every completed render, but you can choose to fire them only when certain values have changed. This hook uses an array of "dependencies": variables or states that useEffect listen to for changes. When their values change, the main body of the useEffect hook is executed.</p>
          </div>
        </div>
      </div>
    );
};

export default QuestionCard;