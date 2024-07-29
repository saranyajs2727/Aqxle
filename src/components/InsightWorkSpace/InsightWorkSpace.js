import React from "react";
import styled from "styled-components";
import spends from "../../assets/workspace1.png";
import insight from "../../assets/workspace2.png";
import sales from "../../assets/workspace3.png";
import mediaIcon from "../../assets/workspace4.png";
import economic from "../../assets/workspace5.png";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  font-family: Helvetica Neue;
  margin-left: 48px;
`;

const Title = styled.p`
  margin-bottom: 20px;
  font-weight: 300;
  font-size: 24px;
  font-family: Helvetica Neue;
  line-height: 44px;
  letter-spacing: -0.28px;
`;

const InsightsList = styled.div`
  width: 95%;
`;

const InsightsItem = styled.div`
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 6px 12px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;
  height: 86px;

  &:hover {
    background: #edf5f8;
  }

  ${(props) =>
    props.active &&
    `
    border-color: blue;
    font-weight: 800;
  `}
`;

const ItemText = styled.span`
  font-family: Helvetica Neue;
  font-weight: 300;
  font-size: 24px;
  letter-spacing: -0.42px;
  line-height: 50px;
  color: rgba(47, 47, 47, 1);
  text-align: center;

  ${(props) =>
    props.active &&
    `
    border-color: blue; 
  `}
`;

const ComingSoon = styled.span`
  color: #999;
  font-size: 14px;
`;

const Arrow = styled.span`
  font-size: 20px;
`;

const Image = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 16px;
`;

const TextContainer = styled.div`
  justify-content: space-between;
  display: flex;
  align-items: center;
`;

const ArrowContainer = styled.div`
background: #fff;
    width: 34px;
    height:34px;
    align-items: center;
    display: flex;
    justify-content: center;
    border-radius: 50%;
}
`;
function InsightWorkSpace() {
  const navigate = useNavigate();
  return (
    <Container>
      <Title>Pick an insights workspace to get started</Title>
      <InsightsList>
        <InsightsItem
          active
          onClick={() => {
            navigate("/uploadfile");
          }}
        >
          <TextContainer>
            <Image src={spends} alt="Descriptive Alt Text" />
            <ItemText active>Competitive Spends</ItemText>
          </TextContainer>
          <ArrowContainer>
            <Arrow>→</Arrow>
          </ArrowContainer>
        </InsightsItem>
        <InsightsItem>
          <TextContainer>
            <Image src={insight} alt="Descriptive Alt Text" />
            <ItemText>Consumer Insights</ItemText>
          </TextContainer>
          <ComingSoon>COMING SOON</ComingSoon>
        </InsightsItem>
        <InsightsItem>
          <TextContainer>
            <Image src={sales} alt="Descriptive Alt Text" />
            <ItemText>Brand & Category Sales</ItemText>
          </TextContainer>
          <ComingSoon>COMING SOON</ComingSoon>
        </InsightsItem>
        <InsightsItem>
          <TextContainer>
            <Image src={mediaIcon} alt="Descriptive Alt Text" />
            <ItemText>Audience & Media Consumption</ItemText>
          </TextContainer>
          <ComingSoon>COMING SOON</ComingSoon>
        </InsightsItem>
        <InsightsItem>
          <TextContainer>
            <Image src={economic} alt="Descriptive Alt Text" />
            <ItemText>Macroeconomic</ItemText>
          </TextContainer>
          <ComingSoon>COMING SOON</ComingSoon>
        </InsightsItem>
      </InsightsList>
    </Container>
  );
}

export default InsightWorkSpace;
