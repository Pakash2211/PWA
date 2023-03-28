import IconButton from '@mui/material/IconButton';


const CustomizeLIcon = ({icon}) =>{


      const styles = {
        width : '34px',
        height : '34px',
        margin : 'auto',
        display : 'flex',
        flexDirection : 'column',
        alignItem : 'center',
        justifyContent : 'center',
        padding : '17px',
        backdropFilter: "blur(3px)",
        backgroundColor:'rgba(256,256,256,0.3)'
      }
    return(
        <IconButton sx = {styles} >
            {icon}
        </IconButton>
    )
}

export default CustomizeLIcon;