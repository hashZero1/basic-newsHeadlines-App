import * as React from 'react';
import { Link, Divider} from '@mui/material';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function RecipeReviewCard({news}) {
  return (
    <>
      <CardMedia
           sx={{borderRadius: '5px'}}
        component="img"
        height="600"
        image={news.urlToImage}
        alt={news.urlToImage}
      />
      <CardHeader
        title={news.author}
        subheader={news.publishedAt}
      />
      <CardContent>
      <Typography variant="h6" color="text.secondary">
      {news.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Source: {news.source.name}
        </Typography>
      </CardContent>
      <Divider/>
        <CardContent>
          <Typography variant='h6' color="text.secondary" paragraph>Content</Typography>
          <Typography paragraph>
          {news.description}
          </Typography>
          <Typography paragraph>
          {news.content}
          </Typography>
          
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and
            peppers, and cook without stirring, until most of the liquid is absorbed,
            15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
            mussels, tucking them down into the rice, and cook again without
            stirring, until mussels have opened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don&apos;t open.)
          </Typography>
          <Link variant='h6' href={news.url}>Read full article here</Link>
        </CardContent>
     
    </>
         
  );
}
