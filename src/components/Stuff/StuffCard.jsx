import React, { useContext, useEffect } from 'react'
import { stuffContext } from '../../contexts/StuffContextProvider'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const StuffCard = () => {
const {stuff, getStuff, deleteStuff} = useContext(stuffContext);
useEffect(()=>{
    getStuff();
}, [getStuff]);

  return (
    <div>
      <h1 style={{margin: "30px 0"}}>Stuff Card</h1>
      {stuff.map((item, index)=> (
         <Card sx={{ maxWidth: 345, marginBottom: '20px' }} key={index}>
         <CardMedia
           sx={{ height: 140 }}
           image={item.image}
           title="green iguana"
         />
         <CardContent>
           <Typography gutterBottom variant="h5" component="div">
             {item.name}
           </Typography>
           <Typography variant="body2" color="text.secondary">
             {item.description}
           </Typography>
         </CardContent>
         <CardActions>
            <Link to={`detail/${item.id}`}>
           <Button style={{margin: '5px'}} size="small" variant='contained' color="secondary">Details</Button>
           </Link>
           <Link to={`edit/${item.id}`}>
           <Button style={{margin: '5px'}} size="small" variant='contained'>Edit</Button>
           </Link>
           <Button style={{margin: '5px'}} onClick={() => deleteStuff(item.id)} size="small" variant='contained' color='error'>Delete</Button>
         </CardActions>
       </Card>
      ))}
    </div>
  ) 
}

export default StuffCard