import React from 'react';
import styled from 'styled-components';
import share from "../../assets/share.png";
import images from "../../assets/images.png";
import download from "../../assets/download.png";

const Sidebar = styled.div`
  position: fixed;
  top: 122px;
  right: 114px;
  width: 300px;
  background-color: #0a2540;
  color: #ffffff;
  padding: 20px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
`;

const SidebarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const SavedText = styled.div`
  font-size: 14px;
`;

const SidebarTitle = styled.h2`
  font-size: 16px;
  margin: 0;
`;

const IconButton = styled.button`
  background: none;
  border: none;
  color: #ffffff;
  cursor: pointer;
  font-size: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Button = styled.button`
  background-color: #5aa3d4;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  margin: 5px 0;
  cursor: pointer;
  font-size: 14px;
  width: 100%;
  align-items: center;
  align-self: center;
  display: flex;
  justify-content: space-evenly;

  &:hover {
    background-color: #4990c1;
  }

  &:focus {
    outline: none;
  }
`;

const EditImage = styled.img`
width: 24px;
height: 24px;
`;

const SaveModal = () => {
  return (
    <Sidebar>
      <SidebarHeader>
        <SavedText>1 chart or analysis saved</SavedText>
        <IconButton>
          <i className="fa fa-bookmark" aria-hidden="true"></i> SAVED
        </IconButton>
      </SidebarHeader>
      <ButtonContainer>
        <Button>
          <EditImage src={images} alt="Edit" />
          <i className="fa fa-image" aria-hidden="true"></i> Download as images
        </Button>
        <Button>
        <EditImage src={download} alt="Edit" />
          <i className="fa fa-file-pdf" aria-hidden="true"></i> Download as PDF
        </Button>
        <Button>
        <EditImage src={share} alt="Edit" />
          <i className="fa fa-envelope" aria-hidden="true"></i> Share by email
        </Button>
      </ButtonContainer>
    </Sidebar>
  );
};

export default SaveModal;
