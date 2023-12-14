import React, { useState } from "react";
//import API from '../Axios/Api';
import {useNavigate} from "react-router-dom";
import { UploadFirebase } from "../../UploadFirebase";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
export default function AjoutProduits() {

const [nom, setNom] = useState("");

const [imageartpetitf, setImageartpetitf] = useState();
const [file, setFile] = useState("");
let navigate=useNavigate();
const handleSubmit = (event) => {
event.preventDefault();
const produitObject = {
nomsouscategorie: nom,
photo: imageartpetitf
};
axios.post('http://localhost:3000/marque',produitObject )
.then(res => console.log(res.data));
navigate('/Marque')
}
const handleUpload = () => {
    if (!file) {
    alert("Please upload an image first!");
    }
    resultHandleUpload(file);
    };
    const resultHandleUpload = async(file) => {
    try {
    const url = await UploadFirebase(file);
    console.log(url);
    setImageartpetitf(url);
    } catch (error) {
    console.log(error);
    }
    }
    return (
    <div>
    <h2>Ajout une Marque </h2>
    <Form onSubmit={handleSubmit}>
    <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Image de Marque</Form.Label>
        <Form.Control type="file" onChange={e=>setFile(e.target.files[0])}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Nom du marque</Form.Label>
        <Form.Control type="text" placeholder="Nom" value={nom} onChange={e => setNom(e.target.value)}/>
    </Form.Group>
  
    <Button name="btnimag" type="button" onClick={handleUpload}> Upload to
    Firebase </Button>
    <Button type="submit">Submit</Button>
    <div>{imageartpetitf ?<img src={imageartpetitf} alt=""
    width="70"/>:null}</div>
    </Form>
    </div>
    );
    }