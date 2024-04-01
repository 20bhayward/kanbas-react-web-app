import { FaGlasses } from "react-icons/fa";
import ModuleList from "../Modules/List";
import Status from "./Status";


function Home() {
    return (
        <div className="d-flex">
          <div className="flex-grow-1">
            <br/>
            <h2>Home</h2>
            <ModuleList />
          </div>
          <Status />
        
        </div>
      );
}
export default Home;