import { Route, Routes } from "react-router-dom";
import ReactFlowCom from "./reactflow";
import ThreeCom from "./three";
// import ObjUrl from '../public/'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<ReactFlowCom />}></Route>
      <Route path="/reactflow" element={<ReactFlowCom />} />
      <Route path="/three" element={<ThreeCom />}></Route>
    </Routes>
  );
}
