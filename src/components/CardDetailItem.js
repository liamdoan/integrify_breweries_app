import React from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
// import { useNavigate } from 'react-router-dom'
import { css } from 'styled-components'
import { Button } from './ButtonElement'

const CardDetailContainer = styled.div`
width: 30vw;
aspect-ratio: 1/1;
display: flex;
flex-direction: column;
justify-content: space-between;
background:linear-gradient(
    to bottom right,
    rgba(114, 129, 140, 0.7),
    rgb(37, 42, 45)
  );
margin: 1.5rem;
padding: 15px;
border-radius: 20px;
box-shadow: 7px 7px 15px black, -3px -7px 8px rgba(255, 255, 255, 0.15),
    inset 0px 0px 10px rgba(109, 123, 133, 0.6);
    
@media screen and (max-width: 720px) {
    width: 280px;
    aspect-ratio: 1/1;
}
`

const Content = styled.div`
text-align: center;
display: flex;
flex-direction: column;
justify-content: space-between;
padding: 15px;
`

const Name = styled.p`
color: #e9bf28;
font-size: clamp(1.2rem, 3vw, 2rem);
`

const mutualStyle = css`
color: #b8b091;
margin: 5px 0 5px 0;
font-style: italic;
font-size: clamp(1rem, 2.5vw, 1.5rem);
`

const Type = styled.p`
${mutualStyle}
`
const Street = styled.p`
${mutualStyle}

`
const Address2 = styled.p`
${mutualStyle}

`
const Address3 = styled.p`
${mutualStyle}

`
const City = styled.p`
${mutualStyle}

`
const State = styled.p`
${mutualStyle}

`
const County = styled.p`
${mutualStyle}

`
const PostalCode = styled.p`
${mutualStyle}

`

const CardDetailItem = ({infoBrews}) => {

    const {brewId} = useParams()

    // const navigate = useNavigate()
    // const handleClick = () => {
    //     navigate("/")
    // }

    return (
        <>
            {infoBrews
            .filter(infoBrew => infoBrew.id === brewId)
            .map(infoBrew => (
                <CardDetailContainer 
                    key={infoBrew.id}
                    id={infoBrew.id}
                    >
                    <Content>
                        <Name>{infoBrew.name}</Name>
                        <Type>{infoBrew.brewery_type}</Type>
                        <Street>{infoBrew.street}</Street>
                        <Address2>{infoBrew.address_2}</Address2>
                        <Address3>{infoBrew.address_3}</Address3>
                        <City>{infoBrew.city}</City>
                        <State>{infoBrew.state}</State>
                        <County>{infoBrew.county_province}</County>
                        <PostalCode>{infoBrew.postal_code}</PostalCode>
                    </Content>
                    <Button to = "/integrify_breweries_app">Back to homepage</Button>
                </CardDetailContainer>
            ))}
        </>
    )
}

export default CardDetailItem