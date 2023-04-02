import * as React from 'react';
import {Card,Link,Divider} from '@mui/material';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import {Button} from '@mui/material';
import Fade from '@mui/material/Fade';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  borderRadius:4,
  boxShadow: 10,
  p: 10,
};

export default function RecipeReviewCard({news}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Card sx={{ maxWidth: 400 ,borderRadius: 2}}>
      <CardHeader
        title={news.author}
        subheader={news.publishedAt}
      />
      <CardMedia
        component="img"
        height="294"
        image={news.urlToImage}
        alt="Paella dish"
      />
      <CardContent >
      <Typography  sx={{margin:1}} variant="body2" color="text.secondary">
        {news.source.name}
        </Typography>
        <Typography sx={{margin:1}} variant="body1" color="text.secondary">
        {news.title}
        </Typography>
     
      </CardContent>
      <CardActions disableSpacing>
        <Button onClick={handleOpen}>Show Details</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <CardMedia sx={{
                marginBottom:'10px'}}
              component="img"
              height="294"
              image={news.urlToImage}
              alt="Paella dish"
              />
             <Typography sx={{marginBottom:'10px'}} id="transition-modal-title" variant="h6" component="h2">
               {news.description}
             </Typography>
             <Divider/>
             <Typography id="transition-modal-description" sx={{ mt: 2 }}>
               {news.content}
             </Typography>
            <Link variant='h6' href={news.url}>Read full article here</Link>
          </Box>
        </Fade>
      </Modal>
      </CardActions>
      </Card>
  );
}


