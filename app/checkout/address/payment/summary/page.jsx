"use client"
import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import { getContactAddress } from '@/app/service/contactAddress';
import { useDispatch, useSelector } from 'react-redux';
import { CardContent, CardHeader, CardMedia, Card } from '@mui/material';
import { CardGiftcardRounded } from '@mui/icons-material';
import { CardExpiryElement } from '@stripe/react-stripe-js';

const payments = [
  { name: 'Card type', detail: 'Visa' },
  { name: 'Card holder', detail: 'Mr John Smith' },
  { name: 'Card number', detail: 'xxxx-xxxx-xxxx-1234' },
  { name: 'Expiry date', detail: '04/2024' },
];

export default function summary() {
  const dispatch = useDispatch()

  const [address, setAdress] = React.useState([])

  const tokens = useSelector((state) => state.auth.authUser.data.token)
  async function getAddress() {
    const response = await getContactAddress(tokens)
    setAdress(response)
    

  }
  const carts = useSelector((state) => state.cart.cartItems);


  const [cart, setCart] = React.useState(0);

  React.useEffect(() => {
    setCart(carts.length);
    getAddress()
  }, [carts]);

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {carts.map((cart) => (
          <Card key={cart.id}>

            <Grid container spacing={2} mt={5}>
              <Grid item xs={6} md={4}>
                <CardMedia
                  image={cart.img}
                  width={300}
                  height={140}
                  component="img"
                  alt="img"
                />
              </Grid>
              <Grid item xs={6} md={2}>
                <CardContent>
                <CardHeader>Name:{cart.name}</CardHeader>
                <ListItem sx={{ py: 1, px: 0 }}>
          
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
           {cart.price}
          </Typography>
        </ListItem>

                </CardContent>
              </Grid>
            </Grid>
          </Card>
        ))}
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            $34.06
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Address
          </Typography>
          {
            address.map((result) => (
              <>
                <Typography gutterBottom>{result.name}</Typography>
                <Typography gutterBottom>{result.house},{result.area},{result.city}</Typography>
                <Typography gutterBottom>{result.pin},{result.state}</Typography>
              </>
            ))
          }

        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Payment details
          </Typography>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}