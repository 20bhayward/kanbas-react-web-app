import EncodingParametersInURLs from "./EncodingParametersInURLs";
import WorkingWithArrays from "./WorkingWithArrays";
import WorkingWithObjects from "./WorkingWithObjects";

function Assignment5() {
  return (
    <div>
      <h1>Assignment 5</h1>
      <a href={`${process.env.REACT_APP_API_BASE}/a5/welcome`}>Welcome</a>
      <EncodingParametersInURLs />
      <WorkingWithObjects />
      <WorkingWithArrays />
    </div>
  );
}
  export default Assignment5;