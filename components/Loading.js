import Spinner from 'react-bootstrap/Spinner'
const Loading = ({ status }) => {
  if (!status) {
    return null
  }

  return (
    <div
      style={{ display: 'flex', justifyContent: 'center', marginTop: '5px' }}
    >
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  )
}

export default Loading
