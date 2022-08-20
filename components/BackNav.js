import Nav from 'react-bootstrap/Nav'

const BackNav = () => {
  return (
    <Nav activeKey="/home">
      <Nav.Item>
        <Nav.Link href="/">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">About</Nav.Link>
      </Nav.Item>
    </Nav>
  )
}

export default BackNav
