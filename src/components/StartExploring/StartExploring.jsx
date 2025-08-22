import "./StartExploring.css";
import { TbMovie } from "react-icons/tb";

export default function StartExploring() {
  return (
    <div className="start-exploring">
      <TbMovie size={"120px"} />
      <h2 className="start-exploring__title">Start exploring</h2>
    </div>
  );
}
