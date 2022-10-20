import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./redux/counterReducer";
import { IResponece } from "./interface";
import "./main.css";
import { Button, Dropdown } from "react-bootstrap";
import { useEffect } from "react";

// main function
const App = () => {
  const dispatch = useDispatch();

  // for get counterData
  const counterData = useSelector(
    (serialNumber: IResponece) => serialNumber.counter
  );

  // onClick function for decrement counter value
  const handleDecrement = () => {
    if (counterData == 0) {
      setInterval(() => {
        dispatch(decrement());
      }, 1000);
    }
    dispatch(decrement());
  };

  // onClick function for increment counter value
  const handleIncrement = () => {
    if (counterData == 20) {
      alert(`counter reaches ${counterData}`);
    }
    if (counterData == 0) {
      setInterval(() => {
        dispatch(increment());
      }, 1000);
    }
    dispatch(increment());
  };


  return (
    <>
      <div className="operation-button">
        <Button onClick={handleDecrement}>-</Button>
        <span className="counter-text">
          {counterData}
        </span>
        <Button variant="secondary" onClick={() => handleIncrement()}>
          +
        </Button>
      </div>
    </>
  );
};

export default App;
