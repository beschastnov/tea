import React from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

export default function MapComp({ allTeas }) {
  const oneTea = allTeas[1];
  const place1 = oneTea.place;
  const nameTea = oneTea.name;
  //  из этого пропса нужно вытаскивать чай и его локацию и вставлять локацию а placemark
  return (
    <YMaps>
      <Map
        className="map-place"
        defaultState={{
          center: [55.75, 37.57],
          zoom: 2,
          controls: ['zoomControl', 'fullscreenControl'],
        }}
        modules={['control.ZoomControl', 'control.FullscreenControl']}
      >
        <Placemark
          iconColor="green"
          balloonContentBody={nameTea}
          defaultGeometry={place1}
        />
      </Map>
    </YMaps>

  );
}
