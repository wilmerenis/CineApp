import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView, ImageBackground } from 'react-native'

import { WINDOW_WIDTH } from '../../styles/mixins'
import { getApiURL, getImageURL } from '../../utils/constants'

import { 
  Carousel, 
  TitleMovie, 
  CarouselItem, 
  OverLayCarousel, 
  CarouselContent, 
  CirclesContainer, 
  DescriptionMovie,
  TransparentButton
} from './index.style'

export default function HomePage() {
  const [state, setState] = useState({ dataSource: [] })

  useEffect(() => {
    (async function() {
      fetch(getApiURL('now_playing'))
        .then((res) => res.json())
        .then((data) => setState({ ...state, dataSource: data.results }))
        .catch((err) => ({err}))
    })() 
  }, [])

  return (
    <Carousel>
      <ScrollView
        horizontal
        pagingEnabled
        style={{ height: 250, backgroundColor: "#333" }}
      >
        {state.dataSource.map((data, i) => (
          <ImageBackground
            key={i}
            style={{ width: WINDOW_WIDTH, height: 250 }}
            source={{ uri: getImageURL(data.backdrop_path, `w500`) }}
          >
            <CarouselContent>
              <TitleMovie>{data.title}</TitleMovie>
              <DescriptionMovie numberOfLines={2} >{data.overview}</DescriptionMovie>
              <View>
                <TransparentButton><Text style={{ color: "#FFF" }}>More Info</Text></TransparentButton>
              </View>
            </CarouselContent>
            <OverLayCarousel/>
          </ImageBackground>
        ))}
      </ScrollView>
    </Carousel>
  )
}