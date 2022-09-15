import { Box, Button, Typography } from "@mui/material";
import { useState, useEffect } from "react";

import useShop from "./ShopContext";

const ProductCard = ({ name, imageUrl, price }) => {
  const { products, addToCart, removeFromCart } = useShop();
  const [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
    const productIsInCart = products.find((product) => product.name === name);

    if (productIsInCart) {
      setIsInCart(true);
    } else {
      setIsInCart(false);
    }
  }, [products, name]);

  const handleClick = () => {
    const product = { name, imageUrl, price };

    if (isInCart) {
      removeFromCart(product);
    } else {
      addToCart(product);
    }
  };

  return (
    <Box sx={{background:'#5986'}}>
      <Box component={'img'} src={imageUrl} height={100} width={100} />
      <Button onClick={handleClick} isInCart={isInCart}>
        <p>{isInCart ? "-" : "+"}</p>
      </Button>
      <Box>
        <Typography>{name}</Typography>
        <Typography>R{price}.00</Typography>
      </Box>
    </Box>
  );
};

export default ProductCard;

