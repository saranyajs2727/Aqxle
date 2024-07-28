import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  font-family: Arial, sans-serif;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

const InsightsList = styled.div`
  width: 300px;
`;

const InsightsItem = styled.div`
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: #000;
  }

  ${(props) =>
    props.active &&
    `
    border-color: blue;
    font-weight: bold;
  `}
`;

const ItemText = styled.span`
  font-size: 16px;
`;

const ComingSoon = styled.span`
  color: #999;
  font-size: 14px;
`;

const Arrow = styled.span`
  font-size: 20px;
`;

function InsightWorkSpace() {
  
  return (
    <Container>
    <Title>Pick an insights workspace to get started</Title>
    <InsightsList>
      <InsightsItem active>
        <ItemText>Competitive Spends</ItemText>
        <Arrow>→</Arrow>
      </InsightsItem>
      <InsightsItem>
        <ItemText>Consumer Insights</ItemText>
        <ComingSoon>COMING SOON</ComingSoon>
      </InsightsItem>
      <InsightsItem>
        <ItemText>Brand & Category Sales</ItemText>
        <ComingSoon>COMING SOON</ComingSoon>
      </InsightsItem>
      <InsightsItem>
        <ItemText>Audience & Media Consumption</ItemText>
        <ComingSoon>COMING SOON</ComingSoon>
      </InsightsItem>
      <InsightsItem>
        <ItemText>Macroeconomic</ItemText>
        <ComingSoon>COMING SOON</ComingSoon>
      </InsightsItem>
    </InsightsList>
  </Container>
  )
}

export default InsightWorkSpace