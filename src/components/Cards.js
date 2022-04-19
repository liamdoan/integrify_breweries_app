import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'
import { Button } from './ButtonElement'

const Container = styled.div`
min-height: 100vh;
padding: 2rem 1rem;
display: flex;
flex-direction: column;
background: linear-gradient(
    to bottom right,
    rgba(31, 36, 39, 0.9),
    rgba(31, 36, 39, 1)
  );
`

const CardWrapper = styled.div`
/* background-color: red; */
display: flex;
flex-wrap: wrap;
justify-content: center;
`

const Form = styled.form`
padding: 10px;
margin: 1rem;
display: flex;
justify-content: center;
align-items: center;
`

const Input = styled.input`
border-radius: 5px;
border: none;
padding: 10px 15px;
outline: none;
width: 60%;
color: white;
background-color: transparent;
box-shadow: inset 5px 5px 10px rgba(0, 0, 0, 0.7),
    inset -1px -1px 10px rgba(109, 123, 133, 0.7);

@media screen and (max-width: 520px) {
  width: 100%;
}
`

// --------------------------
const CardContainer = styled.div`
width: 25vw;
aspect-ratio: 3/1;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
background:linear-gradient(
    to bottom right,
    rgba(114, 129, 140, 0.7),
    rgb(37, 42, 45)
  );
margin: 1.5rem;
padding-bottom: 15px;
border-radius: 20px;
box-shadow: 7px 7px 15px black, -3px -7px 8px rgba(255, 255, 255, 0.15),
    inset 0px 0px 10px rgba(109, 123, 133, 0.6);

  @media screen and (max-width: 720px) {
    width: 240px;
    aspect-ratio: 2/1;
}
`

const Content = styled.div`
flex: 2;
text-align: center;
display: flex;
flex-direction: column;
justify-content: space-between;
padding: 15px;
`

const Name = styled.p`
color: #e9bf28;
font-size: clamp(1.2rem, 2.5vw, 2rem);
`

const Type = styled.p`
color: #b8b091;
margin: 10px 0 10px 0;
font-style: italic;
font-size: clamp(1rem, 2.5vw, 1.5rem);
`

const City = styled.p`
color: #b8b091;
margin: 10px 0 10px 0;
font-size: clamp(1rem, 2.5vw, 1.5rem);
`

const Cards = ({infoBrews}) => {

  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  
  const searchItems = (searchValue) => {
      setSearchInput(searchValue)
      if (searchInput !== '') {
          const filteredData = infoBrews.filter((item) => {
              return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
          })
          setFilteredResults(filteredData)
      }
      else{
          setFilteredResults(infoBrews)
      }
  }

  return (
    <Container>
      <Form>
        <Input
          placeholder="Type to search..."
          onChange={(e) => searchItems(e.target.value)}
        />
      </Form>
      <CardWrapper>
      {
        searchInput.length > 0 ? (
            filteredResults.map((item, index) =>(
              <CardContainer 
                key={item.id}
                >
                  <Content>
                    <Name>{item.name}</Name>
                    <Type>{item.brewery_type}</Type>
                    <City>{item.city}</City>
                  </Content>
                    <Button to={`${item.id}`}>See more</Button>
              </CardContainer>
            ))
            ) : (
              <>
                {infoBrews.map(infoBrew => (
                  <CardContainer 
                    key={infoBrew.id}
                     >
                      <Content>
                          <Name>{infoBrew.name}</Name>
                          <Type>{infoBrew.brewery_type}</Type>
                          <City>{infoBrew.city}</City>
                      </Content>
                        <Button to={`${infoBrew.id}`} main="true">See more</Button>
                  </CardContainer>
                    )
                  )
                }
              </>
             )  
        }
      </CardWrapper>
    </Container>
  )
}

export default Cards