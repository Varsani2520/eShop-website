"use client"
import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Grid from '@mui/material/Grid';
import { getContactAddress } from '@/app/service/contactAddress';
import { useDispatch, useSelector } from 'react-redux';
import { CardContent, CardHeader, CardMedia, Card, Container, Box, Button } from '@mui/material';
import { toast } from 'react-toastify';
import Toast from './Toast';
import 'react-toastify/dist/ReactToastify.css'
import { useRouter } from 'next/navigation';
import { summaryServices } from '../service/summary';
import { getServerSession } from 'next-auth';

export default function CheckSummary() {
  const router = useRouter()
  const dispatch = useDispatch()
  const [address, setAdress] = React.useState([])
  const tokens = useSelector((state) => state.auth.authUser.data.token)

  const paymentDetails = useSelector((state) => state.payment.paymentDetails)
  const [cartItem, setCart] = React.useState([]);
  const [totalQuantity, setTotalQuantity] = React.useState(0);
  const [totalPrice, setTotalPrice] = React.useState(0);
  const [summary, setSummary] = React.useState([])
  async function getAddress() {
    const response = await getContactAddress(tokens)
    setAdress(response || [])
  }
  async function Summaries() {
    try {
      const response = await summaryServices(tokens);
      console.log(response);
      setSummary(response);
    }
    catch (error) {
      console.log(error)
    }
  }
  React.useEffect(() => {
    // setCart(carts.length);
    getAddress()
    Summaries()
    // const totalQuantity = carts.reduce((acc, item) => acc + item.quantity, 0);
    // const totalPrice = carts.reduce((acc, item) => acc + item.price * item.quantity, 0);

    // setTotalQuantity(totalQuantity);
    // setTotalPrice(totalPrice);
  }, []);

  // function order() {
  //   const itemNames = carts.map((cart) => cart.name).join(', ');
  //   toast.success(`Order successful! Items: ${itemNames}`)
  //   dispatch(clearCart())
  //   dispatch({ type: 'CLEAR_PAYMENT_DETAILS' })
  //   dispatch(clearADress())
  //   router.push("/");

  // }
  return (
    <Container>
      <Toast />
      <Box p={2} mt={"5%"}>
        <Typography variant="h6" gutterBottom>
          Order summary
        </Typography>
        <List disablePadding>
          {
            summary.map((response) => {
              return (
                <>
                  {
                    response.data.map((singleSummary) => {
                      return (
                        <Card key={singleSummary.id} sx={{ marginBottom: 2 }}>
                          <Grid container spacing={2} mt={5}>
                            <Grid item xs={12} md={4}>
                              <CardMedia
                                image={singleSummary.img}
                                width={300}
                                height={140}
                                component="img"
                                alt="img"
                              />
                            </Grid>
                            <Grid item xs={12} md={8}>
                              <CardContent>
                                <CardHeader>Name:{singleSummary.name}</CardHeader>

                                <ListItem sx={{ py: 1, px: 0 }}>
                                  <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                                    price:{singleSummary.price}
                                  </Typography>

                                  <Typography variant="subtitle1">Quantity:{singleSummary.quantity}</Typography>
                                </ListItem>
                              </CardContent>
                            </Grid>
                          </Grid>
                        </Card>
                      )
                    })
                  }</>

              )
            })
          }



          < ListItem sx={{ py: 1, px: 0 }}>
            {/* <ListItemText primary={`Total Quantity: ${totalQuantity}`} /> */}
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
              address.map((result, index) => (
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
                      <Typography gutterBottom>cardType: {paymentDetails.card.brand}</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography gutterBottom>cardHolder: {paymentDetails.card.name}</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography gutterBottom>cardNumber:xxxx xxxx xxxx {paymentDetails.card.last4}</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography gutterBottom>expiryDate: {paymentDetails.card.exp_month},{paymentDetails.card.exp_year}</Typography>
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
        {/* <Button variant="contained" color="primary" sx={{ mt: 3 }} onClick={() => order()}>
          Confirm Order
        </Button> */}
      </Box>
    </Container >
  );
}