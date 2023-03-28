import Button from '@mui/material/Button';

const LoadButton = ({styles,props}) => {
    const stylesBtn = {
        "&.MuiButton-root": {
          border: "none",
          backgroundColor : styles.background,
          textTransform : 'capitalize',
          color :  styles.text,
          borderRadius : "24px",
          height : styles.height
        },
        "&.MuiButton-outlined": {
          color: "none",
        
        },
        "&.MuiButton-root:hover": {
            background : styles.hoverBg,
            color : styles.hoverTxt   
      }
    }
    return (
        <Button
            size="medium"
            variant="filled"
            sx = {stylesBtn}
        > {props.name} </Button>
    )
}

export default LoadButton;