import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

export default function Listmarque() {
    const[Listmarque,setListmarque]=useState([])
    useEffect(()=>{
    axios.get("http://localhost:3000/marque").then((res)=>
    {
      setListmarque(res.data);
      console.log(Listmarque);
    }
    )
  } 
  );
  const GetListCategories=async()=>{
    await
    axios.get("http://localhost:3000/marque/").then((res)=>{
      setListmarque(res.data);
    }).catch(function(error){
      console.log(error)
    })
  }
  const handleDelete=(id)=>{
    if (window.confirm("Voulez-vous supprimer cette marque ?") === true) {
      axios.delete("http://localhost:3000/marque/"+id).then((res) => {
        console.log('successfully deleted!')
        GetListCategories();
    }).catch(err=>console.log(err))
    } 
  }
  return (
    <div>
      <div style={{padding:5,margin:5}}>
      <Button variant="primary">{<Link to={"/Insertmarque"} style={{textDecoration:"none",color:"white"}}>Ajouter</Link>}</Button>
      </div>
      <h1>Liste Marque</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>image marque</th>
            <th>Nom Marque</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            Listmarque.map((art,i)=>
            <tr key="i">
              <td ><img src={art.photo}width="100"alt={art.nomsouscategorie}/></td>
              <td>{art.nomsouscategorie}</td>
              <td><Button variant="primary"><Link exact to={`/Editmarque/${art.id}`}style={{ textDecoration: "none", color: "white" }} >modifier</Link></Button>
              <Button variant='danger'onClick={()=>{handleDelete(art.id)}} >Supprimer</Button></td>
              
            </tr>
            )
          }
        </tbody>
      </Table>
    </div>
  )
}