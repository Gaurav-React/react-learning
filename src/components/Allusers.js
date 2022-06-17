import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
export default function Allusers() {
  const [UserData, setUserData] = useState([]);
  const [status, setStatus] = useState(false);
  const [statusmsg, setStatusmsg] = useState('');
  const [success, setSucess] = useState(false);
  let navigate = useNavigate();
  useEffect(() => {
    axios.get("http://localhost:3000/users")
      .then((res) => {
        setUserData(res.data);
      })
      .catch((err) => {
        setStatusmsg(err)
        setStatus(true)
      });
  },[]);

function deleteusernew(id){
  //console.log(id);
  setStatusmsg('Record Delete Successfully')
  setStatus(true)
  setSucess(true)
  navigate(`/delete/${id}`)
}
  return (
    <Container>
      <Row>
        <Col md={9}>
        <div className="mt-3 mb-3"><h1>All users</h1></div>
        </Col>
        <Col md={3} >
        <button type="button" className="mt-3 mb-3 btn btn-primary float-end" onClick={() => navigate('/adduser')}>Add user</button>
        </Col>
        {
          status ?
        <Col md={12} >
          <div className={ success ? 'alert alert-success' : 'alert alert-danger'} role="alert">
          Error : {statusmsg}
          </div>
        </Col>
        : ''
        }
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
                UserData.map( (data,index) => (
                    <tr key={data.id}>
                        <td>{index+1}</td>
                        <td>{data.name}</td>
                        <td>{data.email}</td>
                        <td>{data.address.street}, {data.address.suite} <br />{data.address.city}, <br />{data.address.zipcode}</td>
                        <td>{data.phone}</td>
                        <td><button onClick={() => { navigate(`/edituser/${data.id}`); }} type="button" className="btn btn-secondary">Edit</button> | <button onClick={()=> deleteusernew(data.id)} type="button" className="btn btn-danger">Delete</button></td>
                    </tr>
                ))
            }
            <tr>
            </tr>
          </tbody>
        </Table>
      </Row>
    </Container>
  );
}
