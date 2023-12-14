import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { UploadFirebase } from '../../UploadFirebase';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
// import { getStorage } from 'firebase/storage';
import storage from '../../firebaseConfig';
//import API from '../Axios/Api';
export default function Editarticle() {
  const [nom_produit, setNom] = useState("");
  const [description, setDescription] = useState("");
  const [marque, setMarque] = useState("");
  const [prixVente, setPrixVente] = useState("");
  const [qtestock, setQtestock] = useState("");
  const [imageartpetitf, setImageartpetitf] = useState();
  const [file, setFile] = useState("");
  let navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    axios.get('http://localhost:3000/articles/' + id).then(res => {
      setNom(res.data.nom_produit);
      setDescription(res.data.description);
      setMarque(res.data.marque);
      setPrixVente(res.data.prix);
      setQtestock(res.data.qtestock);
      setImageartpetitf(res.data.imageartpetitf);
    })
  }, []);
  const handleSubmit = (event) => {
    event.preventDefault();
    const produitObject = {
      id: id,
      nom_produit: nom_produit,
      description: description,
      marque: marque,
      prix: prixVente,
      qtestock: qtestock,
      photo: imageartpetitf
    };
    axios.put('http://localhost:5000/articles/' + id, produitObject)
      .then(res => console.log(res.data));
    navigate("/Articles")

  }
  const handleUpload = () => {
    if (!file) {
      alert("Please upload an image first!");
    }
    resultHandleUpload(file);

  };
  const resultHandleUpload = async (file) => {

    try {

      const url = await UploadFirebase(file);
      console.log(url);
      setImageartpetitf(url);
    } catch (error) {
      console.log(error);
    }
  }
  const storageRef = ref(storage, `/files/${file.name}`);
  const uploadTask = uploadBytesResumable(storageRef, file);
  
  uploadTask.on(
    "state_changed",
    (snapshot) => {
    const percent = Math.round(
    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
    );
    console.log(percent);
    },
    (err) => console.log(err),
    () => {
    getDownloadURL(uploadTask.snapshot.ref).then((url) => {
    console.log(url);
    setImageartpetitf(url);
    });
    }
    ); 



return (
  <div>
 <h2>Modification d'un produit </h2>
 <Form onSubmit={handleSubmit}>
    <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Image d'Article</Form.Label>
        <Form.Control type="file" onChange={e=>setFile(e.target.files[0])}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Nom de l'Article</Form.Label>
        <Form.Control type="text" placeholder="Nom" value={nom_produit  } onChange={e => setNom(e.target.value)}/>
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
)
}