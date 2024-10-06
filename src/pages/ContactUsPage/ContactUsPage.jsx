import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import "./ContactUsPage.scss";

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Create a new FormData object from the form itself
    const formData = new FormData(e.target);
  
    // Append the access key
    formData.append("access_key", "9607198e-a093-48b2-884b-54dc0b8cad54");
  
    // Convert the FormData object to a regular object
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
  
    // Submit the form data
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());
  
    if (res.success) {
      console.log("Success", res);
    }
  };
  

  return (
    <section>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          maxWidth: "600px",
          margin: "auto",
          padding: 3,
          border: "1px solid #ccc",
          borderRadius: "8px",
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
        }}
      >
        <TextField
          label="Name and Surname"
          name="name"
          value={formData.name}
          variant="standard"
          onChange={handleChange}
          fullWidth
          required
          sx={{
            "& .MuiInputBase-input": {
              fontSize: {
                xs: "16px",
                sm: "24px",
              },
            },
            "& .MuiInputLabel-root": {
              fontSize: {
                xs: "16px",
                sm: "24px",
              },
            },
          }}
        />

        <TextField
          label="Email"
          name="email"
          value={formData.email}
          variant="standard"
          onChange={handleChange}
          type="email"
          fullWidth
          required
          sx={{
            "& .MuiInputBase-input": {
              fontSize: {
                xs: "16px",
                sm: "24px",
              },
            },
            "& .MuiInputLabel-root": {
              fontSize: {
                xs: "16px",
                sm: "24px",
              },
            },
          }}
        />

        <TextField
          label="Number"
          name="number"
          value={formData.number}
          variant="standard"
          onChange={handleChange}
          type="tel"
          fullWidth
          sx={{
            "& .MuiInputBase-input": {
              fontSize: {
                xs: "16px",
                sm: "24px",
              },
            },
            "& .MuiInputLabel-root": {
              fontSize: {
                xs: "16px",
                sm: "24px",
              },
            },
          }}
        />

        <TextField
          label="Message"
          name="message"
          value={formData.message}
          variant="standard"
          onChange={handleChange}
          multiline
          rows={4}
          fullWidth
          required
          sx={{
            "& .MuiInputBase-input": {
              fontSize: {
                xs: "16px",
                sm: "24px",
              },
            },
            "& .MuiInputLabel-root": {
              fontSize: {
                xs: "16px",
                sm: "24px",
              },
            },
          }}
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{
            backgroundColor: "#FF6F61",
            "&:hover": { backgroundColor: "#e65a50" },
            fontSize: {
              xs: "16px",
              sm: "22px", 
            },
          }}
        >
          Submit
        </Button>
      </Box>
    </section>
  );
}
