import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Question1 from "../pages/Question1";
import Question2 from "../pages/Question2";
import Question3 from "../pages/Question3";
import NotFound from "../components/NotFound";

const Router = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/questao1" element={<Question1 />} />
        <Route path="/questao2" element={<Question2 />} />
        <Route path="/questao3" element={<Question3 />} />
        <Route path="*" element={<NotFound />} />


      </Routes>
    </BrowserRouter>
  );
};
export default Router;  