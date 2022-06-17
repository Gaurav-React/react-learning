import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate, useParams, Link } from "react-router-dom";
export default function EditUser() {

  const [userdata, setSaveData] = useState({
    name: "",
    email: "",
    phone: "",
    suite: "",
    city: "",
    street: "",
    zipcode: ""
  });   

  const { name, email, phone, suite, city, street, zipcode } = userdata;
  //const { suite, city, street, zipcode } = SaveAddress;

  let navigate = useNavigate();
  let { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/users/${id}`)
      .then((res) => {
        //console.log(res.data);
        let key = { ...res.data};
        delete key.address
        let key1 = {...res.data.address};
        setSaveData({name:key.name,email:key.email,phone:key.phone,suite:key1.suite,city:key1.city,street:key1.street,zipcode:key1.zipcode})

      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  
  function handleChange(evt) {
    const value = evt.target.value;
    setSaveData({
        ...userdata,
        [evt.target.name]: value,
      });
  }

  const onSubmit = async e => {
    e.preventDefault();
    const data = {name:userdata.name,email:userdata.email,phone:userdata.phone,"address":{suite:userdata.suite,city:userdata.city,street:userdata.street,zipcode:userdata.zipcode}}
    axios.put(`http://localhost:3000/users/${id}`, data)
    navigate('/');
  };

  return (
    <>
      <Container>
        {/* <div>{JSON.stringify(SaveAdd)}</div> */}
        <div className="card mt-3">
          <div className="card-body">
            <Row>
              <Col md={6}>
                <Link className="btn btn-primary" to="/">Back To Home</Link>
              </Col>
              <Col md={12}>
                <form onSubmit={e => onSubmit(e)}>
                  <Row>
                    <Col md={6} className="mt-3">
                      <div className="form-group">
                        <label>Name</label>
                        <input
                          type="text"
                          name="name"
                          className="form-control"
                          value={name}
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
                          value={email}
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
                          value={phone}
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
                          value={street}
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
                          value={suite}
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
                          value={city}
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
                          value={zipcode}
                          onChange={handleChange}
                        />
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6}>
                      <div className="form-group">
                        <button
                          
                          className="btn btn-primary mt-3"
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
