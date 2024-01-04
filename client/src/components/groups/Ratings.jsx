import Rating from "../basic/Rating";
import { IoIosStar } from "react-icons/io";
import { FaStarHalfAlt } from "react-icons/fa";

export default function Ratings() {
  return (
    <>
      <Rating Rating={IoIosStar} />
      <Rating Rating={IoIosStar} />
      <Rating Rating={IoIosStar} />
      <Rating Rating={IoIosStar} />
      <Rating Rating={FaStarHalfAlt} />
    </>
  );
}
