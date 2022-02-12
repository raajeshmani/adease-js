import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';

import styles from '../commonComponent.module.css';


export function MediaComponent(props) {
    const { item, index } = props;

    return (
        <Box key={index} sx={{ width: 330, marginRight: 2.5, my: 5 }}>
            {item ? (
                <a href={item.destination_url} target="_blank">
                    <img
                        style={{ width: 330, height: 190 }}
                        alt={item.title}
                        src={item.content_url}
                    />
                </a>
            ) : (
                <Skeleton variant="rectangular" width={330} height={190} />
            )}

            {item ? (
                <Box className={styles.subtext} sx={{ pr: 2, width: 330 }} >
                    <Typography gutterBottom variant="body2">
                        {item.headline}
                    </Typography>
                    <Typography display="block" variant="caption" color="text.secondary">
                        {item.primary_text}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                        {`${item.type} • ${item.created_at}`}
                    </Typography>
                </Box>
            ) : (
                <Box sx={{ pt: 0.5 }}>
                    <Skeleton />
                    <Skeleton width="60%" />
                </Box>
            )}
        </Box>
    );
}
