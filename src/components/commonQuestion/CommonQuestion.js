import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import rightArrow from "../../assets/arrow_right.png";
import Graph from "../Graph/Graph";
import proceesingImage from "../../assets/processing.png";
import addFiles from "../../assets/addFiles.png";
import deleteIcon from "../../assets/deleteIcon.png";
import triangle from "../../assets/Triangle.png";
import question from "../../assets/question.png";
import arrowRight from "../../assets/arrow_right.png";
import whiteArrow from "../../assets/rightArrow.png";
import SaveModal from "../SaveModal/SaveModal";

// Styled components
const CommonQuestions = styled.div`
  margin-top: 20px;
  margin-botton: 30px;
  text-align: center;
`;

const Question = styled.div`
  margin: 10px 0;
  cursor: pointer;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
`;

const Heading = styled.p`
  font-weight: 500;
  font-size: 28px;
  line-height: 34px;
  letter-spacing: -0.28px;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
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
`;

const Container = styled.div`
  padding: 20px;
  font-family: Arial, sans-serif;
`;

const SectionTitle = styled.h2`
  font-size: 1.5em;
  margin-bottom: 10px;
  font-weight: 300;
  font-family: "Helvetica Neue";
`;

const FileList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const FileItem = styled.li`
  margin: 5px 0;
  border-radius: 5px;
  font-family: "Helvetica Neue";
  font-weight: 500;
  line-height: 32px;
  color: #20b0d3;
  letter-spacing: -0.28px;
`;

const TemplateSection = styled.div`
  margin-top: 20px;
`;

const TemplateInput = styled.input`
  padding: 10px;
  width: calc(100% - 40px);
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  border: none;
`;

const AnalyzeButton = styled.button`
  padding: 10px 20px;
  background-color: #20b0d3;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const DeleteIcon = styled.img`
  height: 16px;
  width: 16px;
`;

const FileContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const BackgroundContainer = styled.div`
  background-color: white;
  padding: 14px 36px;
  display: inline-block;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 41%;
  cursor: pointer;
  margin-right: 20px;
`;

const Icon = styled.img`
  margin: 0 8px;
  display: flex;
  align-items: center;
  height: 18px;
  width: 22px;
`;

const InputIcon = styled.img`
  position: absolute;
  right: 7px;
  top: 50%;
  transform: translateY(-50%);
  height: 18px;
  width: 18px;
`;

const InputIconContainer = styled.div`
  background-color: #ededed;
  border-radius: 50%;
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  height: 32px;
  width: 32px;
  cursor: pointer;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px 10px 10px 12px;
  box-sizing: border-box;
  border-radius: 24px;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  border: none;
  &::placeholder {
    color: rgba(201, 195, 195, 1);
    font-weight: 300;
    line-height: 34px;
  }
  &:focus {
    border: none;
  }
`;

const InputContainer = styled.div`
  position: fixed;
  bottom: 40px;
  width: 76%;
  box-shadow: 0 -2px -2px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const BlueBoxContainer = styled.div`
  background-color: rgb(32, 176, 211);
  height: 48px;
  width: 56px;
  justify-content: center;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const BlueBoxIcon = styled.img`
  height: 16px;
  width: 16px;
  border-radius: 10px;
  align-self: center;
