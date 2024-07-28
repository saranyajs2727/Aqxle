// import React from "react";
// import Dashboard from "./components/Dashborad/Dashboard";
// import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
// import Graph from "./components/Graph/Graph";
// import CommonQuestion from "./components/commonQuestion/CommonQuestion";
// import Table from "./components/Table/Table";
// import InsightWorkSpace from "./components/InsightWorkSpace/InsightWorkSpace";
// import UploadFile from "./components/UploadFile/UploadFile";

// const App = () => {
//   return (
//     // <div>
//     //     //   <GlobalStyle />
//     //     //   <Dashboard />

//     //     // </div>
//     <Router>
//       <Routes>
//         <Route path="/" element={<Dashboard />}>
//           <Route index element={<InsightWorkSpace />} />
//           <Route path="commonquestions" element={<CommonQuestion />} />
//           <Route path="table" element={<Table />} />
//           <Route path="/graph" element={<Graph />} />
//           <Route path="/uploadfile" element={<UploadFile />} />
//         </Route>
//       </Routes>
//     </Router>
//   );
// };

// export default App;
import React from "react";
import Dashboard from "./components/Dashborad/Dashboard";
import { HashRouter as Router, Route, Routes, Link } from "react-router-dom";
import Graph from "./components/Graph/Graph";
import CommonQuestion from "./components/commonQuestion/CommonQuestion";
import Table from "./components/Table/Table";
import InsightWorkSpace from "./components/InsightWorkSpace/InsightWorkSpace";
import UploadFile from "./components/UploadFile/UploadFile";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route index element={<InsightWorkSpace />} />
          <Route path="commonquestions" element={<CommonQuestion />} />
          <Route path="table" element={<Table />} />
          <Route path="graph" element={<Graph />} />
          <Route path="uploadfile" element={<UploadFile />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
