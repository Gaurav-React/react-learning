import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function DeleteUser() {
let navigate = useNavigate();
let { id } = useParams();
useEffect(() => {
axios
    .delete(`http://localhost:3000/users/${id}`)
    .then((res) => {
        navigate('/')
    })
    .catch((err) => {
    console.log(err);
    });
}, []);

  return (
    <div>DeleteUser</div>
  )
}
