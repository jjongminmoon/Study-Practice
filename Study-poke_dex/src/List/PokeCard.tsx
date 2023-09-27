import styled from "@emotion/styled";
import { useEffect } from "react";
import { useIntersectionObserver } from "react-intersection-observer-hook";
import { useNavigate } from "react-router-dom";
import PokeMarkChip from "../Common/PokeMarkChip";
import PokeNameChip from "../Common/PokeNameChip";
import { FaQuestionCircle } from "react-icons/fa";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../Store";
import { fetchPokemonDetail } from "../Store/PokemonDetailSlice";

interface PokeCardProps {
  name: string;
}

export default function PokeCard(props: PokeCardProps) {
  const dispatch = useAppDispatch();
  const { pokemonDetails } = useSelector((state: RootState) => state.pokemonDetail);
  const imgType = useSelector((state: RootState) => state.imageType.type);
  const navigate = useNavigate();
  const [ref, { entry }] = useIntersectionObserver();
  const isVisible = entry && entry.isIntersecting;
  const pokemon = pokemonDetails[props.name];

  const handleClick = () => {
    navigate(`/pokemon/${props.name}`);
  };

  useEffect(() => {
    if (!isVisible) {
      return;
    }

    dispatch(fetchPokemonDetail(props.name));
  }, [dispatch, props.name, isVisible]);

  if (!pokemon) {
    return (
      <Item onClick={handleClick} color={"fff"} ref={ref}>
        <Header>
          <PokeNameChip name={"? ? ?"} color={"#ffca09"} id={0} />
        </Header>
        <Body>
          <PokeImageSkeleton />
        </Body>
        <Footer>
          <PokeMarkChip />
        </Footer>
      </Item>
    );
  }

  return (
    <Item onClick={handleClick} color={pokemon.color} ref={ref}>
      <Header>
        <PokeNameChip name={pokemon.koreanName} color={pokemon.color} id={pokemon.id} />
      </Header>
      <Body>
        <Image src={pokemon.images[imgType]} alt={`${pokemon.name} 이미지`} />
      </Body>
      <Footer>
        <PokeMarkChip />
      </Footer>
    </Item>
  );
}

const Item = styled.li<{ color: string }>`
  display: flex;
  flex-direction: column;
  padding: 8px;
  border: 1px solid #c0c0c0;
  width: 250px;
  height: 300px;
  box-shadow: 1px 1px 3px 1px #c0c0c0;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    background-color: ${(props) => props.color};
    opacity: 0.8;
    transition: background-color 0s;
  }
`;

const Header = styled.div`
  display: flex;
`;

const Body = styled.div`
  display: flex;
  flex: 1 1 auto;
  justify-content: center;
  align-items: center;
  margin-top: 24px;
`;

const Image = styled.img`
  width: 200px;
  height: 200px;
`;

const Footer = styled.div`
  display: flex;
  margin: 8px 0;
`;

const PokeImageSkeleton = styled(FaQuestionCircle)`
  font-size: 60px;
  color: #ffca09;
`;
