/* eslint-disable react/prop-types */
import { useState } from "react";
import { AppBar, TextField, Button, Container } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const WorkExperience = ({
  prevPage,
  downloadHandler,
  info,
  setInfo,
  setPageNo,
}) => {
  const [selectFromDate, setSelectFromDate] = useState(null);
  const [selectToDate, setSelectToDate] = useState(null);
  const [experienceCount, setExperienceCount] = useState(0);
  console.log(selectToDate);
  const experienceCountingHande = () => {
    setExperienceCount((prev) => prev + 1);
  };

  const experienceHandler = (e, index) => {
    setInfo((prevInfo) => {
      const updatedExperience = [...prevInfo.experience];
      updatedExperience[index] = {
        ...updatedExperience[index],
        [e.target.name]: e.target.value,
      };
      return { ...prevInfo, experience: updatedExperience };
    });
  };
  const getMonthName = (monthNumber) => {
    const date = new Date(2023, monthNumber - 1);
    return date.toLocaleString("default", { month: "short" });
  };
  const fromDateSelectHandler = (newValue, index) => {
    setInfo((prevInfo) => {
      const updatedExperience = [...prevInfo.experience];
      updatedExperience[index] = {
        ...updatedExperience[index],
        from: `${getMonthName(newValue?.$M + 1)}, ${newValue?.$y}`,
      };
      return { ...prevInfo, experience: updatedExperience };
    });
  };

  const toDateSelectHandler = (newValue, index) => {
    setInfo((prevInfo) => {
      const updatedExperience = [...prevInfo.experience];
      updatedExperience[index] = {
        ...updatedExperience[index],
        to: `${getMonthName(newValue?.$M + 1)}, ${newValue?.$y}`,
      };
      return { ...prevInfo, experience: updatedExperience };
    });
  };

  const resetHandle = () => {
    setInfo({
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
    setPageNo(1);
  };
  return (
    <Container maxWidth="sm">
      <AppBar
        position="static"
        sx={{ p: 2, borderRadius: 2 }}
        variant="h2"
        component="h2"
      >
        Work Experience
      </AppBar>
      <Button
        variant="contained"
        sx={{ mt: 2, alignItems: "center" }}
        onClick={experienceCountingHande}
      >
        + Add one or more experience
      </Button>
      {[...Array(experienceCount)].map((exp, index) => (
        <div
          style={{
            outline: "1px solid #ccc",
            borderRadius: "2px",
            marginTop: "15px",
            padding: "10px",
          }}
          key={index}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "20px",
              padding: "10px",
            }}
          >
            <TextField
              id="standard-basic"
              label="Title"
              variant="filled"
              sx={{ maxWidth: "100%", width: 550, mt: 2 }}
              name="title"
              value={info?.experience[index]?.title}
              onChange={(e) => experienceHandler(e, index)}
            />
            <TextField
              id="standard-basic"
              label="Employer"
              variant="filled"
              sx={{ maxWidth: "100%", width: 550, mt: 2 }}
              name="employer"
              value={info?.experience[index]?.employer}
              onChange={(e) => experienceHandler(e, index)}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "20px",
              padding: "10px",
            }}
          >
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DatePicker"]}>
                <DatePicker
                  label={"From"}
                  views={["month", "year"]}
                  maxWidth="xs"
                  value={selectFromDate}
                  onChange={(newValue) => {
                    setSelectFromDate(newValue);
                    fromDateSelectHandler(newValue, index);
                  }}
                />
              </DemoContainer>
            </LocalizationProvider>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DatePicker"]}>
                <DatePicker
                  label={"To"}
                  views={["month", "year"]}
                  maxWidth="xs"
                  value={selectToDate}
                  onChange={(newValue) => {
                    setSelectToDate(newValue);
                    toDateSelectHandler(newValue, index);
                  }}
                />
              </DemoContainer>
            </LocalizationProvider>
          </div>
          <div style={{ padding: "10px" }}>
            <TextField
              id="standard-multiline-static"
              label="Description"
              multiline
              rows={5}
              // defaultValue="Default Value"
              variant="filled"
              // sx={{ maxWidth: "100%", width: 550, mt: 2 }}
              fullWidth
              name="description"
              value={info?.experience[index]?.description}
              onChange={(e) => experienceHandler(e, index)}
            />
          </div>
        </div>
      ))}
      <hr />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Button
          variant="contained"
          sx={{ mt: 2, alignItems: "center" }}
          onClick={prevPage}
        >
          Previous
        </Button>
        <Button
          variant="contained"
          sx={{ mt: 2, alignItems: "center" }}
          onClick={resetHandle}
        >
          Reset
        </Button>
        <Button
          variant="contained"
          sx={{ mt: 2, alignItems: "center" }}
          color="success"
          onClick={downloadHandler}
        >
          Download Resume
        </Button>
      </div>
    </Container>
  );
};

export default WorkExperience;
