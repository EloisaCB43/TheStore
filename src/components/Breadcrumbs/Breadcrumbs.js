import React from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { Context } from "../../context/productContext";
import { useContext } from "react";
import { useLocation } from "react-router-dom";

export default function BasicBreadcrumbs() {
  const { product } = useContext(Context);
  const location = useLocation();

  return (
    <div role="presentation">
      <Breadcrumbs
        aria-label="breadcrumb"
        style={{ marginTop: "10px", textTransform: "capitalize" }}
      >
        {location.pathname !== "/" && (
          <Link underline="hover" color="inherit" href="/">
            Home
          </Link>
        )}
        {location.pathname.includes("product") && product && (
          <Link
            underline="hover"
            color="inherit"
            href={`/category/${product.category}`}
          >
            {product.category}
          </Link>
        )}
        {location.pathname.includes("product") && product && (
          <Typography color="text.primary">{product.name}</Typography>
        )}

        {location.pathname.includes("category") && (
          <>
            <Typography color="text.primary">
              {location.pathname.split("/")[2]}
            </Typography>
          </>
        )}
      </Breadcrumbs>
    </div>
  );
}
