
import { useState } from "react";
const Sortings = () => {
    const [selected_sort_algo, setselected_sort_algo] = useState("sort")
  return (
    <div className="">
      {/* const [selected_sort_algo, setselected_sort_algo] = useState("none");
      <div className=" flex gap-2 text-center">
        {sort_algos.map((ele) => {
          return (
            <h2
              key={ele}
              onClick={() => {
                setselected_sort_algo(ele);
              }}
            >
              {ele}
            </h2>
          );
        })}
      </div> */}
      <div>
        <h1>The selected sorting algo is {selected_sort_algo}</h1>
      </div>
    </div>
  );
};

export default Sortings;
