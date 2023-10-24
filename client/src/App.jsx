import { useState } from "react";
import axios from "axios";
import { saveAs } from "file-saver";
import "./App.css";
import PersonalDetails from "./components/PersonalDetails";
import Summary from "./components/Summary";
import WorkExperience from "./components/WorkExperience";
import Refernces from "./components/Refernces";

function App() {
  const [pageNo, setPageNo] = useState(1);
  const [info, setInfo] = useState({
    name: "",
    title: "",
    email: "",
    mobile: "",
    address: "",
    website: "",
    github: "",
    summary: "",
    skills: [],
    technologies: [],
    education: [],
    ref1: {
      name: "",
      company: "",
      email: "",
      mobile: "",
    },
    ref2: {
      name: "",
      company: "",
      email: "",
      mobile: "",
    },
    experience: [],
  });
  const nextPage = () => {
    setPageNo(pageNo + 1);
  };
  const prevPage = () => {
    setPageNo(pageNo - 1);
  };

  // const changeHandler = (e) => {
  //   setInfo((prevInfo) => {
  //     const updatedInfo = { ...prevInfo, [e.target.name]: e.target.value };
  //     console.log(updatedInfo);
  //     return updatedInfo;
  //   });
  // };
  console.log(pageNo);
  const downloadHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/create-pdf", info)
      .then(() =>
        axios.get("http://localhost:5000/fetch-pdf", { responseType: "blob" })
      )
      .then((res) => {
        const pdfBlob = new Blob([res.data], { type: "application/pdf" });
        saveAs(pdfBlob, "response.pdf");
        // setInfo((prev) => {
        //   const resetInfo = { ...prev, firstName: "", lastName: "" };
        //   console.log(resetInfo);
        //   return resetInfo;
        // });
      });
  };
  console.log(info);
  return (
    <div className="App">
      {/* <form onSubmit={downloadHandler}>
        <input
          type="text"
          name="firstName"
          onChange={changeHandler}
          value={info.firstName}
        />
        <input
          type="text"
          name="lastName"
          onChange={changeHandler}
          value={info.lastName}
        />
        <button type="submit">Download PDF</button>
      </form> */}
      {(() => {
        switch (pageNo) {
          case 1:
            return (
              <PersonalDetails
                nextPage={nextPage}
                info={info}
                setInfo={setInfo}
              />
            );
          case 2:
            return (
              <Summary
                nextPage={nextPage}
                prevPage={prevPage}
                info={info}
                setInfo={setInfo}
              />
            );
          case 3:
            return (
              <Refernces
                nextPage={nextPage}
                prevPage={prevPage}
                info={info}
                setInfo={setInfo}
              />
            );
          case 4:
            return (
              <WorkExperience
                nextPage={nextPage}
                prevPage={prevPage}
                info={info}
                setInfo={setInfo}
                downloadHandler={downloadHandler}
                setPageNo={setPageNo}
              />
            );
          default:
            return (
              <PersonalDetails
                nextPage={nextPage}
                info={info}
                setInfo={setInfo}
              />
            );
        }
      })()}
    </div>
  );
}
export default App;
