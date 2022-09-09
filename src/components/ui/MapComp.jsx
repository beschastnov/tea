import React from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

export default function MapComp({ allTeas }) {
  const allTeasArr = allTeas;
  const oneTea = allTeas[1];
  const place1 = oneTea.place;
  const nameTea = oneTea.name;
  const getPointData = (index) => ({
    balloonContentBody: `placemark <strong>balloon ${index}</strong>`,
    clusterCaption: `placemark <strong>${index}</strong>`,
  });
  //  из этого пропса нужно вытаскивать чай и его локацию и вставлять локацию а placemark
  return (
    <YMaps version="2.1.79">
      <Map
        className="map-place"
        defaultState={{
          center: [55.75, 37.57],
          zoom: 2,
          controls: ['zoomControl', 'fullscreenControl'],
        }}
        modules={['control.ZoomControl', 'control.FullscreenControl']}
      >
        {allTeasArr.map((el) => (
          <Placemark
            iconColor="green"
            balloonContentBody={getPointData()}
            onClick={() => {
              console.log(el.name);
            }}
            properties={getPointData(el.name)}
            defaultGeometry={el.place.split(',').map((el2) => +(el2))}
            key={el.id}
          />
        ))}
      </Map>
    </YMaps>

  );
}
