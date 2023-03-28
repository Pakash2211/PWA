import { Stack, Container, Typography, Link } from '@mui/material';
import Input from '../components/input/Input'
import LoadButton from '../components/button/LoadButton'
import LetterAvatar from '../components/avatar/LetterAvatar'
import WishList from '../components/product/WishList'
import CartWidget from '../components/product/CartWidget'
import CustomizeLIcon from '../components/icons/CustomizeIcon'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import LoginForm from '../components/signin/LoginForm'
import CommonTitle from '../components/signin/CommonTitle'
import { useRouter } from 'next/router'
function login() {
 const router = useRouter();
  const loginStyle = {
    height: '100vh',
    backgroundColor: 'background.secondary',
  }
  const textCol = {
    color: 'text.common',
    textAlign: 'center'
  }
  const handleNavigate = (e) =>{
    e.preventDefault()
    router.push('/signup')
}

  return (
    <Stack sx={loginStyle}>
      <Stack sx={{
        width: '100%',
        maxWidth: 480,
        margin: 'auto'
      }}>
        <Container>
       < CommonTitle props = {{subtitle : 'Login to your account'}} />
          < LoginForm />
        </Container>
        <Typography variant="h6" sx={{ ...textCol, marginTop: '35px' }} >Forgot your password?</Typography>
        <Typography variant="h6" sx={{ ...textCol, marginTop: '35px' }}  >Don’t have an account? {' '}
        <Link sx={{ ...textCol, fontWeight: '600', cursor: 'pointer', fontSize: '17px' }} underline="hover" onClick = {handleNavigate}>Sign up</Link> </Typography>
      </Stack>
      {/* <CustomizeLIcon  icon = {<FavoriteBorderIcon sx = {{color : 'icon.primary' , opacity : '1'}}/>}/>
      <CustomizeLIcon  icon = {<ShareIcon sx = {{color : 'icon.primary'}}/>}/>
      <CustomizeLIcon  icon = {<KeyboardBackspaceIcon sx = {{color : 'icon.primary'}}/>}/>
      <CustomizeLIcon  icon = {<MoreVertIcon sx = {{color : 'icon.primary'}}/>}/> */}
    </Stack>
  );
}

export default login;
