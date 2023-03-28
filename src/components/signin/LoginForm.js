import Input from "../input/Input"
import {Stack} from '@mui/material';
import LoadButton from "../button/LoadButton";
const LoginForm = () =>{

    return(
        <Stack spacing={5.5}>
          <Stack spacing={3}>
          <Input placeholder = 'Email/Mobile Number' type = 'text' />
          <Input placeholder = 'Password' type = 'password' />
         </Stack>
            <LoadButton styles = {{ background : 'btn.background' , 
                                   text : 'btn.text' , 
                                   hoverBg : 'btn.hoverBg' , 
                                   hoverTxt : 'btn.hoverTxt',
                                   height : '48px'
                                }} 
                         props = {{name : "Login"}} />
        </Stack>
        
    )
}

export default LoginForm;