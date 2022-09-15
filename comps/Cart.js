
import useShop from "./ShopContext";
import ProductCard from "./ProductCard";
import { Box, Typography } from "@mui/material";

const Cart = () => {
  const { products, total } = useShop();

  return (
    <Box>
      <Typography >Cart</Typography>

      <Box sx={{ background: '#4545' }}>
        {products.map((product, index) => (
          <ProductCard {...product} key={index} />
        ))}
      </Box>
      <Typography>Your cart total is R {total}.00</Typography>
    </Box>
  );
};

export default Cart;


