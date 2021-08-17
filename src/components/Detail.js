import React from 'react'
import styled from 'styled-components'

function Detail() {
  return (
    <Container>
      <Background>
      <img src="/images/viewers-disney.png" />
      </Background>
      <ImageTitle>
      <img src="/images/viewers-disney.png" />
      </ImageTitle>
      <Controls>
      <Playbutton>

      </Playbutton>
      <TrailerButton>

      </TrailerButton>
      <AddButton>

      </AddButton>
      <GroupWatchButton>

      </GroupWatchButton>
      </Controls>
    </Container>
  )
}

export default Detail

const Container = styled.div`
min-height: calc(100vh - 70px); 
padding: 0 calc(3.5vw + 5px); 
position: relative;
`

const Background = styled.div`
 position: fixed;
 top: 0;
 left: 0;
 bottom: 0;
  right: 0;

  img{
    width: 100%;
    height:100%;
    object-fit: cover;
  }
`

const ImageTitle = styled.div`
height: 30vh;
width: 35vw;

img{
  width: 100%;
  height: 100%;
  object-fit: contain;

}
`

const Controls = styled.div`

`

const Playbutton = styled.div`
`
const TrailerButton = styled.div`
`
const AddButton = styled.div`
`
const GroupWatchButton = styled.div`
`