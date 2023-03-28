import { Stack, CardMedia, Typography, CardHeader, Card,Button } from "@mui/material";
import useNumber from "@/hooks/useNumber";
const HistoryCard = () => {
    const { fCurrency } = useNumber()
    const stylesBtn = {
        "&.MuiButton-root": {
          border: "none",
          backgroundColor :'btn.background',
          textTransform : 'capitalize',
          color : 'btn.secondaryBackground' ,
          borderRadius : "24px",
          height : '20px',
          border : '1px solid #33907C',
          padding : '5px 25px'
        },
        "&.MuiButton-outlined": {
          color: "red"
        },
    //     "&.MuiButton-root:hover": {
    //         background : styles.hoverBg,
    //         color : styles.hoverTxt   
    //   }s
    }
    return (
        <Card sx={{ marginBottom: '15px',boxShadow : '0',borderRadius : '0' ,padding : '15px',display : 'flex' , flexDirection : 'row' , alignItems : 'center',justifyContent : 'space-between'}}>
            <Stack sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>

                <CardMedia
                    component="img"
                    image="https://b.zmtcdn.com/data/pictures/chains/0/19229530/8309511541ed930ef6d882c30b5fcdc5.jpg?fit=around|300:273&crop=300:273;*,*"
                    alt="Paella dish"
                    sx={{ width: '20%', borderRadius: '5px', marginRight: '10px' }}
                />
                <Stack sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingLeft: '20px' }}>
                    <Typography variant="h5" >
                        Pizza
                    </Typography>
                    <Typography variant="h5" sx={{ color: 'text.colored', fontWeight: '600' }}>
                        {fCurrency(50)}   &nbsp;  &nbsp;

                        <Typography component="span"
                            variant="body1"
                            sx={{
                                color: 'text.disabled',
                            }}>
                            <Typography
                                component="span"
                                variant="body1"
                                sx={{
                                    color: 'text.disabled',
                                    textDecoration: 'line-through',
                                }}
                            >
                                {fCurrency(60)}
                            </Typography>
                            &nbsp; 50% off
                        </Typography>
                    </Typography>
                </Stack>
            </Stack>
            <Button sx= {stylesBtn}>Delivered</Button>
        </Card>
    )
}

export default HistoryCard;