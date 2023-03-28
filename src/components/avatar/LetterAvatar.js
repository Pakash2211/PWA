import Avatar from '@mui/material/Avatar';
import useAvatar from '../../hooks/useAvatar'

 const LetterAvatar = ({storeName , style}) => {
      let letter = useAvatar(storeName)
      const generateColor = (storeName) =>{
        
        // let codeASCI = storeName.toUpperCase().charCodeAt(1);
        // let codeASCI2 = storeName.charCodeAt(1);
        return `#33907C` 
      }
      const styles = {
        bgcolor: generateColor(storeName),
        height : style.height,
        width : style.width,
        fontSize : style.fontSize,
        position: style?.position,
        align: style?.align,
        '@media (max-width: 767px)': {
          height : style.smh,
          width : style.smw,
          fontSize :style.smf,
        },
        '@media (min-width: 768px) and (max-width: 991px)': {
          height : style.mdh,
          width : style.mdw,
          fontSize : style.mdf,
        },
        '@media (min-width: 992px)': {
          height : style.height,
          width : style.width,
          fontSize : style.fontSize,
        }
      }
    return(
        <Avatar sx={styles}>{letter}</Avatar>
    )
}

export default LetterAvatar;