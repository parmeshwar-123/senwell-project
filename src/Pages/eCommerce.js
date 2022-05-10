import React from "react";

import "aos/dist/aos.css";
import { Container, Box, Typography } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import eCommerceImg from "../../images/eCommerce/ecommerceImg.png";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles((theme) => ({
  eCommerceWrapper: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column",
    },
  },
  eCommerseSellingParagraph: {
    maxWidth: "30rem",
    margin: "0 0 2rem 0",
  },
  eCommerImg: {
    width: "30rem",
    [theme.breakpoints.down("xs")]: {
      width: "20rem",
    },
  },
}));
const eCommerce = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const classes = useStyle();

  return (
    <>
      <Container maxWidth="lg" className={classes.eCommerceWrapper}>
        <Box>
          <img src="" alt="" className={classes.eCommerImg} />
        </Box>
        <Box>
          <h2>Start Selling Online</h2>
          <Typography className={classes.eCommerseSellingParagraph}>
            Launching an online store or eCommerce platform is the simplest step
            a business can take that is guaranteed to have a high ROI. Whether
            your ambitions are local or global — an online storefront is the
            easiest way to reach your clients directly and present your products
            to them in the best light. Building online retail solutions is the
            bread and butter of our eCommerce software development company.
            Senwell Solutions’s holistic approach ensures that your digital
            storefront will drive sales and turn visitors into buyers.
          </Typography>
          <Typography className={classes.eCommerseSellingParagraph}>
            Our designers will choose the perfect layout for your products. Our
            engineers will help you choose the ideal platform (Shopify,
            WooCommerce, Magento, nopCommerce). Finally, our QA team will make
            sure the performance of your store is flawless. Expanding to online
            sales is just one contact form away!
          </Typography>
        </Box>
      </Container>
    </>
  );
};

export default eCommerce;
