import { Typography,Box, TextField, Button, Paper, Avatar } from '@mui/material'

import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { commentPost } from '../../actions/posts';

const CommentSection = ({post}) => {
    const c=[...(post?.comments)].reverse()
    const [comments,setComments]=useState(c);
    const [comment,setComment]=useState([]);
    const user =JSON.parse(localStorage.getItem('profile'));
    const dispatch = useDispatch();

    const handleClick = async() => {
        
        const date= (new Date().toLocaleDateString())
        const finalComment=`${user.result.name}: ${comment} :${date}`
        const newComments= await dispatch(commentPost(finalComment,post._id))
        const d= [...newComments].reverse()
        setComments(d);
        setComment('');
    }
  return (
    <Box sx={{mt:'40px'}}>
    <Paper sx={{p:'12px'}}>
    
    <Typography variant='h6' sx={{color:"#46364a" ,fontWeight:"bold"}}> Comment Section</Typography>
    <Box  sx={{mb:'40px'}}>
    {comments.map((c,i)=>(
        <Box key={i}>
            <Box sx={{display:'flex' ,alignItems:"center",justifyContent:"space-between" ,p:"10px",maxWidth:"400px" }}>
                <Box sx={{display:'flex' ,alignItems:"center" ,justifyContent:"flex-start"}}>
                    <Avatar sx={{backgroundColor:"#F4511E"}} alt={post.name} src={post.picture}>
                    <Typography variant='body1' >{post.name.charAt(0)}</Typography>
                    </Avatar>
                    <Typography variant='body1' sx={{ml:"9px" ,fontWeight:'bold',color:'#6b7688'}}>{post.name}</Typography>
                </Box>
                <Box sx={{display:'flex' ,alignItems:"center" ,justifyContent:"flex-end"}}>
                <Typography align='right'>{c.split(':')[2]}</Typography>
                </Box>  
            </Box>
            <Box sx={{pl:"40px" ,color:"#6b7688"}}><Typography  gutterBottom variant="body1" key={i} >{c.split(':')[1]}    </Typography></Box>
            
      
        </Box>

    ))}
    </Box>

    {user?.result?.name
        ?(<Box>
        <Typography sx={{mb:"20px"}}>Write a comment </Typography>
        <TextField 
            fullWidth
            rows={4}
            label="comment"
            multiline
            value={comment}
            onChange={(e)=>setComment(e.target.value)}
        />
        <Button 
        sx={{mt:"20px"}}
        disabled={!comment}
        variant="contained"
        onClick={handleClick}
        
        > comment</Button>
    </Box>):<Box><Typography>Please login to post comments</Typography></Box>}
    
    </Paper>
    </Box>
  )
}

export default CommentSection