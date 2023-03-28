import { Stack, Container, Typography, Link } from '@mui/material';
import Input from "../input/Input"
import LoadButton from '../button/LoadButton';
const VerifyNumber = () => {

    return (
        <Stack spacing={5.5}>
            <Input placeholder='Mobile Number' type='text' />
            <LoadButton styles={{
                background: 'btn.background',
                text: 'btn.text',
                hoverBg: 'btn.hoverBg',
                hoverTxt: 'btn.hoverTxt',
                height: '48px'
            }}
                props={{ name: "Next" }} />
        </Stack>

    )
}

export default VerifyNumber;