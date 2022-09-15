
import { shopData } from "./ShopData";
import ProductCard from "./ProductCard";
import { Box } from "@mui/material";

const Products = () => {
  return (
    <Box sx={{ background: "#ccc" }}>
      <Box>Products</Box>

      <Box>
        {shopData.map((data, index) => (
          <ProductCard key={index} {...data} />
        ))}
      </Box>
    </Box>
  );
};

export default Products;
