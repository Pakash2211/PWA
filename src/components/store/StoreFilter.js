import { Stack, CardMedia, Typography, CardHeader, Card } from '@mui/material';
import { Chip } from '@material-ui/core';
import { useState } from 'react';

const StoreFilter = ({name}) => {
    const [color, setColor] = useState(true);

    const styleChip = {
        color : '#919EAB',
        backgroundColor : '#FFFFFF',
        border : '1px solid #919EAB',
        boxShadow : '0'
    }

    const activeStyle = {
        color : '#FFFFFF',
        backgroundColor : '#33907C',
    }
    // const handleClick = () => {
    //     setChip(!chip)
    // };
    const handleClick = () => {
        setColor(!color);
    };
    return (
        <Stack>
            <Chip
                label={name}
                onClick={handleClick}
                style = {color ? {...styleChip} : {...activeStyle}}
                clickable
            />
        </Stack>

    )
}
export default StoreFilter;