import { Stack, Container, Typography, Link } from '@mui/material';


const CommonTitle = ({props}) =>{
    const textCol = {
        color: 'text.common',
        textAlign: 'center'
      }
    
    return(
          <Stack>
            <Typography variant="h4" sx={{ ...textCol, fontWeight: '500', marginBottom: '50px' }}>Welcome to tradly</Typography>
          <Typography variant='subtitle1' sx={{ ...textCol, marginBottom: '40px' }}>{props.subtitle}</Typography>
          </Stack>    
    )
}

export default CommonTitle;