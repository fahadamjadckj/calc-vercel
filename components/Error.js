const Error = ({ error }) => {
  if (!error) {
    return null
  }

  return (
    <div>
      <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>
    </div>
  )
}

export default Error
