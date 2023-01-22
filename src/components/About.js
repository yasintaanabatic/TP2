import React from 'react'
import logo from "./nctdream.png";
import { Card } from 'react-bootstrap';
function Home() {
  return (
    <div className="container">
      <div className="d-flex justify-content-center h-100">
        <Card style={{ width: '18rem'}}>
        <Card.Img variant="top" src={logo} />
        <Card.Body style={{backgroundColor:"white"}}>
        <Card.Title>Welcome!</Card.Title>
        <Card.Text>
          This is Cafe Dream Site<br/>
          Yasinta Amalia Bakti<br/>
          Nim : 2301966394<br/>
          <br/><br/><br/>
         <i className='fa fa-arrow-right'></i> More Info
        </Card.Text>
        </Card.Body>
        </Card>
      </div>            
    </div>
  )
}
export default Home