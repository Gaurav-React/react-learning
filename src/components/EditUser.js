import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
export default function EditUser() {
  const [SaveData, setSaveData] = useState({
    name:'',
    email:'',
    phone:'',
    address:{
        street:'',
        suite:'',
        city:'',
        zipcode:''
    },
  });
  const [SaveAdd, setSaveAdd] = useState("");
  const [state, setState] = useState();
  let navigate = useNavigate();
  let { id } = useParams();

  //console.log('http://localhost:3000/users/'+id+' ');
  useEffect(() => {
    axios
      .get("http://localhost:3000/users/" + id + "")
      .then((res) => {
        console.log(res.data);
        let key = { ...res.data };
        setSaveData(key);
        setSaveAdd({ ...key.address });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  function handleChange(evt) {
    const value = evt.target.value;
    setData({
        ...SaveData,
        [evt.target.name]: value,
      });
    //console.log(value);
  }
  function UpdateUser(){
    
  }
  return (
    <>
      <Container>
        {/* <div>{JSON.stringify(SaveAdd)}</div> */}
        <div className="card mt-3">
          <div className="card-body">
            <Row>
              <Col md={6}>
                <button
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  Back To Home
                </button>
              </Col>
              <Col md={12}>
                <form>
                  <Row>
                    <Col md={6} className="mt-3">
                      <div className="form-group">
                        <label>Name</label>
                        <input
                          type="text"
                          name="name"
                          className="form-control"
                          defaultValue={SaveData.name}
                          onChange={handleChange}
                        />
                      </div>
                    </Col>
                    <Col md={6} className="mt-3">
                      <div className="form-group">
                        <label>Email</label>
                        <input
                          type="email"
                          name="email"
                          defaultValue={SaveData.email}
                          className="form-control"
                          onChange={handleChange}
                        />
                      </div>
                    </Col>
                    <Col md={6} className="mt-3">
                      <div className="form-group">
                        <label>Phone</label>
                        <input
                          type="text"
                          name="phone"
                          defaultValue={SaveData.phone}
                          className="form-control"
                          onChange={handleChange}
                        />
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6} className="mt-3">
                      <div className="form-group">
                        <label>Street</label>
                        <input
                          type="text"
                          name="street"
                          className="form-control"
                          defaultValue={SaveAdd.street}
                          onChange={handleChange}
                        />
                      </div>
                    </Col>
                    <Col md={6} className="mt-3">
                      <div className="form-group">
                        <label>Suite</label>
                        <input
                          type="text"
                          name="suite"
                          className="form-control"
                          defaultValue={SaveAdd.suite}
                          onChange={handleChange}
                        />
                      </div>
                    </Col>
                    <Col md={6} className="mt-3">
                      <div className="form-group">
                        <label>city</label>
                        <input
                          type="text"
                          name="city"
                          className="form-control"
                          defaultValue={SaveAdd.street}
                          onChange={handleChange}
                        />
                      </div>
                    </Col>
                    <Col md={6} className="mt-3">
                      <div className="form-group">
                        <label>Zipcode</label>
                        <input
                          type="text"
                          name="zipcode"
                          className="form-control"
                          defaultValue={SaveAdd.zipcode}
                          onChange={handleChange}
                        />
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6}>
                      <div className="form-group">
                        <button
                          type="button"
                          className="btn btn-primary mt-3"
                          onClick={UpdateUser}
                        >
                          Submit
                        </button>
                      </div>
                    </Col>
                  </Row>
                </form>
              </Col>
            </Row>
          </div>
        </div>
      </Container>
    </>
  );
}
