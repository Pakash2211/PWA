import VerifyNumber from '@/components/signup/VerifyNumber'
import { useRouter } from 'next/router'
import { Stack, Container, Typography, Link } from '@mui/material';
const verifynumber = () => {
    const router = useRouter()
    const verifyStyle = {
        height: '100vh',
        backgroundColor: 'background.secondary',
    }

    const textCol = {
        color: 'text.common',
        textAlign: 'center'
    }
    const handleNavigate = (e) => {
        e.preventDefault()
        router.push('/login')
    }

    return (
        <Stack sx={verifyStyle}>
            <Stack sx={{
                width: '100%',
                maxWidth: 480,
                margin: 'auto'
            }}>
                <Typography variant="h4" sx={{ ...textCol, fontWeight: '500', marginBottom: '30px' }}>Verify your phone number</Typography>
                <Typography variant='subtitle1' sx={{ ...textCol, marginBottom: '40px' }}> We have sent you an SMS with a code to enter number</Typography>
                <Container>
                    <VerifyNumber />
                </Container>
            </Stack>
        </Stack>

    )


}

export default verifynumber;