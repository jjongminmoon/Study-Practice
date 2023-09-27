import styled from "@emotion/styled";
import { ChangeEvent } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { POKEMON_IMAGE_TYPE } from "../Constants";
import { RootState, useAppDispatch } from "../Store";
import { changeImageType, PokemonImageKeyType } from "../Store/ImageTypeSlice";

export default function PageHeader() {
  const type = useSelector((state: RootState) => state.imageType.type);
  const dispatch = useAppDispatch();

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(
      changeImageType({
        type: e.target.value as PokemonImageKeyType
      })
    );
  };

  return (
    <Header>
      <Title>
        <Link to={"/"}>Pokémon</Link>
      </Title>
      <Select value={type} onChange={handleChange}>
        <option value={POKEMON_IMAGE_TYPE.OFFICAIL_ARTWORK}>Official</option>
        <option value={POKEMON_IMAGE_TYPE.DREAM_WORLD}>Dream_World</option>
        <option value={POKEMON_IMAGE_TYPE.FRONT_DEFAULT}>Front_Default</option>
      </Select>
    </Header>
  );
}

const Header = styled.nav`
  display: flex;
  padding: 16px 32px;
  border-bottom: 1px solid #c0c0c0;
  margin: 0 20px 16px 20px;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 32px;
  color: #ffca09;
  text-shadow: -1px 0 blue, 0 2px blue, 1px 0 blue, 0 -1px blue;
`;

const Select = styled.select`
  margin-left: auto;
  padding: 8px 12px;
  border-radius: 8px;
`;
