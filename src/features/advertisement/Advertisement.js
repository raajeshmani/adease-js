import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Link } from "react-router-dom";

import { createAdsAsync, deleteAdsAsync, fetchAdsAsync, generateRandomAsync } from './advertisementSlice';
import styles from './Advertisement.module.css';

export function Advertisement() {
    const dispatch = useDispatch();
    const [createInput, setCreateInput] = useState([]);
    return (
        <>
            <div className={styles.col}>
                <>
                    <TextField
                        id="outlined-multiline-static"
                        label="Input for /create"
                        multiline
                        rows={4}
                        placeholder="Accepts an array of JSON objects"
                        onChange={(e) => setCreateInput(e.target.value)}
                    />
                </>
                <div className={styles.row}>
                    <Button onClick={() => dispatch(fetchAdsAsync())} variant="outlined">Fetch All Ads</Button>
                    <Button onClick={() => dispatch(generateRandomAsync())} variant="outlined">Populate Random data</Button>
                    <Button onClick={() => dispatch(createAdsAsync(createInput))} variant="outlined" disabled={createInput.length == 0 ? true : false} >Create ads</Button>
                    <Button onClick={() => dispatch(deleteAdsAsync())} variant="outlined">Delete ads</Button>
                </div>
                <>
                    <Link to="/ad"><Button onClick={() => dispatch(fetchAdsAsync())} variant="contained">Show me my Ads</Button></Link>
                </>

            </div>
        </>
    )
}