import CustomizedBadges from "../icons/CustomizedBadges";
import FavoriteIcon from '@mui/icons-material/Favorite';


const WishList = () => {
    return (
        <CustomizedBadges icon={<FavoriteIcon sx={{ color: 'icon.primary' }} />} productsCount={4}  path = '/wishlist'/>
    )
}

export default WishList;