import React, { useContext, useEffect, useState } from 'react'
import { stuffContext } from '../../contexts/StuffContextProvider'
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Container } from '@mui/material';
import { TextField } from '@mui/material';


const EditStuff = () => {
const {saveEditedStuff, getOneStuff, oneStuff} = useContext(stuffContext);

const navigate = useNavigate()

const {id} = useParams();

const [stuffToEdit, setStuffToEdit] = useState(oneStuff);

useEffect(() => {
    getOneStuff(id);
    setStuffToEdit(oneStuff);
}, [getOneStuff, id, oneStuff]); // Включите зависимости в массив

useEffect(() => {
    setStuffToEdit(oneStuff);
}, [id, oneStuff]);


const handleInp = (e) => {
    if(e.target.name === 'price'){
        let obj = {
            ...stuffToEdit,
            [e.target.name]:  (e.target.value),
        }
        setStuffToEdit(obj)
    } else {
        let obj = {
            ...stuffToEdit,
            [e.target.name]: e.target.value,
        };
        setStuffToEdit(obj)
    }
}

  return (
    <Container>
        <h1>Edited Stuff</h1>
        {stuffToEdit? (
 <div style={{
    display: 'flex',
    margin: '50px auto',
    width: '40%',
    flexDirection: 'column'
}}
>
<TextField style={{margin: '10px 0'}} type='text' name='name' value={stuffToEdit.name} onChange={handleInp} placeholder='name'/>
<TextField style={{margin: '10px 0'}} type='text' name='description' value={stuffToEdit.description} onChange={handleInp} placeholder='description'/>
<TextField style={{margin: '10px 0'}} type='text' name='price' value={stuffToEdit.price} onChange={handleInp} placeholder='price'/>
<TextField style={{margin: '10px 0'}} type='text' name='image' value={stuffToEdit.image} onChange={handleInp} placeholder='image'/>
<TextField style={{margin: '10px 0'}} type='text' name='type' value={stuffToEdit.type} onChange={handleInp} placeholder='type'/>

<Button variant='contained' onClick={()=> { saveEditedStuff(stuffToEdit);
navigate('/');
}}>Save Edited Stuff</Button>
</div>
        ) : null}
     
    </Container>
   
  )
}

export default EditStuff
