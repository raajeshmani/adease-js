import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";

import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { selectSortIndex, fetchData } from './AdComponentSlice';
import { MediaComponent } from '../Media/MediaComponent';
import { fetchAdsAsync } from '../../features/advertisement/advertisementSlice';
import styles from '../commonComponent.module.css';
import { SortComponent } from '../Sort/SortComponent';


export function AdComponent() {
    const [loading, setLoading] = useState(false);
    const adData = useSelector(fetchData);
    const sortIndex = useSelector(selectSortIndex);
    const [value, setValue] = useState(adData?.value);
    const dispatch = useDispatch();
    let filteredVal = []

    const sorter = (index, value) => {
        switch (index) {
            case 0:
                value.sort((a,b) => (a.created_at > b.created_at) ? 1 : -1 )
                break;
            case 1:
                value.sort((a,b) => (a.updated_at > b.updated_at) ? 1 : -1 )
                break;
            case 2:
                value.sort((a,b) => (a.name > b.name) ? 1 : -1 )
                break;
            case 3:
                value.sort((a,b) => (a.headline > b.headline) ? 1 : -1 )
                break;
            default:
                break;
        }
        return value
    }

    useEffect(() => {
        setValue(adData?.value);
        setLoading(adData.status === 'loading')
    }, [adData])

    useEffect(() => {
        setValue(sorter(sortIndex, [...value]))
    }, [sortIndex])

    const filterAd = (option) => {
        if (adData.value.length > 0) {
            if (option === 'image') {
                filteredVal = adData.value.filter(ad => ad.type === 'IMAGE_AD');
            } else if (option === 'video') {
                filteredVal = adData.value.filter(ad => ad.type === 'VIDEO_AD');
            }
            setValue(filteredVal)
        }
    }

    return (
        <div className={styles.outer_advertisement}>
            <div className={styles.actions}>
                <ButtonGroup className={styles.button_group} disableElevation variant="contained">
                    <Link to="/"><Button onClick={() => { }} variant="outlined">Back</Button></Link>
                    <Button className={styles.button_custom} onClick={() => dispatch(fetchAdsAsync())} variant="outlined">Refresh</Button>
                </ButtonGroup>
                <div className={styles.spacer}></div>
                <ButtonGroup className={styles.button_group} disableElevation variant="contained">
                    <Button className={styles.button_custom} onClick={() => filterAd('image')} variant="outlined">Image</Button>
                    <Button className={styles.button_custom} onClick={() => filterAd('video')} variant="outlined">Video</Button>
                </ButtonGroup>
                <div className={styles.spacer}></div>
                <div className={styles.sorter}>
                    <SortComponent />
                </div>
            </div>
            <Grid className={styles.grid_options} container >
                {(loading ? Array.from(new Array(12)) : value).map((item, index) => (
                    <MediaComponent key={index} loading={loading} item={item} index={index} />
                ))}
            </Grid>
        </div>

    );
}