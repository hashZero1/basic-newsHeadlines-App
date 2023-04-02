import React, {useState, useEffect } from 'react';
import axios from 'axios';
import NewsLayout from './NewsLayout';
import SearchAppBar from './Appbar';
import { Grid,Paper} from '@mui/material';
function NewsLetter() {
    const [newState, setState] =useState();
    useEffect(() => {
        async function getData() {
            const response = await axios.get('https://newsapi.org/v2/everything?domains=wsj.com&apiKey=9fcfe29cb7da42939d6ac3c7a92742a4');
            const data = response.data.articles;
            console.log(data);
            setState(data);
        }
        getData();
    }, [])
    return (
        <Paper sx={{ backgroundImage: `url(${Image})` }} style={{
            padding: 0,
            margin: 0,
            backgroundColor: "#fafafa"
        }}elevation ={0}>
            <SearchAppBar/>
            <Grid container  sx={{
                marginTop:'10px',
                padding:'10px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }} spacing={4}>
            {newState && newState.map((news) => (
                <Grid item >
                     <NewsLayout news={news}/>
                </Grid>
            ))}
            </Grid>
        </Paper>
    )
}

export default NewsLetter;

