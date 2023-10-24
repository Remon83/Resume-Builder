/* eslint-disable react/prop-types */
import { Container, Box, Button, TextField, AppBar } from "@mui/material";

const Refernces = ({ nextPage, prevPage, info, setInfo }) => {
  const ref1ChangeHandler = (e) => {
    setInfo((prevInfo) => ({
      ...prevInfo,
      ref1: { ...prevInfo.ref1, [e.target.name]: e.target.value },
    }));
  };
  const ref2ChangeHandler = (e) => {
    setInfo((prevInfo) => ({
      ...prevInfo,
      ref2: { ...prevInfo.ref2, [e.target.name]: e.target.value },
    }));
  };
  return (
    <Container maxWidth="xs">
      <AppBar
        position="static"
        sx={{ p: 2, borderRadius: 2 }}
        variant="h2"
        component="h2"
      >
        References
      </AppBar>
      <Box
        sx={{
          outline: "1px solid #ccc",
          borderRadius: "4px",
          marginTop: "15px",
          padding: "10px",
        }}
      >
        <TextField
          id="standard-basic"
          label="Name"
          variant="standard"
          sx={{ mt: 2 }}
          fullWidth
          name="name"
          value={info.ref1.name}
          onChange={ref1ChangeHandler}
        />
        <TextField
          id="standard-basic"
          label="Company"
          variant="standard"
          sx={{ mt: 2 }}
          fullWidth
          name="company"
          value={info.ref1.company}
          onChange={ref1ChangeHandler}
        />
        <TextField
          id="standard-basic"
          label="Email"
          variant="standard"
          sx={{ mt: 2 }}
          fullWidth
          name="email"
          value={info.ref1.email}
          onChange={ref1ChangeHandler}
        />
        <TextField
          id="standard-basic"
          label="Mobile"
          variant="standard"
          sx={{ mt: 2 }}
          fullWidth
          name="mobile"
          value={info.ref1.mobile}
          onChange={ref1ChangeHandler}
        />
      </Box>
      <Box
        sx={{
          outline: "1px solid #ccc",
          borderRadius: "4px",
          marginTop: "15px",
          padding: "10px",
        }}
      >
        <TextField
          id="standard-basic"
          label="Name"
          variant="standard"
          sx={{ mt: 2 }}
          fullWidth
          name="name"
          value={info.ref2.name}
          onChange={ref2ChangeHandler}
        />
        <TextField
          id="standard-basic"
          label="Company"
          variant="standard"
          sx={{ mt: 2 }}
          fullWidth
          name="company"
          value={info.ref2.company}
          onChange={ref2ChangeHandler}
        />
        <TextField
          id="standard-basic"
          label="Email"
          variant="standard"
          sx={{ mt: 2 }}
          fullWidth
          name="email"
          value={info.ref2.email}
          onChange={ref2ChangeHandler}
        />
        <TextField
          id="standard-basic"
          label="Mobile"
          variant="standard"
          sx={{ mt: 2 }}
          fullWidth
          name="mobile"
          value={info.ref2.mobile}
          onChange={ref2ChangeHandler}
        />
      </Box>

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

export default Refernces;
