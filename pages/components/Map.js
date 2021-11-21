// rafce => provide react basic code structure
import tw from "tailwind-styled-components"
import {useEffect} from 'react';
import mapboxgl from '!mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoibmFrc2hpdGEtMjg1IiwiYSI6ImNrdjluOThkNzBlenoybnRjbXN4d2oyOGoifQ.e1SywbxgJF9YQvWIQGHigw';


const Map = () => {

    useEffect(() => {
        const map = new mapboxgl.Map({
          container: 'map',
          style: 'mapbox://styles/mapbox/streets-v11',
          center: [ 77.1025,28.7041],
          zoom: 10
          })
      })

    return (
        <Wrapper id='map'></Wrapper>
    )
}


export default Map

const Wrapper = tw.div`
  flex-1
`
