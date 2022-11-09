import * as React from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { Context } from "../../context/productContext";
import { useContext } from "react";

export default function BasicBreadcrumbs() {
  const { product } = useContext(Context);

  return (
    <div role="presentation">
      <Breadcrumbs aria-label="breadcrumb">
        {window.location.pathname !== "/" && (
          <Link underline="hover" color="inherit" href="/">
            Home
          </Link>
        )}
        {product && (
          <Link
            underline="hover"
            color="inherit"
            href={`/category/${product.category}`}
          >
            {product.category}
          </Link>
        )}
        {product && window.location.pathname.includes("product") && (
          <Typography color="text.primary">{product.name}</Typography>
        )}
      </Breadcrumbs>
    </div>
  );
}
