import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
export default function Allusers() {
  const [UserData, setUserData] = useState([]);
  let navigate = useNavigate();
  useEffect(() => {
    axios.get("http://localhost:3000/users")
      .then((res) => {
        console.log(res.data);
        //console.log(...res.data, ...res.data.address)
        setUserData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },[]);

 function deleteuser(){

 }
 function viewuser(){

 }
  return (
    <Container>
      <Row>
        <div className="mt-3 mb-3">All users</div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Address</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
                UserData.map( data => (
                    <tr key={data.id}>
                        <td>{data.id}</td>
                        <td>{data.name}</td>
                        <td>{data.username}</td>
                        <td>{data.email}</td>
                        <td>{data.address.street}, {data.address.suite} <br />{data.address.city}, <br />{data.address.zipcode}</td>
                        <td>{data.phone}</td>
                        <td><button onClick={viewuser}>View</button> | <button onClick={() => { navigate('/edituser',{state : data.id } ); console.log(data.id)}}>Edit</button> | <button onClick={deleteuser}>Delete</button> </td>
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
