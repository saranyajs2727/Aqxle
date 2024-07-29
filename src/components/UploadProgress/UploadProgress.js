import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f0f0;
`;

const ProgressBarContainer = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  height: 50px;
  background-color: #e0e0e0;
  border-radius: 5px;
  overflow: hidden;
`;

const ProgressBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: ${(props) => props.progress}%;
  background-color: #122e5a;
  transition: width 0.5s ease-in-out;
  color: white;
  font-weight: bold;
  font-size: 18px;
`;

const FileDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 10px;
`;

const UploadingText = styled.div`
  color: white;
  font-size: 16px;
`;

const FileName = styled.div`
  color: white;
  font-size: 14px;
`;

const UploadingUI = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        const randomIncrement = Math.floor(Math.random() * 10) + 1; // Random increment between 1 and 10
        const nextProgress = prevProgress + randomIncrement;
        return nextProgress >= 100 ? 100 : nextProgress;
      });
    }, 500); // Update progress every 500ms

    return () => clearInterval(interval);
  }, []);

  return (
    <Container>
      <ProgressBarContainer>
        <ProgressBar progress={progress}>
          <FileDetails>
            <UploadingText>Uploading...</UploadingText>
            <FileName>FinQ12022_1151511_1151512_export.csv</FileName>
            <div>{progress}%</div>
          </FileDetails>
        </ProgressBar>
      </ProgressBarContainer>
    </Container>
  );
};

export default UploadingUI;
