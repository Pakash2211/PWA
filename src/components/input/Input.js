import TextField from '@mui/material/TextField';

const Input = ({placeholder,type}) =>{
    const styles= {
        "& .MuiOutlinedInput-root:hover": {
          "& > fieldset": {
            borderColor: "input.hover.border", //hover
          }
        },
        "& .MuiOutlinedInput-root.Mui-focused": {
            "& > fieldset": {
              borderColor: "input.focus.border", //focus
            }
          },
          "& .MuiOutlinedInput-root" : {
             borderRadius : '24px', // root
             color : 'input.common.text',
             height : '48px'
          },
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: "input.common.border" // common
          }
    }
    return(
        <TextField id="outlined-basic"
        variant="outlined" 
        sx={styles} 
        placeholder = {placeholder}
        type = {type}
        inputProps={{
            autoComplete: 'off'
         }}
        />
    )
}


export default Input;