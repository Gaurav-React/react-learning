import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import ToggleButton from "react-toggle-button";

export default function Page6() {

  const [toggal, setToggal] = useState(false);
  const [conty, setListcountry] = useState(false);
  const [addconty, setAddcountry] = useState();
  const [state, setState] = useState(false);
  const [addstate, setAddstate] = useState();
  const [city, setCity] = useState();
  var datasss = {
    India: {
      Delhi: ["new Delhi", "North Delhi"],
      Kerala: ["Thiruvananthapuram", "Palakkad"],
      Goa: ["North Goa", "South Goa"],
    },
    Australia: {
      "South Australia": ["Dunstan", "Mitchell"],
      Victoria: ["Altona", "Euroa"],
    },
    Canada: {
      Alberta: ["Acadia", "Bighorn"],
      Columbia: ["Washington", ""],
    },
  };
  const cc = Object.keys(datasss);
  
  function countryfun (e){
    setAddstate('');
    handleChange1(e);
    setListcountry(true)
    //console.log(e.target.value);
    const ss = Object.keys(datasss[e.target.value]);
    setAddcountry(ss);
    //console.log(sc);
  }

  function statefun(e){
    handleChange1(e);
    setState(true)
    const sc = datasss[portalinfo.country][e.target.value];
    //console.log(sc);
    setAddstate(sc)
  }
  const navigate = useNavigate();
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    mobile: "",
    gender: "",
  });
  const [portalinfo, setPortalinfo] = useState({
    address: "",
    country: "",
    state: "",
    city: "",
    postalcode: "",
    check_address: false,
  });




  function handleChange(evt) {
    const value = evt.target.value;
    setData({
      ...data,
      [evt.target.name]: value,
    });
  }

  // const countySel = portalinfo.country;
  // const stateSel = portalinfo.state;
  // const districtSel = portalinfo.city;
  // const gg =[];
  // for (var country in stateObject) {
  //   const listcountry = gg.push(country);
  // }
  // console.log(gg);


  function handleChange1(evt) {
    //const value1 = evt.target.value;
    const value1 =
      evt.target.type === "checkbox" ? evt.target.checked : evt.target.value;
    setPortalinfo({
      ...portalinfo,
      [evt.target.name]: value1,
    });
  }

  function DataSubmit() {
    const JsonData = { basicinfo: data, postaladdress: portalinfo, toggaldata: toggal };
    //const JsonData1 = {'postaladdress' : portalinfo };
    const obj = JSON.stringify(JsonData);
    navigate("/fetchdata", { state: obj });
    //console.log(obj);
  }

  function DataToggal(value) {
    const vv = !toggal
    // console.log(value);
    if (value != vv) {
      setToggal(vv);
    }
    //console.log(vv);
    //   setPortalinfo(()=>{
    //     return{show_data:vv}
    // });
  }
  return (
    <>
      {/* {{listItems}} */}
      <Container>
        <Row>
          <div className="card">
            <div className="card-body">
              <Col md={12}>
                <h3>Basic Information</h3>
                <Row>
                  <Col md={6}>
                    <div className="form-group">
                      <label>First Name</label>
                      <input
                        type="text"
                        name="firstname"
                        className="form-control"
                        onChange={handleChange}
                      />
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="form-group">
                      <label>Last Name</label>
                      <input
                        type="text"
                        name="lastname"
                        className="form-control"
                        onChange={handleChange}
                      />
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="form-group mt-3">
                      <label>Email</label>
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        onChange={handleChange}
                      />
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="form-group mt-3">
                      <label>Mobile</label>
                      <input
                        type="text"
                        name="mobile"
                        className="form-control"
                        onChange={handleChange}
                      />
                    </div>
                  </Col>
                  <Col md={6} className="mt-2">
                    <span>Gender</span>
                    <div className="form-group d-flex align-items-center">
                      <label htmlFor="male" className="px-2">
                        Male
                      </label>
                      <input
                        type="radio"
                        id="male"
                        name="gender"
                        value="male"
                        checked={data.gender === "male"}
                        onChange={handleChange}
                      />
                      <br />
                      <label htmlFor="female" className="px-2">
                        Female
                      </label>
                      <input
                        type="radio"
                        id="female"
                        name="gender"
                        value="female"
                        checked={data.gender === "female"}
                        onChange={handleChange}
                      />
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col md={12}>
                <h3>Postal Address</h3>
                <Row>
                  <Col md={12}>
                    <div className="form-group mb-3">
                      <label>Flat / House Number</label>
                      <input
                        type="text"
                        name="address"
                        className="form-control"
                        onChange={handleChange1}
                      />
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className="form-group">
                      <label htmlFor="country" className="px-2">
                        Country
                      </label>
                      <select
                        name="country"
                        id="country"
                        value={data.country}
                        onChange={countryfun}
                      >
                        <option>Select Country</option>
                        {cc.map((v, i) => (
                          <option key={i} value={v}>{v}</option>
                        ))}

                      </select>
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className="form-group">
                      <label htmlFor="state" className="px-2">
                        State
                      </label>
                      <select
                        name="state"
                        id="state"
                        value={data.state}
                        // onChange={handleChange1}
                        onChange={statefun}
                      >
                        <option>Select State</option>
                        {
                          conty ?
                          addconty.map((v, i) => (
                            <option key={i} value={v}>{v}</option>
                          )) : ''
                        }
                      </select>
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className="form-group">
                      <label htmlFor="city" className="px-2">
                        City
                      </label>
                      <select
                        id="city"
                        name="city"
                        value={data.city}
                        onChange={handleChange1}
                      >
                        <option value="">Select City</option>  
                        {
                          state && addstate.length > 1 ?
                          addstate.map((v, i) => (
                            <option key={i} value={v}>{v}</option>
                          )) : ''
                        }                        

                      </select>
                    </div>
                  </Col>

                  <Col md={6}>
                    <div className="form-group mt-3" onChange={handleChange1}>
                      <label>Postal Code</label>
                      <input
                        type="text"
                        name="postalcode"
                        className="form-control"
                        onChange={handleChange1}
                      />
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="form-group mt-5">
                      <label className="px-2">
                        Is Correspondence Adrress is same as Postal Address
                      </label>
                      <input
                        type="checkbox"
                        name="check_address"
                        onChange={handleChange1}

                      />
                    </div>
                  </Col>
                  <Col md={12}>
                    <div className="form-group mt-3">
                      <ToggleButton
                        name="toggalbutton"
                        value={toggal}
                        onToggle={DataToggal}
                      />
                    </div>
                  </Col>
                </Row>
              </Col>
              <div className="form-group mt-2">
                <button
                  type="button"
                  className="btn btn-primary mt-2"
                  onClick={DataSubmit}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </>
  );
}
