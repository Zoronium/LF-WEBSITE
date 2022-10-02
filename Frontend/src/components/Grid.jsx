import React from "react";
import styled from "styled-components";

var Wrapper = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  margin: auto;
  max-width: 1400px;
  padding: 20px;
`;

var StyledCard = styled.div`
  box-shadow: 0 12px 12px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 15px;
  border-radius: 4px;
  display: flex;
  flex-flow: column wrap;
  background-color: white;
  h1 {
    margin: 0;
    font-size: 3.4rem;
  }
  p {
    font-size: 1.4rem;
    line-height: 21px;
    color: rgba(0, 0, 0, 0.6);
  }
  &.three {
    grid-column: span 3;
  }
`;

var StyledButton = styled.button`
  height: 40px;
  width: 160px;
  background-color: rgb(0, 0, 255);
  color: white;
  font-size: 1.3rem;
  text-transform: uppercase;
  letter-spacing: 0.035em;
  font-weight: 600;
  border-radius: 6px;
  margin-top: auto;
  transition: 0.35s;
  cursor: pointer;
  :hover {
    background-color: rgb(0, 0, 200);
  }
`;

const Button = () => {
    return <StyledButton>See Article</StyledButton>;
};

const Card = ({ title, className, description }) => {
    return (
        <StyledCard className={className}>
            <h1>{title}</h1>
            <p>{description}</p>
            <Button />
        </StyledCard>
    );
};

const Grid = () => {
    var { one, two, three, four } = cardDescriptions;
    return (
        <Wrapper>
            <Card title="daily news" description={one} />
            <Card title="up first" description={two} />
            <Card title="need to know" description={three} />
            <Card title="breaking" description={four} />
        </Wrapper>
    );
};

var cardDescriptions = {
    one: "Lorem ipsum dolor amet dreamcatcher kale chips skateboard unicorn semiotics affogato pinterest. Organic chambray street art before they sold out squid hammock, flannel freegan church-key irony pok pok poke thundercats.",

    two: "Neutra bespoke iPhone, paleo banh mi asymmetrical enamel pin small batch. Sustainable cred raclette, swag yuccie mumblecore dreamcatcher cray you probably haven't heard of them. Master cleanse shoreditch flexitarian, subway tile cliche chia godard. Pabst dreamcatcher plaid schlitz beard echo park succulents salvia vape 90's before they sold out mixtape.",
    three:
        "Hot chicken schlitz migas, poke beard narwhal crucifix fingerstache woke. 90's man bun bespoke DIY. Narwhal etsy brooklyn, blue bottle sriracha vape neutra DIY try-hard. Hammock forage locavore, post-ironic meh +1 cred pickled yuccie XOXO mixtape taxidermy tofu yr kombucha.",
    four: "Neutra bespoke iPhone, paleo banh mi asymmetrical enamel pin small batch. Sustainable cred raclette, swag yuccie mumblecore dreamcatcher cray you probably haven't heard of them. Master cleanse shoreditch flexitarian, subway tile cliche chia godard. Pabst dreamcatcher plaid schlitz beard echo park succulents salvia vape 90's before they sold out mixtape.",
};

export default Grid;
