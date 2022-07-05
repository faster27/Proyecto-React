import React , { useState, useEffect } from 'react';
import { getChuckNorrisJoke } from '../../services/axiosService';
import Button from '@mui/material/Button';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';

const ChuckNorrisJokes = () => {

    const [joke, setJoke] = useState(null);
    const [likeJoke, setLikeJoke] = useState(0);
    const [dislikeJoke, setDislikeJoke] = useState(0);


    const obtainJoke = () => {
        getChuckNorrisJoke()
        .then((response) => {
                setJoke(response.data.value)
        })
        .catch((error) => {
            alert(`algo salio mal: ${error}`)
        })  
    }

    const likeThisJoke = () => {
        setLikeJoke(likeJoke + 1);
    }

    const dislikeThisJoke = () => {
        setDislikeJoke(dislikeJoke + 1);
    }

    return (
        <div>
            <div>
                <h2>{joke}</h2> 
            </div>
            <div>
                
                <Button variant="contained"
                    startIcon={<ThumbUpIcon></ThumbUpIcon>}  
                    style={{
                        borderRadius: 20,
                        backgroundColor: "green",
                        padding: "10px 10px",
                        fontSize: "12px"
                    }} 
                    onClick={likeThisJoke}>
                    I like this joke
                </Button>
                <Button variant="contained" 
                    style={{
                            borderRadius: 20,
                            backgroundColor: "blue",
                            padding: "10px 10px",
                            fontSize: "12px"
                        }}
                    onClick={obtainJoke}>
                    Generate a new joke
                </Button>
                <Button variant="contained"
                    startIcon={<ThumbDownIcon></ThumbDownIcon>} 
                    style={{
                            borderRadius: 20,
                            backgroundColor: "red",
                            padding: "10px 10px",
                            fontSize: "12px"
                        }}
                    onClick={dislikeThisJoke}>
                    I dislike this joke
                </Button>
            </div>
            <div>
                <h3>Jokes liked: {likeJoke}</h3>
                <h3>Jokes disliked: {dislikeJoke}</h3>
            </div>
        </div>
    );
}

export default ChuckNorrisJokes;
