import ChipsSplide from '../../components/store/ChipsSplide'
import ProductsList from '../../components/product/ProductList'
import CardFollow from '../../components/store/CardFollow'
import StoreProfile from '../../components/store/StoreProfile'
import CategoryTitleBackButton from '../../components/category/CategoryTitleBackButton'
const SingleStore = () => {

    return (
        <> 
            <CategoryTitleBackButton title = "Trandly Store" />
            <StoreProfile />
            <CardFollow />
            <ChipsSplide />
            <ProductsList />
        </>

    )
}
export default SingleStore;