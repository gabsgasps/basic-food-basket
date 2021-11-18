import { Grid, Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { useState } from "react";
import ProductItem from "../../components/ProductItem/ProductItem";
import DATA from "../../DATA.const";
import { ProductItemType } from "../../types/product-item.type";
import * as S from "./styles";

let lastIndex: null | number = null;
const randomItem: (array: Array<any>) => any = (array: Array<any>) => {
  const index: number = Math.floor(Math.random() * array.length);
  if (array.length === 0) {
    return null;
  }

  if (array.length === 1) {
    return array[0];
  }

  if (lastIndex === index) {
    return randomItem(array);
  }

  lastIndex = index;
  return array[index];
};

const Home = () => {
  const [products, setProducts] = useState<Array<ProductItemType>>(DATA);
  const [productsSaved, setProductsSaved] = useState<Array<ProductItemType>>(
    []
  );
  const [currentProduct, setCurrentProduct] = useState({} as ProductItemType);

  const generateItem = () => {
    const productsUnused: Array<ProductItemType> = products.filter(
      ({ isUsing }) => !isUsing
    );
    if (productsUnused?.length) {
      const productUnused: ProductItemType = randomItem(productsUnused);
      setCurrentProduct(productUnused);
    }
  };

  const confirmItem = () => {
    products.forEach((p) => {
      if (JSON.stringify(currentProduct) === JSON.stringify(p)) {
        p.isUsing = true;
        setCurrentProduct({} as ProductItemType);
        productsSaved.push(p);
      }
    });
  };

  return (
    <>
      <S.SContainer maxWidth="sm">
        <S.InnerWrapper>
          <Typography
            variant="h3"
            component="h1"
            style={{ marginBottom: "1rem" }}
          >
            Gerar item de uma cesta:
          </Typography>

          {products.filter(({ isUsing }) => !isUsing)?.length ? (
            <Button onClick={generateItem} disableElevation variant="contained">
              Gerar item
            </Button>
          ) : (
            <Button disabled={true} disableElevation variant="contained">
              Não é possível mais gerar item
            </Button>
          )}

          {currentProduct?.name && (
            <Button
              style={{ marginLeft: ".5rem" }}
              onClick={confirmItem}
              disableElevation
              variant="contained"
            >
              Confirmar item
            </Button>
          )}
        </S.InnerWrapper>

        {currentProduct?.name && (
          <Grid item xs={6} xl={3}>
            <ProductItem
              isUsing={false}
              quantity={currentProduct.quantity}
              name={currentProduct.name}
            />
          </Grid>
        )}

        {/* <Typography variant="h6" component="h2">
          Itens de uma cesta:
        </Typography>
        <Grid container>
          {products.map((p, idx) => (
            <Grid item xs={6} xl={3}>
              <ProductItem key={idx} quantity={p.quantity} name={p.name} />
            </Grid>
          ))}
        </Grid> */}
      </S.SContainer>
    </>
  );
};

export default Home;
