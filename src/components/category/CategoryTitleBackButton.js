
import { IconButton, Stack, Typography } from "@mui/material";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useRouter } from 'next/router'
import {
    useMediaQuery,
} from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
const CategoryTitleBackButton = ({ title }) => {
    const router = useRouter()
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    return (
        <Stack sx={{    backgroundColor: 'background.secondary',width : '100%'}}>
            <Stack sx={{
                backgroundColor: 'background.secondary',
                color: 'text.common',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                // border : '1px solid red',
                padding: '8px 8px'
            }}>
                {/* <IconButton> */}
              {isMobile ? (<KeyboardBackspaceIcon onClick={() => router.back()} sx={{ cursor: 'pointer' }} />) : ('')}  
                {/* </IconButton> */}
                <Stack sx={{
                    width: '98%', display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>

                    <Typography variant='h4' sx={{ fontWeight: '700' }}>{title}</Typography>
                </Stack>
            </Stack>
        </Stack>
    )
}

export default CategoryTitleBackButton;