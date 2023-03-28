import CustomizedBadges from "../icons/CustomizedBadges";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const CartWidget = () => {
  

  return (
    <CustomizedBadges icon={<ShoppingCartIcon sx={{ color: 'icon.primary' }} />}
      productsCount={4}  path = '/mycart'/>
  )
}

export default CartWidget;