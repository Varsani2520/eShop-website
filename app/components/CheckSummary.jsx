"use client"
import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import { getContactAddress } from '@/app/service/contactAddress';
import { useDispatch, useSelector } from 'react-redux';
import { CardContent, CardHeader, CardMedia, Card, Container, Box } from '@mui/material';


export default function CheckSummary() {
  const dispatch = useDispatch()
  const [address, setAdress] = React.useState([])
  const tokens = useSelector((state) => state.auth.authUser.data.token)
  const carts = useSelector((state) => state.cart.cartItems);
  const [cart, setCart] = React.useState(0);
  const [totalQuantity, setTotalQuantity] = React.useState(0);
  const [totalPrice, setTotalPrice] = React.useState(0);
  const [paymentDetails, setPaymentDetails] = React.useState(null);
  async function getAddress() {
    const response = await getContactAddress(tokens)
    setAdress(response || [])
  }

  React.useEffect(() => {
    setCart(carts.length);
    getAddress()
    const totalQuantity = carts.reduce((acc, item) => acc + item.quantity, 0);
    const totalPrice = carts.reduce((acc, item) => acc + item.price * item.quantity, 0);

    setTotalQuantity(totalQuantity);
    setTotalPrice(totalPrice);
  }, [carts]);

  const handlePaymentSuccess = (details) => {
    console.log(details);
    setPaymentDetails(details)
  };
  return (
    <Container>
    <Box p={2}>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {carts.map((cart) => (
          <Card key={cart.id} sx={{marginBottom:2}}>

            <Grid container spacing={2} mt={5}>
              <Grid item xs={12} md={4}>
                <CardMedia
                  image={cart.img}
                  width={300}
                  height={140}
                  component="img"
                  alt="img"
                />
              </Grid>
              <Grid item xs={12} md={8}>
                <CardContent>
                  <CardHeader>Name:{cart.name}</CardHeader>
                  <ListItem sx={{ py: 1, px: 0 }}>

                    <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                      price:{cart.price}
                    </Typography>
                    <Typography variant="subtitle1">Quantity:{cart.quantity}</Typography>
                  </ListItem>
                </CardContent>
              </Grid>
            </Grid>
          </Card>
        ))}
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary={`Total Quantity: ${totalQuantity}`} />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            Total Price: ${totalPrice.toFixed(2)}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Address
          </Typography>
          {Array.isArray(address) && 
            address.map((result,index) => (
              <div key={index}>
                <Typography gutterBottom>{result.name}</Typography>
                <Typography gutterBottom>{result.house},{result.area},{result.city}</Typography>
                <Typography gutterBottom>{result.pin},{result.state}</Typography>
              </div>
            ))
          }

        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Payment details
          </Typography>
          <Grid container>
            {
              paymentDetails ? (
                <>
                  <Grid item xs={6}>
                    <Typography gutterBottom>{paymentDetails.cardType}</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography gutterBottom>{paymentDetails.cardHolder}</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography gutterBottom>{paymentDetails.cardNumber}</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography gutterBottom>{paymentDetails.expiryDate}</Typography>
                  </Grid>
                </>
              ) : (
                <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                  Payment details not available
                </Typography>
              )
            }



          </Grid>
        </Grid>
      </Grid>
    </Box>
    </Container>
  );
}