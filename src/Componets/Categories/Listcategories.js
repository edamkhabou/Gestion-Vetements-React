import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

export default function Listcategories() {
  const[Listcate,setListcate]=useState([]) 
  useEffect(()=>{GetListCategories();  },[Listcate]); 
  const GetListCategories=async()=>{
    await
    axios.get("http://localhost:3000/categories").then((res)=>{
      setListcate(res.data);
    }).catch(function(error){
      console.log(error)
    })
  }
  
  const deleteArt=(id)=>{
    if (window.confirm("Voulez-vous supprimer cette catégorie ?") === true) {
    axios.delete("http://localhost:3000/categories/"+id).then((res)=>{console.log('successufully deleted!')
    GetListCategories();})
    .catch((error)=>{console.log(error)})
  }
}

  return (
    <div>
      <center><h1>List categories</h1></center>
      <Button variant="primary">{<Link to={"/Insertcategories"} style={{textDecoration:"none",color:"white"}}>Ajouter</Link>}</Button>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>Images</th>
          <th>Nom Categories</th>
          <th>Quantité Stock</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
      {
        Listcate.map((art,i)=>
          <tr key="i">
          <td height="100"><img src={art.photo} width="200" alt={art.id}/></td>
          <td height="100">{art.nomcategorie}</td>
          <td height="100">{art.qtestock}</td>
          <td><Button><Link exact to={`/Editcategories/${art.id}`}style={{ textDecoration: "none", color: "white" }}>Modifier</Link></Button> <Button variant="danger" onClick={()=>{deleteArt(art.id)}}>Supprimer</Button></td>
         
        </tr>
        )
      }
      </tbody>
      </Table>
    </div>
  )
}

