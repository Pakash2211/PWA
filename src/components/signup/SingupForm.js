import Input from "../input/Input"
import {Stack} from '@mui/material';
import LoadButton from "../button/LoadButton";
const SingupForm = () =>{

    return(
        <Stack spacing={5.5}>
          <Stack spacing={3}>
          <Input placeholder = 'First Name' type = 'text' />
          <Input placeholder = 'Last Name' type = 'text' />
          <Input placeholder = 'Email ID/Mobile Number' type = 'text' />
          <Input placeholder = 'Password' type = 'password' />
          <Input placeholder = 'Re-enter Password' type = 'password' />
         </Stack>
            <LoadButton styles = {{ background : 'btn.background' , 
                                   text : 'btn.text' , 
                                   hoverBg : 'btn.hoverBg' , 
                                   hoverTxt : 'btn.hoverTxt',
                                   height : '48px'
                                }} 
                         props = {{name : "Create"}} />
        </Stack>
        
    )
}

export default SingupForm;