import { list } from "../mocks/list";
import "./Body.css";
import { useState } from "react";

export default function Body() {
  const [sliceNum1, setSliceNum1] = useState(0);
  const [sliceNum2, setSliceNum2] = useState(3);

  const changePage = (num1, num2) => {
    setSliceNum1(num1);
    setSliceNum2(num2);
  };

  return (
    <div className="Body">
      <button onClick={() => changePage(3, 6)}>Mudar página</button>
      
      {list.slice(sliceNum1, sliceNum2).map((item) => {
        return (
          <div className="Body__card">
            <p className="id">id: {item.id}</p>
            <p className="Body__card__note">Nota: {item.note}</p>
            <p className="Body__card__priority">Prioridade: {item.priority}</p>
            <p className="Body__card__time">Tempo: {item.time}</p>
          </div>
        );
      })}
    </div>
  );
}
