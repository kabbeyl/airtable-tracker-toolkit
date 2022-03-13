import { useEffect, useState } from "react";
import { Map, NavigationControl } from "mapbox-gl";
import bbox from '@turf/bbox';
import truncate from "@turf/truncate";
import 'mapbox-gl/dist/mapbox-gl.css';
import mapstyle from '../../styles/mapstyle.json'
import centroid from "@turf/centroid";
import PageSection from "../../components/PageSection";
import {mapboxAccessToken} from '../../toolkit.config'

const ProjectMap = ({ feature }) => {

  let fc = {
    type: "FeatureCollection",
    features: [feature]
  }

  useEffect(() => {
    const accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;

    let map = new Map({
      container: 'map',
      style: mapstyle,
      bounds: bbox(fc),
      fitBoundsOptions: {
        padding: 50,
        maxZoom: 17
      },
      interactive: false,
      accessToken: accessToken
    });

    map.addControl(new NavigationControl({showCompass: false}));

    map.on('load', () => {
      map.resize();
      map.getSource("projects").setData(fc)
      map.setLayoutProperty("projects-icon", "visibility", "none")
      map.setLayoutProperty("projects-label", "visibility", "visible")
      map.setLayoutProperty("projects-circle", "visibility", "visible")
    });
  }, [])

  return (
    <PageSection title='Where is it?' padding={false}>
      <div id="map" className="h-96"></div>
    </PageSection>
  )
}

export default ProjectMap;