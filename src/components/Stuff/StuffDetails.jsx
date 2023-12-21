import React, { useContext, useEffect } from 'react'
import { stuffContext } from '../../contexts/StuffContextProvider'
import { useNavigate, useParams } from 'react-router-dom'
import { Container } from '@mui/material'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const StuffDetails = () => {
const {getOneStuff, oneStuff} = useContext(stuffContext)
const {id} = useParams();
const navigate = useNavigate()

useEffect(()=>{
getOneStuff(id)
}, [id, getOneStuff]);
// + доп. айди и гет1стаф

  return (
    <div>
        <Button onClick={()=> navigate(-1)}>Go back</Button>
      <h2>Stuff Details</h2>
      <Container>
        {oneStuff ? (
            <Card sx={{ maxWidth: 545, marginBottom: '20px' }}>
            <CardMedia
              component="image"
              height="170"
              sx={{ objectFit: 'contain' }}
              image={oneStuff.image}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Title: {oneStuff.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Description: {oneStuff.description}
              </Typography>
            <Typography variant="body2" color="text.secondary">
                Price: {oneStuff.price}
              </Typography>
            <Typography variant="body2" color="text.secondary">
                Category: {oneStuff.category}
              </Typography>
            </CardContent>
          </Card>
        ) : null}
      </Container>
    </div>
  )
}

export default StuffDetails
// import React, { useContext, useEffect } from 'react';
// import { stuffContext } from '../../contexts/StuffContextProvider';
// import { useNavigate, useParams } from 'react-router-dom';
// import { Container, Card, CardContent, CardMedia, Button, Typography } from '@mui/material';

// const StuffDetails = () => {
//   const { getOneStuff, oneStuff } = useContext(stuffContext);
//   const { id } = useParams();
//   const navigate = useNavigate();

//   useEffect(() => {
//     getOneStuff(id);
//   }, [id, getOneStuff]); // Включаем id и getOneStuff в массив зависимостей

//   return (
//     <div>
//       <Button onClick={() => navigate(-1)}>Go back</Button>
//       <h2>Stuff Details</h2>
//       <Container>
//         {oneStuff && (
//           <Card sx={{ maxWidth: 545, marginBottom: '20px' }}>
//             <CardMedia
//               component="image"
//               height="170"
//               sx={{ objectFit: 'contain' }}
//               image={oneStuff.image}
//             />
//             <CardContent>
//               <Typography gutterBottom variant="h5" component="div">
//                 Title: {oneStuff.name}
//               </Typography>
//               <Typography variant="body2" color="text.secondary">
//                 Description: {oneStuff.description}
//               </Typography>
//               <Typography variant="body2" color="text.secondary">
//                 Price: {oneStuff.price}
//               </Typography>
//               <Typography variant="body2" color="text.secondary">
//                 Category: {oneStuff.category}
//               </Typography>
//             </CardContent>
//           </Card>
//         )}
//       </Container>
//     </div>
//   );
// };

// export default StuffDetails;
