import Table from "react-bootstrap/Table";
import BackNav from "./BackNav";

const DataDisplay = ({ data }) => {
  return (
    <div className="container">
      <p>{data.student.name}</p>
    </div>
  );
};

export default DataDisplay;
