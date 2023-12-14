import React, { useState } from "react";
//import API from '../Axios/Api';
import {useNavigate} from "react-router-dom";
import { UploadFirebase } from "../../UploadFirebase";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
export default function AjoutProduits() {
const [description, setDescription] = useState("");
const [nom, setNom] = useState("");
const [marque, setMarque] = useState("");
const [prixVente, setPrixVente] = useState("");
const [qtestock, setQtestock] = useState("");
const [imageartpetitf, setImageartpetitf] = useState();
const [file, setFile] = useState("");
let navigate=useNavigate();
const handleSubmit = (event) => {
event.preventDefault();
const produitObject = {
nom_produit: nom,
description: description,
marque: marque,
qtestock: qtestock,
prix: prixVente,
photo: imageartpetitf
};
axios.post('http://localhost:3000/articles',produitObject )
.then(res => console.log(res.data));
navigate('/Articles')
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
    <h2>Ajout d'un Article </h2>
    <Form onSubmit={handleSubmit}>
    <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Image d'Article</Form.Label>
        <Form.Control type="file" onChange={e=>setFile(e.target.files[0])}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Nom de l'Article</Form.Label>
        <Form.Control type="text" placeholder="Nom" value={nom} onChange={e => setNom(e.target.value)}/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" placeholder="Description" value={description} onChange={e => setDescription(e.target.value)}/>
    </Form.Group>
   
    <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Marque d'Article</Form.Label>
        <Form.Control type="text" placeholder="Marque" value={marque} onChange={e => setMarque(e.target.value)}/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Prix de Vente d'Article</Form.Label>
        <Form.Control type="text" placeholder="Prix Vente" value={prixVente} onChange={e =>  setPrixVente(e.target.value)}/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Quantité de Stock d'Article</Form.Label>
        <Form.Control type="text" placeholder="Quantité de Stock" value={qtestock} onChange={e => setQtestock(e.target.value)}/>
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