import React, { Component } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import "./map.css";
import Pin from "../pin/Pin";
import List from "../list/List";

export default class Map extends Component {
  state = {
    viewport: {
      width: 1920,
      height: 1080,
      latitude: 49.01956,
      longitude: 31.03717,
      zoom: 5
    },
    markers: [
      {
        latitude: 51.237049,
        longitude: 21.017532
      },
      {
        latitude: 52.237249,
        longitude: 22.017532
      },
      {
        latitude: 53.237249,
        longitude: 23.017532
      }
    ]
  };

  TOKEN =
    "pk.eyJ1IjoiZGltYXRrYWNoZW5rbyIsImEiOiJjanpjeXc1bGswMnloM2NscTQ3azg2OWY2In0.fp9hwpLq0hCnR-hf_clerg";

  updateViewPort(viewport) {
    this.setState({ viewport });
  }

  addMarker({ lngLat: [longitude, latitude] }) {
    const newItem = {
      latitude,
      longitude
    };

    this.setState(prevState => ({
      markers: [...prevState.markers, newItem]
    }));
  }

  deleteMarker = index => {
    const oldMarkers = [...this.state.markers];
    oldMarkers.splice(index, 1);
    this.setState({ markers: oldMarkers });
  };

  updateMarker(marker, index) {
    const newItem = {
      latitude: marker.lngLat[1],
      longitude: marker.lngLat[0],
      offsetLeft: 0,
      offsetTop: 0
    };

    const oldMarkers = [...this.state.markers];
    oldMarkers.splice(index, 1, newItem);
    this.setState({ markers: oldMarkers });
  }

  clearMarkers = () => {
    this.setState({ markers: [] });
  };

  render() {
    const { markers } = this.state;
    return (
      <>
        {this.state.markers.length ? (
          <List
            listItems={this.state.markers}
            deleteMarker={this.deleteMarker}
            clearMarkers={this.clearMarkers}
          />
        ) : null}

        <ReactMapGL
          mapStyle="mapbox://styles/mapbox/dark-v9"
          className="map"
          mapboxApiAccessToken={this.TOKEN}
          {...this.state.viewport}
          onViewportChange={viewport => this.updateViewPort(viewport)}
          onClick={viewport => this.addMarker(viewport)}
        >
          {markers.map((marker, index) => (
            <Marker
              key={index}
              latitude={marker.latitude}
              longitude={marker.longitude}
              offsetLeft={marker.offsetLeft}
              offsetTop={marker.offsetTop}
              draggable
              onDragEnd={mapEvent => this.updateMarker(mapEvent, index)}
            >
              <Pin size={20} />
              {`${marker.longitude.toFixed(6)} / ${marker.latitude.toFixed(6)}`}
            </Marker>
          ))}
        </ReactMapGL>
      </>
    );
  }
}
