import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import logo from "../../assets/company_logo.png";
import edit from "../../assets/edit.png";
import bookMark from "../../assets/bookmark.png";
import folder from "../../assets/folder.png";
import settings from "../../assets/settings.png";
import userprofile from "../../assets/user_profile.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faSearch } from "@fortawesome/free-solid-svg-icons";
import Save from "../../assets/save.png";
import SaveModal from "../SaveModal/SaveModal";

// Styled components (same as your current code)

const Container = styled.div`
  display: grid;
  grid-template-areas:
    "sidebar header"
    "sidebar main";
  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;
  background-color: #f3f3f3;

  @media (max-width: 768px) {
    grid-template-areas:
      "header"
      "main";
    grid-template-columns: 1fr;
  }
`;
const Header = styled.header`
  grid-area: header;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px;
  background-color: #ffffff;
`;
const Sidebar = styled.aside`
  grid-area: sidebar;
  background-color: rgba(32, 176, 211, 0.1);
  padding: 20px;
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 94%;

  @media (max-width: 768px) {
    display: none;
  }
`;
const Main = styled.main`
  grid-area: main;
  padding: 20px;
  overflow-y: auto;
`;
const Image = styled.img`
  width: 70%;
  max-width: 200px;
  height: auto;
  border-radius: 10px;
  margin-bottom: 20px;
  align-self: center;
`;
const Heading = styled.h3`
  font-size: 1rem;
  color: #fff;
  line-height: 24px;
  letter-spacing: 0.22px;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
`;
const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  background-color: #20b0d3;
  border-radius: 12px;
  justify-content: center;
  padding: 0px;
`;
const WorkspaceHeading = styled.h3`
  font-size: 12px;
  color: #000;
  line-height: 24px;
  letter-spacing: 0.22px;
  font-weight: 400;
`;
const WorkSpaceContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  gap: 10px;
  justify-content: space-between;
  margin-top: 12px;
`;
const Subheading = styled.p`
  color: #707070;
`;
const Sidebartext = styled.p`
  font-size: 18px;
  font-weight: 500;
  line-height: 18px;
  color: #707070;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
`;
const ButtonContainer = styled.div`
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
    &:hover ${Subheading} {
      color: rgba(
        32,
        176,
        211,
        1
      ); /* Different color for subheading on hover */
    }
    &:hover ${Sidebartext} {
      color: #000; /* Change color on hover */
    }
  }
`;
const EditImage = styled.img`
  width: 26px;
  height: 26px;
  margin-left: 10px;
  margin-top: 8px;
`;
const SaveContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100px;
  gap: 20px;
`;

const Label = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  color: ${(props) => props.clicked && "rgba(238, 238, 238, 1)"};
`;

const HorizontalLine = styled.div`
  height: 100%;
  width: 1px;
  background-color: #ccc;
  margin: 0 20px;
`;

const SaveButton = styled.button`
  background: none;
  border: none;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin-right: 20px;
  color: ${(props) => props.clicked && "rgba(238, 238, 238, 1)"};
  background-color: ${(props) => props.clicked && "rgba(18, 46, 90, 1)"};

  &:focus {
    outline: none;
  }
`;
const Icon = styled.div`
  font-size: 32px;
  margin-bottom: 5px;
`;

const Badge = styled.div`
  background-color: #1f1f7a;
  color: white;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -10px;
  right: -10px;
`;
const SidebarFooter = styled.div`
  background-color: #20b0d3;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  margin-top: auto; /* Pushes the footer to the bottom */
  color: white;
  font-size: 14px;
`;
const UserName = styled.span`
  margin-left: 10px;
`;
const FooterIcon = styled.div`
  margin-left: auto;
`;
const SettingImage = styled.img`
  width: 20px;
  height: 20px;
`;
const ProfileImage = styled.img`
  width: 36px;
  height: 36px;
`;

// Function to get current time
const getCurrentTime = () => {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  return `${hours}:${minutes}`;
};

const Dashboard = () => {
  const [currentTime, setCurrentTime] = useState(getCurrentTime());
  const [isClicked, setIsClicked] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(getCurrentTime());
    }, 60000); // Update time every minute

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  const handleClick = () => {
    console.log("Container clicked");
  };

  return (
    <Container>
      <Header>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <h2 style={{ fontFamily: "inherit" }}>
            July 10 - Competitive Spends - {currentTime}
          </h2>
          <EditImage src={edit} alt="Edit" />
        </div>
        <SaveContainer>
        <HorizontalLine />
          <SaveButton
            clicked={isClicked}
            onClick={() => setIsClicked(!isClicked)}
          >
            <Label clicked={isClicked}>SAVED</Label>
            <EditImage src={isClicked ? Save : bookMark} alt="Bookmark" />
          </SaveButton>
          {isClicked && <SaveModal />}
          <HorizontalLine />
          <SaveButton>
            <Label>FILES</Label>
            <EditImage src={folder} alt="Folder" />
            <Badge>2</Badge>
          </SaveButton>
        </SaveContainer>
      </Header>
      <Sidebar>
        <Image src={logo} alt="logo" />
        <StyledContainer>
          <FontAwesomeIcon icon={faPlus} size="1x" color="#fff" />
          <Heading>NEW WORKSPACE</Heading>
        </StyledContainer>
        <WorkSpaceContainer>
          <WorkspaceHeading>WORKSPACES</WorkspaceHeading>
          <FontAwesomeIcon icon={faSearch} size="1x" color="#000" />
        </WorkSpaceContainer>

        <ButtonContainer onClick={handleClick}>
          <Sidebartext>July 10 - Competitive Spends</Sidebartext>
          <Subheading>10 JUL 2024 / 9:23 AM</Subheading>
        </ButtonContainer>
        <ButtonContainer onClick={handleClick}>
          <Sidebartext>Annual Spends - Health Foods</Sidebartext>
          <Subheading>21 JUN 2024 / 03:28 PM </Subheading>
        </ButtonContainer>
        <ButtonContainer onClick={handleClick}>
          <Sidebartext>US North West Insights Q1 '24</Sidebartext>
          <Subheading>03 JUN 2024 / 7:11 AM</Subheading>
        </ButtonContainer>
        <SidebarFooter>
          <ProfileImage src={userprofile} alt="Profile" />
          <UserName>Steve Lomingo</UserName>
          <FooterIcon>
            <SettingImage src={settings} alt="Settings" />
          </FooterIcon>
        </SidebarFooter>
      </Sidebar>
      <Main>
        <Outlet />
      </Main>
    </Container>
  );
};

export default Dashboard;
