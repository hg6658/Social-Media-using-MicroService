import { Card, CardActions, Typography, CardMedia, CardContent, Button, TextField } from '@material-ui/core';
import avatar from './media/avatar.jpeg';
import {useState} from 'react';
import axios from 'axios';
function User(){

    return(
      <Card  style={{ width: '300px',height: '60px',
       display: 'flex', margin:'10px',
       flexDirection:'row',alignItems:'center', justifyContent:'center' }} >
        <CardMedia
        image={avatar}
        title="Me"
        style={{width: '50px', height: '50px', borderRadius:'50%'}}
      />
      <CardContent>
        <Typography variant='h6'>
          Mr. Harshit Gupta
        </Typography>
        <Typography>
          Sr. Software Engineer
        </Typography>
      </CardContent>
      </Card>
    );

}

function Postform(){
    let [tweet, setTweet] = useState('');
    function changeTweet(e){
      e.preventDefault();
      setTweet(e.target.value);
    }

    async function pushTweet(e){
      try{
      e.preventDefault();
      await axios.post('http://localhost:4000/posts',{
        title: tweet
      })
      setTweet('');
      }catch(error){
        console.log(error.message);
      }
    }
    return (
      <div className='postForm'>
      <Card style={{ width: '600px', border: '0.5px solid black',display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <CardContent style={{width: '100%',display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <User />
          <Typography gutterBottom variant="h5" component="div" style={{margin: '10px'}}>
            What's on your mind?
          </Typography>
          <TextField
            id="outlined-multiline-flexible"
            label="Jot down your thoughts"
            multiline
            value = {tweet}
            onChange={changeTweet}
            minRows={4}
            maxRows={4}
            style={{ width: '90%', margin: '10px' }} // Set width to 100% and add some bottom margin
            variant="outlined"
          />
        </CardContent>
        <CardActions>
          <Button onClick={pushTweet} size="medium" style={{ color: 'white', backgroundColor: 'purple', margin:'10px' }}>
            Share
          </Button>
        </CardActions>
      </Card>
    </div>
      );
}


export default Postform;
