/* eslint-disable react/prop-types */
import Container from "@mui/material/Container";
import AppBar from "@mui/material/AppBar";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const PersonalDetails = ({ nextPage, info, setInfo }) => {
  const changeHandler = (e) => {
    setInfo((prevInfo) => ({ ...prevInfo, [e.target.name]: e.target.value }));
  };
  return (
    <Container maxWidth="xs">
      <AppBar
        position="static"
        sx={{ p: 2, borderRadius: 2 }}
        variant="h2"
        component="h2"
      >
        Personal Details
      </AppBar>
      <TextField
        id="standard-basic"
        label="Name"
        variant="standard"
        sx={{ mt: 2 }}
        fullWidth
        name="name"
        value={info.name}
        onChange={changeHandler}
      />
      <TextField
        id="standard-basic"
        label="Title"
        variant="standard"
        sx={{ mt: 2 }}
        fullWidth
        name="title"
        value={info.title}
        onChange={changeHandler}
      />
      <TextField
        id="standard-basic"
        label="Email"
        variant="standard"
        sx={{ mt: 2 }}
        fullWidth
        name="email"
        value={info.email}
        onChange={changeHandler}
      />
      <TextField
        id="standard-basic"
        label="Mobile"
        variant="standard"
        sx={{ mt: 2 }}
        fullWidth
        name="mobile"
        value={info.mobile}
        onChange={changeHandler}
      />
      <TextField
        id="standard-basic"
        label="Address"
        variant="standard"
        sx={{ mt: 2 }}
        fullWidth
        name="address"
        value={info.address}
        onChange={changeHandler}
      />
      <TextField
        id="standard-basic"
        label="Website"
        variant="standard"
        sx={{ mt: 2 }}
        fullWidth
        name="website"
        value={info.website}
        onChange={changeHandler}
      />
      <TextField
        id="standard-basic"
        label="GitHub"
        variant="standard"
        sx={{ mt: 2 }}
        fullWidth
        name="github"
        value={info.github}
        onChange={changeHandler}
      />
      <div style={{ textAlign: "center" }}>
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

export default PersonalDetails;
