import { useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";
import { KakaoMapContext } from "../hooks/useMap";

interface DynamicMapProps {
  children: React.ReactNode;
}

export default function DynamicMap(props: DynamicMapProps) {
  const [map, setMap] = useState<kakao.maps.Map>();
  const kakaoMapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!kakaoMapRef.current) {
      return;
    }

    setMap(
      new window.kakao.maps.Map(kakaoMapRef.current, {
        center: new kakao.maps.LatLng(33.450701, 126.570667),
        level: 3
      })
    );
  }, []);

  return (
    <>
      <Container>
        <Map ref={kakaoMapRef} />
      </Container>
      {map ? (
        <KakaoMapContext.Provider value={map}>{props.children}</KakaoMapContext.Provider>
      ) : (
        <div>지도 정보를 가져오는데 실패하였습니다.</div>
      )}
    </>
  );
}

const Container = styled.main`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`;

const Map = styled.section`
  postion: static;
  width: 100%;
  height: 100%;
`;
