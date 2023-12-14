import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

export default function Listarticle() {
  const[Listarts,setListarts]=useState([]) 
  useEffect(()=>{GetListCategories();  },[Listarts]); 
  const GetListCategories=async()=>{
    await
    axios.get("http://localhost:3000/articles").then((res)=>{
      setListarts(res.data);
    }).catch(function(error){
      console.log(error)
    })
  }
  
  const deleteArt=(id)=>{
    if (window.confirm("Voulez-vous supprimer cette article ?") === true) {
    axios.delete("http://localhost:3000/articles/"+id).then((res)=>{console.log('successufully deleted!')
    GetListCategories();})
    .catch((error)=>{console.log(error)})
  }
}
  
  
  
  return (
    <div>
      <center><h1>List d'article</h1></center>
      <Button variant="primary">{<Link to={'/Insertarticle'} style={{textDecoration:"none",color:"white"}}>Ajouter</Link>}</Button>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>Image</th>
          <th>Product_name</th>
          <th>Description</th>
          <th>Marque</th>
          <th>Quantité Stock</th>
          <th>Prix de Vente</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
      {
        
        Listarts.map((art,i)=>
          <tr key="i">
          <td><img src={art.photo} width="100" alt={art.nom_produit}/></td>
          <td>{art.nom_produit}</td>
          <td>{art.description}</td>
          <td>{art.marque}</td>
          <td>{art.qtestock}</td>
          <td>{art.prix}</td>
          <td><Button><Link exact to={`/Editarticle/${art.id}`}style={{ textDecoration: "none", color: "white" }}>Modifier</Link></Button>
          <Button variant="danger" onClick={()=>{deleteArt(art.id)}}>Supprimer</Button></td>
          
        </tr>
        )
      }
      </tbody>
      </Table>
    </div>
  )
}
