import styled from 'styled-components'
import { WHITE, GRAY_LIGHT } from '../../styles/colors'
import { WINDOW_WIDTH, scaleFont } from '../../styles/mixins'

const height = WINDOW_WIDTH * .8

const Carousel = styled.View`
  width: 100%;
  height: 250px;
`

const CarouselItem = styled.View`
  width: 6px;
  height: 10px;
  margin: 5px;
  border-radius: 3px;
  background-color: #FFF;
  background-color: ${props => props.active ? "#338FED" : "#FFF"}
`
const CirclesContainer = styled.View`
  display: flex;
  width: 100%;
  bottom: 10px;
  height: 10px;
  position: absolute;
  align-items: center;
  flex-direction: row;
  justify-content: center;  
`

const OverLayCarousel = styled.View`
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: rgba(0,0,0, .25);
  z-index: 1;
`

const CarouselContent = styled.View`
  height: 100%;
  padding: 20px 20px 25px;
  justify-content: flex-end;
  z-index: 2;
`
const TitleMovie = styled.Text`
  color: ${WHITE};
  font-weight: 600;
  font-family: 'Oswald';
  font-size: ${scaleFont(20)}px;
`
const DescriptionMovie = styled.Text`
  color: ${WHITE};
  font-size: ${scaleFont(16)}px;
  font-weight: 400;
  font-family: 'Oswald';
`
const TransparentButton = styled.TouchableHighlight`
  width: 80px;
  padding: 8px;
  margin-top: 5px;
  border-radius: 5px;
  background-color: ${props => !props.onPress ? 'rgba(52, 52, 52, 0.8)' : GRAY_LIGHT};
`

export { 
  Carousel, 
  TitleMovie, 
  CarouselItem, 
  CarouselContent, 
  OverLayCarousel, 
  CirclesContainer, 
  DescriptionMovie,
  TransparentButton,
}