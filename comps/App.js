
import Link from "next/link";
import { ShopProvider } from "./ShopContext";
import Products from "./Products";
import Cart from "./Cart";
import { Box, Typography } from "@mui/material";
import { color } from "@mui/system";

const App = () => {
  return (
    <ShopProvider >
      <Box display={'flex'} flexGrow={1} sx={{ background: '#111', color: '#FFf' }} height={100}>

        <Box >
          <Link href="/">Home</Link>
        </Box>
        <Box paddingLeft={6}>
          <Link href="./Cart">Cart</Link>
        </Box>
      </Box>
      <Box paddingLeft={6} display={'flex'} flexGrow={1}>
        <Products path="/" />
        <Box paddingLeft={50}> <Cart /></Box>
      </Box>

    </ShopProvider>
  );
};

export default App;
