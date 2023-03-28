import SingupForm from '@/components/signup/SingupForm'
import { Stack, Container, Typography,Link } from '@mui/material';
import CommonTitle from '@/components/signin/CommonTitle'
import { useRouter } from 'next/router'
const signup = () => {
    const router = useRouter()
    const singupStyle = {
        height: '100vh',
        backgroundColor: 'background.secondary',
    }

    const textCol = {
        color: 'text.common',
        textAlign: 'center'
    }
    const handleNavigate = (e) =>{
        e.preventDefault()
        router.push('/login')
    }
    return (
        <Stack sx={singupStyle}>
            <Stack sx={{
                width: '100%',
                maxWidth: 480,
                margin: 'auto'
            }}>
                <CommonTitle props={{ subtitle: 'Signup to your account' }} />
                <Container>
                    <SingupForm />
                </Container>
                {/* <a  underline="hover" >Sign in</a> */}
                <Typography variant="h6" sx={{ ...textCol, marginTop: '35px' }}  >Have an account ?  {' '}
                <Link sx={{ ...textCol, fontWeight: '600', cursor: 'pointer', fontSize: '17px' }} underline="hover" onClick = {handleNavigate}>Sign in</Link>
                </Typography>
              
            </Stack>
        </Stack>

    )
}

export default signup;