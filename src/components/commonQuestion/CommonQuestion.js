import React, { useState, useEffect } from "react";
import styled from "styled-components";
import rightArrow from "../../assets/arrow_right.png";
import Graph from "../Graph/Graph";
import proceesingImage from "../../assets/processing.png";
import addFiles from "../../assets/addFiles.png";

// Styled components
const CommonQuestions = styled.div`
  margin-top: 20px;
  text-align: center;
`;

const Question = styled.div`
  margin: 10px 0;
  cursor: pointer;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-top: 20px;
  box-sizing: border-box;
`;

const Heading = styled.p`
  font-weight: 500;
  font-size: 28px;
  line-height: 34px;
  letter-spacing: -0.28px;
`;

const Image = styled.img`
  height: 16px;
  width: 16px;
  border-radius: 10px;
  margin-bottom: 20px;
  align-self: center;
`;

const QuestionContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;

const Line = styled.div`
  border-bottom: 1px solid rgba(216, 216, 216, 0.25);
  align-items: center;
  justify-content: center;
  display: flex;
  margin-right: 180px;
  margin-left: 180px;
`;

const ProceesingImage = styled.img`
  height: 16px;
  width: 16px;
  align-self: center;
  margin-right: 20px;
`;

const TemplateText = styled.p`
display: flex;
color: #20b0d3;
font-size: 16px;
    font-weight: 400;
    margin-top: 20px;
`;

const AddImage = styled.img`
height: 16px;
width: 16px;
align-self: center;
margin-right: 10px;
`

const data = [
  {
    id: "Question 1",
    question: `What is the total spend of jp morgan ?`,
    value: `To provide an accurate answer, I need to clarify which dataset you would like to use for
        calculating the total spend of JP Morgan Chase. We have two datasets available: the Vivvix dataset and the Pathmatics dataset. Each dataset might represent the spend data differently.
        Could you please specify from which dataset (Vivvix or Pathmatics) you would like to calculate the total spend for JP Morgan Chase? Additionally, if you choose the Vivvix dataset, would you like to consider the "TOTAL $" column for this calculation?`,
    heading: `Common media spends question #1`,
  },
  {
    id: "Question 2",
    question: `Use both the data sets. And from vivvix use the "TOTAL $" column as you mentioned.`,
    value: `271616117.7802`,
    heading: `Common media spends question #2`,
  },
  {
    id: "Question 3",
    question: `What are the top categories under which JP Morgan spends ?`,
    value: `271616117.7802`,
    heading: `Common media spends question #3`,
  },
  {
    id: "Question 4",
    question: `Use both the data sets. And from vivvix use the "TOTAL $" column as you mentioned.`,
    value: `271616117.7802`,
    heading: `Common media spends question #4`,
  },
];

// Chart component (placeholder)
const Chart = () => (
  <div>
    <p>Chart rendered</p>
  </div>
);

// Main component
const CommonQuestion = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [userInput, setUserInput] = useState("");
  const [loading, setLoading] = useState(false);

  // Sample data component
  const SampleData = () => (
    <div>
      {data.map((item) => {
        if (item.id === selectedQuestion) {
          return (
            <div key={item.id} >
              <div style={{display:'flex',justifyContent:'space-between'}}>
              <h3>{item.heading}</h3>
              <div style={{display:'flex'}}>
              <AddImage src={addFiles} alt="Descriptive Alt Text" />
              <TemplateText>Save question to template</TemplateText>

                </div>
              </div>
            
              <p>{item.value}</p>
                {/* Graph */}
        <div style={{marginTop:40}}>
        <Graph />
        </div>
            </div>
          );
        }
        return null;
      })}
    </div>
  );

  const handleQuestionClick = (question) => {
    setLoading(true);
    setSelectedQuestion(question);
    setTimeout(() => {
      setLoading(false);
    }, 3000); // Simulate API loading time
  };

  useEffect(() => {
    if (
      userInput.toLowerCase().includes("chart") ||
      userInput.toLowerCase().includes("graph")
    ) {
      console.log(userInput.toLowerCase().includes("Bonbon"));
      setSelectedQuestion("chart");
    } else {
      console.log(userInput.toLowerCase().includes("chart"), "else part");
      setSelectedQuestion(null);
    }
  }, [userInput]);


  return (
    <>
      <Heading>Or start with common Competitive Media Spend questions</Heading>
      <CommonQuestions>
        <QuestionContainer onClick={() => handleQuestionClick("Question 1")}>
          <Question>Common media spends question #1</Question>
          <Image src={rightArrow} alt="Descriptive Alt Text" />
        </QuestionContainer>
        <Line />
        <QuestionContainer onClick={() => handleQuestionClick("Question 2")}>
          <Question>Common media spends question #2</Question>
          <Image src={rightArrow} alt="Descriptive Alt Text" />
        </QuestionContainer>
        <Line />
        <QuestionContainer onClick={() => handleQuestionClick("Question 3")}>
          <Question>Common media spends question #3</Question>
          <Image src={rightArrow} alt="Descriptive Alt Text" />
        </QuestionContainer>
        <Line />
        <QuestionContainer onClick={() => handleQuestionClick("Question 4")}>
          <Question>Common media spends question #4</Question>
          <Image src={rightArrow} alt="Descriptive Alt Text" />
        </QuestionContainer>
      </CommonQuestions>
      <Input
        type="text"
        placeholder="Type your question"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      {loading ? (
        <div style={{ display: "flex", flexDirection: "row" }}>
          <ProceesingImage src={proceesingImage} alt="Descriptive Alt Text" />
          <p style={{ color: "#20b0d3" }}>processing — turning the aqxle…</p>
        </div>
      ) : selectedQuestion === "chart" ? (
        <Graph />
      ) : (
        selectedQuestion && <SampleData />
      )}
    </>
  );
};

export default CommonQuestion;
