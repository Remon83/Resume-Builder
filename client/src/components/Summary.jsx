/* eslint-disable react/prop-types */
import { useState } from "react";
import Container from "@mui/material/Container";
import { AppBar, TextField, Button } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const Summary = ({ nextPage, prevPage, info, setInfo }) => {
  const [selectFromDate, setSelectFromDate] = useState(null);
  const [selectToDate, setSelectToDate] = useState(null);
  const [educationsCount, setEducationsCount] = useState(0);
  // console.log(selectDate.$M + 1);
  const changeHandler = (e) => {
    setInfo((prevInfo) => ({ ...prevInfo, [e.target.name]: e.target.value }));
  };
  const educationHandler = (e, index) => {
    setInfo((prevInfo) => {
      const updatedEducation = [...prevInfo.education];
      updatedEducation[index] = {
        ...updatedEducation[index],
        [e.target.name]: e.target.value,
      };
      return { ...prevInfo, education: updatedEducation };
    });
  };
  const fromDateSelectHandler = (newValue, index) => {
    setInfo((prevInfo) => {
      const updatedEducation = [...prevInfo.education];
      updatedEducation[index] = {
        ...updatedEducation[index],
        from: `${newValue?.$M + 1}, ${newValue?.$y}`,
      };
      return { ...prevInfo, education: updatedEducation };
    });
  };
  const toDateSelectHandler = (newValue, index) => {
    setInfo((prevInfo) => {
      const updatedEducation = [...prevInfo.education];
      updatedEducation[index] = {
        ...updatedEducation[index],
        to: `${newValue?.$M + 1}, ${newValue?.$y}`,
      };
      return { ...prevInfo, education: updatedEducation };
    });
  };
  const educationCountingHande = () => {
    setEducationsCount((prev) => prev + 1);
  };
  console.log(educationsCount);

  return (
    <Container maxWidth="sm">
      <AppBar
        position="static"
        sx={{ p: 2, borderRadius: 2 }}
        variant="h2"
        component="h2"
      >
        Professional Summary
      </AppBar>
      <TextField
        id="standard-multiline-static"
        label="Summary"
        multiline
        rows={5}
        // defaultValue="Default Value"
        variant="standard"
        sx={{ maxWidth: "100%", width: 550, mt: 2 }}
        name="summary"
        value={info.summary}
        onChange={changeHandler}
      />
      <TextField
        id="standard-basic"
        label="Skills"
        variant="standard"
        placeholder="Max. 5 skills(Ex: Responsive Design, Testing, ......)"
        sx={{ maxWidth: "100%", width: 550, mt: 2 }}
        name="skills"
        value={info.skills}
        onChange={changeHandler}
      />
      <TextField
        id="standard-basic"
        label="Technologies"
        variant="standard"
        placeholder="Max. 5 skills(Ex: HTML, CSS, ......)"
        sx={{ maxWidth: "100%", width: 550, mt: 2 }}
        name="technologies"
        value={info.technologies}
        onChange={changeHandler}
      />
      <p
        style={{
          fontFamily: "Arial",
          backgroundColor: "rgb(13 68 122)",
          padding: "10px",
          width: "fit-content",
          color: "white",
          borderRadius: "4px",
        }}
      >
        Education
      </p>
      <Button
        variant="contained"
        sx={{ alignItems: "center" }}
        onClick={educationCountingHande}
      >
        + Add one or more education
      </Button>
      {/* {educations} */}
      {[...Array(educationsCount)].map((edu, index) => (
        <div
          style={{
            outline: "1px solid #ccc",
            borderRadius: "2px",
            marginTop: "20px",
          }}
          key={index}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "10px",
              padding: "10px",
            }}
          >
            <TextField
              id="standard-basic"
              label="Degree"
              variant="filled"
              sx={{ maxWidth: "100%", width: 550, mt: 2 }}
              size="xsmall"
              name="degree"
              value={info?.education[index]?.degree}
              onChange={(e) => educationHandler(e, index)}
            />
            <TextField
              id="standard-basic"
              label="University"
              variant="filled"
              sx={{ maxWidth: "100%", width: 550, mt: 2 }}
              size="xsmall"
              name="university"
              value={info?.education[index]?.university}
              onChange={(e) => educationHandler(e, index)}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "10px",
              padding: "10px",
            }}
          >
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DatePicker"]}>
                <DatePicker
                  label={"From"}
                  views={["month", "year"]}
                  maxWidth="xs"
                  name="from"
                  renderInput={(params) => <TextField {...params} />}
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
                  renderInput={(params) => <TextField {...params} />}
                  value={selectToDate}
                  onChange={(newValue) => {
                    setSelectToDate(newValue);
                    toDateSelectHandler(newValue, index);
                  }}
                />
              </DemoContainer>
            </LocalizationProvider>
          </div>
        </div>
      ))}
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
          onClick={nextPage}
        >
          Next
        </Button>
      </div>
    </Container>
  );
};

export default Summary;
