import React, { useContext, useState } from 'react'
import { stuffContext } from '../../contexts/StuffContextProvider'
import { Button, Container, TextField } from '@mui/material';

const AddStuff = () => {
    const {addStuff} = useContext(stuffContext);
    
    //Логика для добавления
    const initStuff ={
    name: "",
    description: "",
    price: "",
    image: "",
    type: "",
    };

const [stuff, setStuff] = useState(initStuff);

function handleAddStuff(e) {
let obj = {
    ...stuff,
    [e.target.name]: e.target.value
}
setStuff(obj);
};

// 2) очистка инпутов
function saveStuff() {
    addStuff(stuff);
    setStuff({
        name: "",
    description: "",
    price: "",
    image: "",
    type: "",
    })
};

  return (
   <Container>
    <h2 style={{margin: "30px 0"}}>Страница для добавления продуктов</h2>
    <div style={{
        display: 'flex',
        margin: '50px auto',
        width: '40%',
        flexDirection: 'column'
    }}
    >
<TextField style={{margin: '10px 0'}} type='text' name='name' value={stuff.name} onChange={handleAddStuff} placeholder='name'/>
<TextField style={{margin: '10px 0'}} type='text' name='description' value={stuff.description} onChange={handleAddStuff} placeholder='description'/>
<TextField style={{margin: '10px 0'}} type='text' name='price' value={stuff.price} onChange={handleAddStuff} placeholder='price'/>
<TextField style={{margin: '10px 0'}} type='text' name='image' value={stuff.image} onChange={handleAddStuff} placeholder='image'/>
<TextField style={{margin: '10px 0'}} type='text' name='type' value={stuff.type} onChange={handleAddStuff} placeholder='type'/>

<Button variant='contained' onClick={saveStuff}>Add Stuff</Button>
    </div>
   </Container>
  )
}

export default AddStuff