`;

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
    value: `7816117.7802`,
    heading: `Common media spends question #3`,
  },
  {
    id: "Question 4",
    question: `Use both the data sets. And from vivvix use the "TOTAL $" column as you mentioned.`,
    value: `98616117.7802`,
    heading: `Common media spends question #4`,
  },
  {
    id: "Question 5",
    question: `What is the total spend of jp morgan ?`,
    value: `To provide an accurate answer, I need to clarify which dataset you would like to use for
        calculating the total spend of JP Morgan Chase. We have two datasets available: the Vivvix dataset and the Pathmatics dataset. Each dataset might represent the spend data differently.
        Could you please specify from which dataset (Vivvix or Pathmatics) you would like to calculate the total spend for JP Morgan Chase? Additionally, if you choose the Vivvix dataset, would you like to consider the "TOTAL $" column for this calculation?`,
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
  const [questionPicked, setQuestionPicked] = useState("");
  const [renderedContent, setRenderedContent] = useState([]);
  const sampleDataRef = useRef(null);

  const SampleData = ({ item }) => (
    <div key={item.id} ref={sampleDataRef} style={{ marginBottom: 60 }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h3>{item.heading}</h3>
        <div style={{ display: "flex" }}>
          <AddImage src={addFiles} alt="Descriptive Alt Text" />
          <TemplateText>Save question to template</TemplateText>
        </div>
      </div>
      <p>{item.value}</p>
      <div style={{ marginTop: 40 }}>
        <Graph />
      </div>
    </div>
  );

  const updateCustomQuestionValue = (userInput) => {
    data[4].heading = userInput;
  };

  // const handleQuestionClick = (question) => {
  //   if (question === undefined) {
  //     question = questionPicked;
  //   }
  //   setLoading(true);
  //   setSelectedQuestion(question);
  //   updateCustomQuestionValue(userInput);

  //   // Determine the item to display (first matched item or the first item in the data array)
  //   const matchedItems = data.filter(
  //     (item) =>
  //       item.id === selectedQuestion || item.heading === selectedQuestion
  //   );
  //   const itemToDisplay = matchedItems.length > 0 ? matchedItems[0] : data[4];

  //   if (itemToDisplay) {
  //     setUserInput(itemToDisplay.heading);
  //     setRenderedContent((prevContent) => [...prevContent, itemToDisplay]);
  //   }

  //   setTimeout(() => {
  //     setLoading(false);
  //     if (sampleDataRef.current) {
  //       sampleDataRef.current.scrollIntoView({
  //         behavior: "smooth",
  //         block: "start",
  //       });
  //     }
  //   }, 100); // Simulate API loading time
  // };

  const handleQuestionClick = (question) => {
    if (question === undefined) {
      question = questionPicked;
    }
    setLoading(true);
    setSelectedQuestion(question);

    // Update the value for custom questions
    updateCustomQuestionValue(userInput);

    // Determine the item to display (first matched item or the custom item)
    const matchedItems = data.filter(
      (item) =>
        item.id === selectedQuestion || item.heading === selectedQuestion
    );
    const itemToDisplay =
      matchedItems.length > 0
        ? matchedItems[0]
        : { id: "custom", heading: userInput, value: data[0].value };

    if (itemToDisplay) {
      const updatedRenderedContent = renderedContent.map((contentItem) => {
        if (contentItem.id === itemToDisplay.id) {
          return {
            ...contentItem,
            heading: userInput,
          };
        }
        return contentItem;
      });

      setUserInput(itemToDisplay.heading);
      setRenderedContent((prevContent) => {
        const existingItem = prevContent.find(
          (item) => item.id === itemToDisplay.id
        );
        if (existingItem) {
          return updatedRenderedContent;
        }
        return [...prevContent, itemToDisplay];
      });
    }

    setTimeout(() => {
      setLoading(false);
      if (sampleDataRef.current) {
        sampleDataRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 100); // Simulate API loading time
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleQuestionClick(e.target.value);
    }
  };

  useEffect(() => {
    if (
      userInput.toLowerCase().includes("chart") ||
      userInput.toLowerCase().includes("graph")
    ) {
      setSelectedQuestion("chart");
    }
  }, [userInput]);

  return (
    <>
      <Container>
        <BackgroundContainer>
          <SectionTitle>Successfully uploaded to workspace</SectionTitle>
          <FileList>
            <FileContainer>
              <FileItem>FinQ12022_1151511_1151512_export.csv</FileItem>
              <DeleteIcon src={deleteIcon} alt="Descriptive Alt Text" />
            </FileContainer>
            {/* <FileContainer>
              <FileItem>FinQ12022_1151511_1151512_export.csv</FileItem>
              <DeleteIcon src={deleteIcon} alt="Descriptive Alt Text" />
            </FileContainer> */}
          </FileList>
        </BackgroundContainer>

        <TemplateSection>
          <SectionTitle style={{ fontWeight: "500", fontSize: 28 }}>
            Quick-analyze from your saved templates
          </SectionTitle>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Wrapper>
              <Icon src={question} alt="Descriptive Alt Text" />
              <TemplateInput
                type="text"
                value="15 questions for Cr Card spends"
                readOnly
              />
              <Icon src={triangle} alt="Descriptive Alt Text" />
            </Wrapper>
            <BlueBoxContainer>
              <BlueBoxIcon src={rightArrow} alt="Descriptive Alt Text" />
            </BlueBoxContainer>
          </div>
        </TemplateSection>
      </Container>
      <Heading>Or start with common Competitive Media Spend questions</Heading>
      <CommonQuestions>
        <QuestionContainer
          onClick={() => {
            handleQuestionClick("Question 1");
            setQuestionPicked("Question 1");
          }}
        >
          <Question>Common media spends question #1</Question>
          <Image src={rightArrow} alt="Descriptive Alt Text" />
        </QuestionContainer>
        <Line />
        <QuestionContainer
          onClick={() => {
            handleQuestionClick("Question 2");
            setQuestionPicked("Question 2");
          }}
        >
          <Question>Common media spends question #2</Question>
          <Image src={rightArrow} alt="Descriptive Alt Text" />
        </QuestionContainer>
        <Line />
        <QuestionContainer
          onClick={() => {
            handleQuestionClick("Question 3");
            setQuestionPicked("Question 3");
          }}
        >
          <Question>Common media spends question #3</Question>
          <Image src={rightArrow} alt="Descriptive Alt Text" />
        </QuestionContainer>
        <Line />
        <QuestionContainer
          onClick={() => {
            setQuestionPicked("Question 4");
            handleQuestionClick("Question 4");
          }}
        >
          <Question>Common media spends question #4</Question>
          <Image src={rightArrow} alt="Descriptive Alt Text" />
        </QuestionContainer>
      </CommonQuestions>
      {loading ? (
        <div style={{ display: "flex", flexDirection: "row" }}>
          <ProceesingImage src={proceesingImage} alt="Descriptive Alt Text" />
          <p style={{ color: "#20b0d3" }}>processing — turning the aqxle…</p>
        </div>
      ) : selectedQuestion === "chart" ? (
        <Graph />
      ) : (
        renderedContent.map((item) => <SampleData key={item.id} item={item} />)
      )}
      <InputContainer>
        <Input
          type="text"
          placeholder="Type your question"
          value={userInput}
          onChange={(e) => {
            console.log("🚀 ~ CommonQuestion ~ e:", e);
            setUserInput(e.target.value);
          }}
          onKeyDown={handleKeyDown}
        />
        <InputIconContainer
          style={{
            backgroundColor: userInput !== "" ? "#122E5A" : "#ededed",
          }}
          onClick={() => {
            handleQuestionClick(userInput);
          }}
        >
          {userInput !== "" ? (
            <InputIcon src={whiteArrow} alt="Right Icon" />
          ) : (
            <InputIcon src={arrowRight} alt="Search Icon" />
          )}
        </InputIconContainer>
      </InputContainer>
    </>
  );
};

export default CommonQuestion;
