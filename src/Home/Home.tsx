import Button  from "@material-ui/core/Button";
import * as S from "./styles";

const Home = () => {
  return (
    <S.Container>
      <S.InnerWrapper>
        <Button disableElevation variant="contained">
          Gerar item
        </Button>
      </S.InnerWrapper>
    </S.Container>
  );
};

export default Home;
