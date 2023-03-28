import {Stack,} from "@mui/material";
import ProductSplide from "./ProductSplide";
import LoadButton from "../button/LoadButton";
const HomeProduct = ({name,comp}) => {

    return(
      <Stack >
           <Stack style = {{display : 'flex',flexDirection : 'row' , alignItems : 'center' , justifyContent : 'space-between'}}>
            <h2>{name}</h2>
            <Stack style = {{width : '100px',padding : '4px'}}>
               <LoadButton styles = {{ background : 'btn.secondaryBackground' , 
                                   text : 'btn.secondaryTxt' , 
                                   hoverBg : 'btn.hoverBg' , 
                                   hoverTxt : 'btn.hoverTxt',
                                   height : '25px'
                                }} 
                         props = {{name : "See All"}} />
               </Stack>
           </Stack>
           {comp}
      </Stack>
       
        
    )
    
}
    export default HomeProduct;