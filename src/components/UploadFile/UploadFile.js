import React, { useState } from "react";
import styled from "styled-components";
import dropfiles from "../../assets/dropfiles.png";
import { useNavigate } from "react-router-dom";
// import axios from 'axios';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #f3f3f3;
`;

const UploadBox = styled.div`
  width: 80%;
  padding: 54px 72px;
  border: 1px dashed #ccc;
  border-radius: 10px;
  text-align: center;
  background-color: #fff;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

const UploadInput = styled.input`
  display: none;
`;

const UploadLabel = styled.label`
  display: block;
  margin-bottom: 10px;
  font-size: 18px;
  color: #007bff;
  cursor: pointer;
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 20px;
  background-color: #f3f3f3;
  border-radius: 10px;
  margin-top: 20px;
  overflow: hidden;
`;

const Progress = styled.div`
  height: 100%;
  width: ${(props) => props.progress}%;
  background-color: #4caf50;
  transition: width 0.3s;
`;

const SupportLabel = styled.div`
  color: rgba(47, 47, 47, 1);
  font-weight: 300;
  font-size: 16px;
  line-height: 20px;
  font-family: Helvetica;
`;

// Define the styled spans
const HighlightedText = styled.span`
  color: rgba(32, 176, 211, 1);
  margin-right: 10px;
`;

const IconContainer = styled.div`
  background-color: rgba(237, 239, 244, 1);
  height: 40px;
  width: 40px;
  align-items: center;
  justify-content: center;
  display: flex;
  border-radius: 50%;
`;
const Image = styled.img`
  height: 20px;
  width: 20px;
`;

const UploadFile = () => {
  const navigate = useNavigate();
  const [file, setFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setTimeout(() => {
        navigate("/commonquestions");
    },[3000])
  };

  const handleFileUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    // try {
    //   await axios.post('YOUR_UPLOAD_ENDPOINT', formData, {
    //     onUploadProgress: (progressEvent) => {
    //       const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
    //       setUploadProgress(percentCompleted);
    //     }
    //   });
    //   // Handle successful upload
    // } catch (error) {
    //   console.error('Error uploading file:', error);
    //   // Handle error
    // }
  };
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDragEnter = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);

    const droppedFiles = e.dataTransfer.files;
    if (droppedFiles.length > 0) {
      setFile(droppedFiles[0]);
    }
  };

  return (
    <Container>
      <UploadLabel htmlFor="fileUpload">
        <UploadBox
          isDragging={isDragging}
          onDragOver={handleDragOver}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <IconContainer>
            <Image src={dropfiles} alt="Descriptive Alt Text" />
          </IconContainer>
          <div style={{ display: "flex" }}>
            <HighlightedText>Browse </HighlightedText>
            <span style={{ color: "rgba(47, 47, 47, 1)" }}>
              or drag your file(s) here
            </span>
          </div>

          <SupportLabel>
            Supported formats: CSV / TSV, XLS, Parquet, fixed width text files
          </SupportLabel>
          <UploadInput
            id="fileUpload"
            type="file"
            onChange={handleFileChange}
          />
          {file && (
            <div>
              <p>File: {file.name}</p>
              {/* <button onClick={handleFileUpload}>Upload</button>
              <ProgressBar>
                <Progress progress={uploadProgress} />
              </ProgressBar> */}
            </div>
          )}
        </UploadBox>
      </UploadLabel>
    </Container>
  );
};

export default UploadFile;
