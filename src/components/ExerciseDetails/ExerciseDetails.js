import "./ExerciseDetails.css";

const ExerciseDetails = ({exercisSeconds , requiredTime}) => {


  return (
    <div>
      <h1 className="my-6 text-xl">Exercise Details</h1>
      <div className="exercise_time_container">
        <div className="exercise_time_wraper flex justify-between items-center flex-wrap">
          <p>Exercise time</p>
          <p  className="seconds"><span id="Exercise_seconds">{exercisSeconds}</span> seconds</p>
        </div>
        <div className="exercise_time_wraper flex justify-between items-center flex-wrap">
          <p>Break time</p>
          <p className="seconds"><span id="requiredTime">{requiredTime}</span> seconds</p>
        </div>
      </div>
    </div>
  );
};

export default ExerciseDetails;
