import "./ExerciseDetails.css";
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ExerciseDetails = ({exercisSeconds , requiredTime}) => {

  const notify = () => toast.success('🦄 Successful your message Wow so easy!!!', {
    theme:"dark",
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });
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

      <div className="mt-10 text-center">
        <button onClick={notify} className="bg-teal-600 hover:bg-teal-400 text-black  py-2 px-5 rounded-md font-semibold">Activity Completed</button>
        <ToastContainer/>
      </div>
    </div>
  );
};

export default ExerciseDetails;
