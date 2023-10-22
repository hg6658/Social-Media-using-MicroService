import { Card, Avatar, Typography, CardMedia, CardContent, Button, TextField,CardHeader, Divider, ListItem,List } from '@material-ui/core';
import avatar from './media/avatar.jpeg';
import React from 'react';
import './post.css'



function Comments({comments}){
    if(comments.length){
        return (<List style={{alignSelf:'flex-start',width:'100%'}}>{comments.map(comment =>{
            return (<ListItem key={comment} style={{display: 'flex',padding: '0px',flexDirection:'column',margin: '5px',width: '100%'}}>
        <div style={{alignSelf:'flex-start',display:'flex',alignItems:'center',justifyContent: 'center'}}>
        <CardMedia
        image={avatar}
        title="Me"
        style={{width: '35px', height: '35px', margin:'8px', borderRadius:'50%'}}
      />
        <Typography component="div" style={{fontFamily:'Arial'}}>
                {comment}
        </Typography>
        </div>
        <Divider style={{ margin: '2px 0' , width: '100%', height:'1px'}}/>
        </ListItem>);
        })}</List>);
    }else{
        return(<div className="comment" style={{alignSelf:'flex-start',width:'100%',display:'flex',flexDirection:'column'}}>
        <Typography component="div" style={{fontFamily:'Arial',marginTop: '5px',marginBottom:'5px',marginLeft:'15px', alignSelf:'flex-start'}}>
                No Comments to display.
        </Typography>
        <Divider style={{ margin: '2px 0' , width: '100%', height:'1px'}}/>
        </div>
        );
    }
}

function Commentbar(){
    const [inputValue, setInputValue] = React.useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
      };
    
    return(
        <div className="commentBar" style={{width: '90%', padding: '15px', display: 'flex', alignItems:'center', justifyContent:'space-between'}}>
            <TextField
            label="Enter Comment"
            variant="outlined"
            value={inputValue}
            onChange={handleInputChange}
            InputProps={{ classes: { input: 'custom-text-field' } }}
            style={{width: '380px'}}
          />
          <Button size="medium" style={{ color: 'white', backgroundColor: 'purple', margin:'10px' }}>
            Comment
          </Button>
        </div>
    );
}

function Post({post}){
    return (
        <div className='post'>
      <Card style={{ width: '600px', border: '0.5px solid black',display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <CardHeader style={{height:'20px', textAlign: 'left', alignSelf: 'flex-start',margin: '5px'}}
            avatar={<Avatar src={avatar}/>}
            title="Harshit Gupta"
            subheader="Posted 5m ago"
          />
          <Divider style={{ margin: '2px 0' , width: '100%', height:'2px'}}/>

          <CardContent style={{width: '100%',display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <Typography gutterBottom variant="h5" component="div" style={{margin: '25px'}}>
                {post.title}
              </Typography>
              <Divider style={{ margin: '2px 0' , width: '100%', height:'2px'}}/>
              <Typography  variant="h6" component="div" style={{fontFamily:'Roboto',marginTop: '25px',marginBottom:'5px',marginLeft:'15px', alignSelf:'flex-start'}}>
                Comments...
              </Typography>
              <Divider style={{ margin: '2px 0' , width: '100%', height:'1px'}}/>
              <Comments comments={post.comments}/> 
              <Commentbar />             
          </CardContent>
      </Card>
    </div>
    );
}

export default Post;