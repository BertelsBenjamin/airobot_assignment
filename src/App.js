import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  WMSTileLayer,
  LayerGroup,
} from 'react-leaflet';
import Leaflet from 'leaflet';

function App() {
  return (
    <div className='App'>
      <MapContainer
        id='map'
        center={[50.8, 5.2]}
        zoom={12}
        scrollWheelZoom={true}
        style={{ height: '50vh' }}
      >
        <TileLayer url={'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'} />
        <LayerGroup>
          <WMSTileLayer
            url='https://geoservices.informatievlaanderen.be/raadpleegdiensten/Adpf/wms?request=getcapabilities&version=1.3.0&service=wms&Content-Type=text/xml'
            params={{
              layers: 'Adpf2020',
              attribution: 'Administratieve percelen',
              transparent: true,
              format: 'image/png',
              styles: '',
              version: '1.3.0',
            }}
          />
        </LayerGroup>
        <Marker position={[50.8, 5.2]}>
          <Popup>Hello world</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default App;
