import React from "react";
import { FaStar } from "react-icons/fa";

interface IProps {
  isEnable ? : boolean;
  currentRatings : number;
  setCurrentRatings ? : React.Dispatch<React.SetStateAction<number>>
}

const StarRating = ({ isEnable, currentRatings, setCurrentRatings} : IProps) => {
  const numbeArray = Array.from({ length: 5 });

  const onStarClicked = (index: number) => {
    if (!isEnable) return;
    if(setCurrentRatings){
      setCurrentRatings(index + 1);
    }

  };

  const cursorClass = isEnable ? "cursor-pointer" : "";
  const ratings = Math.floor(currentRatings);
  return (
    <div className="flex gap-1 items-center">
      {numbeArray?.map((value, index) => {
        if (index < ratings)
          return (
            <FaStar
              className={cursorClass}
              key={index}
              onClick={() => onStarClicked(index)}
              // color="orange"
              color="#F7DB32"
              size={isEnable? 18 : 14}
            />
          );
        return (
          <FaStar
            className={cursorClass + " text-[#dddddd]"}
            key={index}
            onClick={() => onStarClicked(index)}
            size={isEnable? 18 : 14}
          />
        );
      })}
    </div>
  );
};

export default StarRating;