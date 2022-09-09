import React from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

export default function MapComp({ allTeas }) {
  const allTeasArr = allTeas;
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
        {allTeasArr?.map((el) => (
          <Placemark
            defaultGeometry={el.place.split(',').map((el2) => +(el2))}
            options={
              {
                preset: 'islands#darkGreenStretchyIcon',
              }
            }
            properties={
              {
                iconContent: el.name,
              }
            }
            key={el.id}
          />
        ))}

      </Map>
    </YMaps>

  );
}
