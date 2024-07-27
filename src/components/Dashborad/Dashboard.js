import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faSearch } from "@fortawesome/free-solid-svg-icons";
import { useTable } from "react-table";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import logo from "../../assets/company_logo.png";

// Styled components
const Container = styled.div`
  display: grid;
  grid-template-areas:
    "header header"
    "sidebar main";
  grid-template-columns: auto 1fr;
  gap: 20px;
  padding: 20px;

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
  padding: 10px;
  background-color: rgba(32, 176, 211, 0.1);
  border-bottom: 1px solid #dee2e6;
`;

const Sidebar = styled.aside`
  grid-area: sidebar;
  background-color: rgba(32, 176, 211, 0.1);
  border-right: 1px solid #dee2e6;
  padding: 20px;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Main = styled.main`
  grid-area: main;
  padding: 20px;
`;

const WorkspaceList = styled.div`
  margin-bottom: 20px;
`;

const WorkspaceItem = styled.div`
  margin-bottom: 10px;
`;

const FileList = styled.div`
  margin: 10px 0;
`;

const Dropdown = styled.select`
  width: 100%;
  max-width: 300px;
  margin: 20px 0;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin-top: 10px;
  cursor: pointer;
`;

const CommonQuestions = styled.div`
  margin-top: 20px;
`;

const Question = styled.div`
  margin: 10px 0;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-top: 20px;
  box-sizing: border-box;
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
  margin-bottom: 20px;
  color: #fff;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;

  th,
  td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }

  th {
    background-color: #f2f2f2;
  }
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center; 
  gap: 10px; 
  background-color: #20b0d3;
  border-radius: 12px;
  justify-content: center;
`;

const GraphContainer = styled.div`
  width: 100%;
  height: 300px;
  margin: 20px 0;
`;

const WorkspaceHeading = styled.h3`
  font-size: 1rem;
  margin-bottom: 20px;
  color: #000;
`;

const WorkSpaceContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  justify-content: center;
`;

// Function to get current time
const getCurrentTime = () => {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  return `${hours}:${minutes}`;
};

// Sample data for table and graph
const tableData = [
  { title1: "data 1", title2: "sugarcup", title3: "200" },
  { title1: "data 1", title2: "sugarcup", title3: "150" },
  { title1: "data 1", title2: "sugarcup", title3: "300" },
  { title1: "data 1", title2: "sugarcup", title3: "250" },
];

const graphData = [
  { name: "Page A", data1: 100, data2: 200, data3: 300 },
  { name: "Page B", data1: 150, data2: 250, data3: 350 },
  { name: "Page C", data1: 200, data2: 300, data3: 150 },
  { name: "Page D", data1: 250, data2: 350, data3: 200 },
  { name: "Page E", data1: 300, data2: 150, data3: 100 },
  { name: "Page F", data1: 350, data2: 200, data3: 250 },
  { name: "Page G", data1: 400, data2: 250, data3: 300 },
];

// Main component
const Dashboard = () => {
  const [currentTime, setCurrentTime] = useState(getCurrentTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(getCurrentTime());
    }, 60000); // Update time every minute

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  // Table columns
  const columns = React.useMemo(
    () => [
      {
        Header: "Title 1",
        accessor: "title1",
      },
      {
        Header: "Title 2",
        accessor: "title2",
      },
      {
        Header: "Title 3",
        accessor: "title3",
      },
    ],
    []
  );

  const data = React.useMemo(() => tableData, []);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <Container>
      <Header>
        <h2>July 10 - Competitive Spends - {currentTime}</h2>
        <div>
          <button>SAVED</button>
          <button>FILES</button>
        </div>
      </Header>
      <Sidebar>
        <Image src={logo} alt="logo" />
        <StyledContainer>
          <FontAwesomeIcon icon={faPlus} size="1x" color="#fff" />
          <Heading>NEW WORKSPACE</Heading>
        </StyledContainer>
        <WorkSpaceContainer>
          <FontAwesomeIcon icon={faSearch} size="1x" color="#000" />
          <WorkspaceHeading>WORKSPACES</WorkspaceHeading>
        </WorkSpaceContainer>

        <p>July 10 - Competitive Spends</p>
        <p>10 JUL 2024 /  9:23 AM</p>
        <p>Annual Spends - Health Foods</p>
        <p>21 JUN 2024 / 03:28 PM </p>
        <p>US North West Insights Q1 '24</p>
        <p>03 JUN 2024 /  7:11 AM</p>
      </Sidebar>
      <Main>
        <h2>July 10 - Competitive Spends - {currentTime}</h2>
        <Image src="path/to/your/image.jpg" alt="Descriptive Alt Text" />
        <p>Successfully uploaded to workspace</p>
        <FileList>
          <a href="#">FinQ12022_1151511_1151512_export.csv</a>
          <a href="#">FinQ22022_1151511_1151513_export.csv</a>
        </FileList>
        <Dropdown>
          <option>15 questions for Cr Card spends</option>
        </Dropdown>
        <Button>Analyze</Button>
        <CommonQuestions>
          <Question>Common media spends question #1</Question>
          <Question>Common media spends question #2</Question>
          <Question>Common media spends question #3</Question>
          <Question>Common media spends question #4</Question>
        </CommonQuestions>
        <Input type="text" placeholder="Type your question" />

        {/* Table */}
        <Table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </Table>

        {/* Graph */}
        <GraphContainer>
          <ResponsiveContainer>
            <BarChart data={graphData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis domain={[0, 400]} tickCount={9} />
              <YAxis
                yAxisId="right"
                orientation="right"
                domain={[0, 400]}
                tickCount={9}
              />
              <Tooltip />
              <Legend />
              <Bar dataKey="data1" fill="#ef8735" />
              <Bar dataKey="data2" fill="#8e69b8" />
              <Line
                type="monotone"
                dataKey="data3"
                stroke="#ff7300"
                yAxisId="right"
                strokeWidth={2}
              />
            </BarChart>
          </ResponsiveContainer>
        </GraphContainer>
      </Main>
    </Container>
  );
};

export default Dashboard;
