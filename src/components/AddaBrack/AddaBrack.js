import "./AddaBrack.css";

const AddaBrack = ({ addToSeconds }) => {

  return (
    <div className="">
      <h1 className="text-xl my-6">Add a brack </h1>
      <div className="brack_secked_container flex justify-between flex-wrap items-center">
        <p className="item" onClick={addToSeconds}>
          <span>10</span>
          <sub>s</sub>
        </p>
        <p className="item" onClick={addToSeconds}>
          <span>20</span>
          <sub>s</sub>
        </p>
        <p className="item" onClick={addToSeconds}>
          <span>30</span>
          <sub>s</sub>
        </p>
        <p className="item" onClick={addToSeconds}>
          <span>40</span>
          <sub>s</sub>
        </p>
      </div>
    </div>
  );
};

export default AddaBrack;
