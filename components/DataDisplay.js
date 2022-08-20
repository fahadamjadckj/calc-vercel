import { Typography } from '@mui/material'
import Table from 'react-bootstrap/Table'
import BackNav from './BackNav'

const DataDisplay = ({ data }) => {
  return (
    <div className="container">
      <BackNav></BackNav>
      <div className="resultTable">
        <div className="tableText">
          <h3>Collective</h3>
        </div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Reg Number</th>
              <th>CGPA</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{data.student.name}</td>
              <td>{data.student.ag}</td>
              <td>{data.student.cgpa}</td>
            </tr>
          </tbody>
        </Table>
      </div>

      <div className="resultTable">
        <div className="tableText">
          <h3>Semeset Viz</h3>
        </div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Names</th>
              <th>GPA</th>
            </tr>
            {data.student.semNames.map((sem) => (
              <tr>
                <th key={sem}>{sem}</th>
                <td key={sem + 1}>
                  {data[sem][data[sem].length - 1].gpa.toFixed(2)}
                </td>
              </tr>
            ))}
          </thead>
        </Table>
      </div>
    </div>
  )
}

export default DataDisplay
