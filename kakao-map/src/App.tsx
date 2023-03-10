import { useState } from "react";
import DynamicMap from "./Map/DynamicMap";
import KaKaoMapScriptLoader from "./Map/KakaoMapScriptLoader";
import MapMarkerController from "./Map/MapMarkerController";
import SearchSideBar from "./Map/SearchSideBar";
import { PlaceType } from "./model/mapTypes";

export default function App() {
  const [places, setPlaces] = useState<PlaceType[]>([]);
  const [selectedPlaceId, setSelectedPlaceID] = useState("");

  return (
    <KaKaoMapScriptLoader>
      <DynamicMap>
        <MapMarkerController places={places} selectedPlaceId={selectedPlaceId} />
        <SearchSideBar
          onUpdatePlaces={(places) => {
            setPlaces(places);
          }}
          onSelect={(placeId) => {
            setSelectedPlaceID(placeId);
          }}
        />
      </DynamicMap>
    </KaKaoMapScriptLoader>
  );
}
