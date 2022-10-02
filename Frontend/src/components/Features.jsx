import React from 'react'
import styled from 'styled-components';

const features = () => {

  const Wrapper = styled.div`
  background: #e6ebfa;
  height: 800px;
  color: black;
`;
  const CustmGrid = styled.div`
  display: grid;
  padding: 5%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
  const GridItem = styled.div`
  background: white;
  height: 300px;
  margin: 10px;
  width: 200px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
  border-radius: 50px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  .dim {
    color: grey;
  }
`;
  const CustDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

  return (
    <>
      <h2>TESTMONIALS</h2>
      <CustmGrid>
        <GridItem>
          <p>head/ testmonial</p>
          <CustDetails>
            <img />
            <h4>hi</h4>
            <p>hi</p>
          </CustDetails>
        </GridItem>
      </CustmGrid>
    </>
  );

}

export default features