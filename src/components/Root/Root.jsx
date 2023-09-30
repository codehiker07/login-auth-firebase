import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const Root = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-7">
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
