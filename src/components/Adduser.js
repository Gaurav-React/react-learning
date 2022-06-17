import React, { useState } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate, Link} from "react-router-dom";


export default function Adduser() {

    const [adddata, setAddData] = useState({
        name: "",
        email: "",
        phone: "",
        suite: "",
        city: "",
        street: "",
        zipcode: ""

      });
      const { name, email, phone, suite, city, street, zipcode } = adddata;
      let navigate = useNavigate();
    
      function handleChange(evt) {
        const value  = evt.target.value;
        //console.log(value);
        setAddData({
            ...adddata,
            [evt.target.name]: value,
          });
      }
    
      const onSubmit = async e => {
        e.preventDefault();
        //console.log(adddata.name+'--'+adddata.email);
        const data = {name:adddata.name,email:adddata.email,phone:adddata.phone,"address":{suite:adddata.suite,city:adddata.city,street:adddata.street,zipcode:adddata.zipcode}}
        //console.log(data);
        axios.post(`http://localhost:3000/users/`, data)
        navigate('/');
      };  

  return (
    <>
      <Container>
        <div className="card mt-3">
          <div className="card-body">
            <Row>
              <Col md={6}>
              <Link className="btn btn-primary" to="/">Back To Back</Link>
              </Col>
              <Col md={12}>
                <form onSubmit={(e) => onSubmit(e)}>
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
                        <button className="btn btn-primary mt-3">Submit</button>
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
