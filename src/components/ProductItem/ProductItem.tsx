import { ProductItemType } from '../../types/product-item.type';
import * as S from "./styles";

const ProductItem: React.FC<ProductItemType> = ({ name, quantity }) => {
  return (
    <S.Wrapper elevation={0}>
      <S.Title>{name}</S.Title>
      <S.Quantity>{quantity}</S.Quantity>
    </S.Wrapper>
  );
};

export default ProductItem;
