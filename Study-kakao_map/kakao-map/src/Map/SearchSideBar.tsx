import styled from "@emotion/styled";
import { FormEvent, useEffect, useRef, useState } from "react";
import { BsChatHeartFill } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useMap } from "../hooks/useMap";
import { PlaceType } from "../model/mapTypes";

interface SearchSideBarProps {
  onUpdatePlaces: (places: PlaceType[]) => void;
  onSelect: (placeId: string) => void;
}

export default function SearchSideBar(props: SearchSideBarProps) {
  const [keyword, setKeyword] = useState("");
  const [places, setPlaces] = useState<PlaceType[]>([]);
  const placeService = useRef<kakao.maps.services.Places | null>(null);
  const map = useMap();

  useEffect(() => {
    if (placeService.current) {
      return;
    }

    placeService.current = new kakao.maps.services.Places();
  }, []);

  const SearchPlaces = (keyword: string) => {
    if (!keyword.replace(/^\s+|\s+$/g, "")) {
      alert("키워드를 입력해주세요!");
      return;
    }

    if (!placeService.current) {
      // TODO: placeService error handling
      alert("placeService 에러");
      return;
    }

    placeService.current.keywordSearch(keyword, (data, status) => {
      if (status === kakao.maps.services.Status.OK) {
        const placeInfos = data.map((placeSearchResultItem) => {
          return {
            id: placeSearchResultItem.id,
            position: new kakao.maps.LatLng(
              Number(placeSearchResultItem.y),
              Number(placeSearchResultItem.x)
            ),
            title: placeSearchResultItem.place_name,
            address: placeSearchResultItem.address_name
          };
        });

        props.onUpdatePlaces(placeInfos);
        setPlaces(placeInfos);
      } else if (status === kakao.maps.services.Status.ZERO_RESULT) {
        alert("검색 결과가 존재하지 않습니다.");
        return;
      } else if (status === kakao.maps.services.Status.ERROR) {
        alert("검색 결과 중 오류가 발생했습니다.");
        return;
      }
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    SearchPlaces(keyword);
  };

  const handleItemClick = (place: PlaceType) => {
    map.setCenter(place.position);
    map.setLevel(4);
    props.onSelect(place.id);
  };

  return (
    <Container>
      <Title>
        Yoo Been Map <BsChatHeartFill />
      </Title>
      <Form onSubmit={handleSubmit}>
        <Input
          value={keyword}
          onChange={(e) => {
            setKeyword(e.target.value);
          }}
        />
      </Form>
      <List>
        {places.map((place, index) => (
          <Item key={place.id} onClick={() => handleItemClick(place)}>
            <label>{`${index + 1}. ${place.title}`}</label>
            <label>{place.address}</label>
          </Item>
        ))}
      </List>
    </Container>
  );
}

const Container = styled.section`
  position: absolute;
  z-index: 1;
  height: 100%;
  background-color: white;
  opacity: 0.8;
  overflow-y: auto;
`;

const Title = styled.title`
  display: flex;
  padding: 10px;
  font-weight: bold;
  color: hotpink;
  text-shadow: 1px 1px 1px red;
  gap: 5px;
`;

const Form = styled.form`
  display: flex;
  position: sticky;
  background-color: white;
  top: 0;
`;

const Input = styled.input`
  width: 100%;
  min-width: 200px;
  padding: 8px;
  border: 2px solid #c0c0c0;
  border-radius: 5px;
  margin: 3px;
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const Item = styled.li`
  display: flex;
  flex-direction: column;
  padding: 8px;
  margin: 3px;
  border-bottom: 1px solid #d2d2d2;
  cursor: pointer;
  font-size: 13px;

  &:hover {
    background-color: #d2d2d2;
    opacity: 1;
    transition: backround-color 0s;
    border-radius: 10px;
  }
`;
