import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 24px;
  color: ${({ textColor }) => textColor && textColor};
`;

const TestPage = () => {
  return <Title textColor={"#ff0000"}>테스트 페이지입니다.</Title>;
};

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/test" element={<TestPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
