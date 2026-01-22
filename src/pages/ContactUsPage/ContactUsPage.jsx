import { useState } from "react";
import { TextField, Button, Box, ToggleButton, ToggleButtonGroup, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, Alert } from "@mui/material";
import { useTranslation } from "react-i18next";
import "./ContactUsPage.scss";

export default function ContactUsPage() {
  const { t } = useTranslation();
  const [formType, setFormType] = useState("private"); // "contact" or "private"
  const [showSuccess, setShowSuccess] = useState(false);

  const [contactFormData, setContactFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  const [privateFormData, setPrivateFormData] = useState({
    dateFrom: "",
    dateTo: "",
    timeFrom: "",
    timeTo: "",
    guests: "",
    phone: "",
    email: "",
    requirements: "",
    catering: "no",
  });

  const handleFormTypeChange = (event, newFormType) => {
    if (newFormType !== null) {
      setFormType(newFormType);
    }
  };

  const handleContactFormChange = (e) => {
    const { name, value } = e.target;
    setContactFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePrivateFormChange = (e) => {
    const { name, value } = e.target;
    setPrivateFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a new FormData object from the form itself
    const formData = new FormData(e.target);

    // Append the access key, form type, and custom subject
    formData.append("access_key", "56ed0f1d-9644-46b8-9dcd-4bed2f75b8b7");

    if (formType === "contact") {
      formData.append("subject", "New Contact Form Submission - Paint & Wine");
      formData.append("from_name", "Paint & Wine Contact Form");
    } else {
      formData.append("subject", "New Private Event Request - Paint & Wine");
      formData.append("from_name", "Paint & Wine Private Event");
    }

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

      // Show success message
      setShowSuccess(true);

      // Hide success message after 5 seconds
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);

      // Reset the appropriate form
      if (formType === "contact") {
        setContactFormData({ name: "", email: "", number: "", message: "" });
      } else {
        setPrivateFormData({
          dateFrom: "",
          dateTo: "",
          timeFrom: "",
          timeTo: "",
          guests: "",
          phone: "",
          email: "",
          requirements: "",
          catering: "no",
        });
      }
    }
  };
  

  return (
      <Box sx={{ maxWidth: "900px", margin: "auto", padding: 3 }}>
        {/* Page Heading */}
        <h1 style={{marginBottom: "10px"}} className="page-header">
          {t("contact-page-heading")}
        </h1>

        {/* Success Message */}
        {showSuccess && (
          <Alert
            severity="success"
            sx={{
              marginBottom: 3,
              fontSize: { xs: "14px", sm: "18px" },
              "& .MuiAlert-icon": {
                fontSize: { xs: "20px", sm: "24px" },
              },
            }}
          >
            {t("form-success-message")}
          </Alert>
        )}

        {/* Toggle Switch */}
        <ToggleButtonGroup
          value={formType}
          exclusive
          onChange={handleFormTypeChange}
          sx={{
            width: "100%",
            marginBottom: 3,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <ToggleButton
            value="contact"
            sx={{
              flex: 1,
              fontSize: { xs: "14px", sm: "18px" },
              padding: { xs: "8px", sm: "12px" },
              backgroundColor: formType === "contact" ? "#FF6F61" : "white",
              color: formType === "contact" ? "white" : "#FF6F61",
              "&:hover": {
                backgroundColor: formType === "contact" ? "#e65a50" : "#ffe5e3",
              },
              "&.Mui-selected": {
                backgroundColor: "#FF6F61",
                color: "white",
                "&:hover": {
                  backgroundColor: "#e65a50",
                },
              },
            }}
          >
            {t("form-toggle-contact")}
          </ToggleButton>
          <ToggleButton
            value="private"
            sx={{
              flex: 1,
              fontSize: { xs: "14px", sm: "18px" },
              padding: { xs: "8px", sm: "12px" },
              backgroundColor: formType === "private" ? "#FF6F61" : "white",
              color: formType === "private" ? "white" : "#FF6F61",
              "&:hover": {
                backgroundColor: formType === "private" ? "#e65a50" : "#ffe5e3",
              },
              "&.Mui-selected": {
                backgroundColor: "#FF6F61",
                color: "white",
                "&:hover": {
                  backgroundColor: "#e65a50",
                },
              },
            }}
          >
            {t("form-toggle-private")}
          </ToggleButton>
        </ToggleButtonGroup>

        {/* Contact Form */}
        {formType === "contact" && (
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              padding: 3,
              border: "1px solid #ccc",
              borderRadius: "8px",
              boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
            }}
          >
            <TextField
              label={t("contact-form-name")}
              name="name"
              value={contactFormData.name}
              variant="standard"
              onChange={handleContactFormChange}
              fullWidth
              required
              sx={{
                "& .MuiInputBase-input": {
                  fontSize: { xs: "16px", sm: "24px" },
                },
                "& .MuiInputLabel-root": {
                  fontSize: { xs: "16px", sm: "24px" },
                },
              }}
            />

            <TextField
              label={t("contact-form-email")}
              name="email"
              value={contactFormData.email}
              variant="standard"
              onChange={handleContactFormChange}
              type="email"
              fullWidth
              required
              sx={{
                "& .MuiInputBase-input": {
                  fontSize: { xs: "16px", sm: "24px" },
                },
                "& .MuiInputLabel-root": {
                  fontSize: { xs: "16px", sm: "24px" },
                },
              }}
            />

            <TextField
              label={t("contact-form-number")}
              name="number"
              value={contactFormData.number}
              variant="standard"
              onChange={handleContactFormChange}
              type="tel"
              fullWidth
              sx={{
                "& .MuiInputBase-input": {
                  fontSize: { xs: "16px", sm: "24px" },
                },
                "& .MuiInputLabel-root": {
                  fontSize: { xs: "16px", sm: "24px" },
                },
              }}
            />

            <TextField
              label={t("contact-form-message")}
              name="message"
              value={contactFormData.message}
              variant="standard"
              onChange={handleContactFormChange}
              multiline
              rows={4}
              fullWidth
              required
              sx={{
                "& .MuiInputBase-input": {
                  fontSize: { xs: "16px", sm: "24px" },
                },
                "& .MuiInputLabel-root": {
                  fontSize: { xs: "16px", sm: "24px" },
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
                fontSize: { xs: "16px", sm: "22px" },
              }}
            >
              {t("contact-form-submit")}
            </Button>
          </Box>
        )}

        {/* Private Event Form */}
        {formType === "private" && (
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              padding: 3,
              border: "1px solid #ccc",
              borderRadius: "8px",
              boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
            }}
          >
            {/* Date Range */}
            <Box sx={{ display: "flex", gap: 2, flexDirection: { xs: "column", sm: "row" } }}>
              <TextField
                label={t("private-event-date-from")}
                name="dateFrom"
                value={privateFormData.dateFrom}
                variant="standard"
                onChange={handlePrivateFormChange}
                type="date"
                fullWidth
                required
                InputLabelProps={{ shrink: true }}
                sx={{
                  "& .MuiInputBase-input": {
                    fontSize: { xs: "16px", sm: "20px" },
                  },
                  "& .MuiInputLabel-root": {
                    fontSize: { xs: "16px", sm: "20px" },
                  },
                }}
              />
              <TextField
                label={t("private-event-date-to")}
                name="dateTo"
                value={privateFormData.dateTo}
                variant="standard"
                onChange={handlePrivateFormChange}
                type="date"
                fullWidth
                required
                InputLabelProps={{ shrink: true }}
                sx={{
                  "& .MuiInputBase-input": {
                    fontSize: { xs: "16px", sm: "20px" },
                  },
                  "& .MuiInputLabel-root": {
                    fontSize: { xs: "16px", sm: "20px" },
                  },
                }}
              />
            </Box>

            {/* Time Range */}
            <Box sx={{ display: "flex", gap: 2, flexDirection: { xs: "column", sm: "row" } }}>
              <TextField
                label={t("private-event-time-from")}
                name="timeFrom"
                value={privateFormData.timeFrom}
                variant="standard"
                onChange={handlePrivateFormChange}
                type="time"
                fullWidth
                required
                InputLabelProps={{ shrink: true }}
                sx={{
                  "& .MuiInputBase-input": {
                    fontSize: { xs: "16px", sm: "20px" },
                  },
                  "& .MuiInputLabel-root": {
                    fontSize: { xs: "16px", sm: "20px" },
                  },
                }}
              />
              <TextField
                label={t("private-event-time-to")}
                name="timeTo"
                value={privateFormData.timeTo}
                variant="standard"
                onChange={handlePrivateFormChange}
                type="time"
                fullWidth
                required
                InputLabelProps={{ shrink: true }}
                sx={{
                  "& .MuiInputBase-input": {
                    fontSize: { xs: "16px", sm: "20px" },
                  },
                  "& .MuiInputLabel-root": {
                    fontSize: { xs: "16px", sm: "20px" },
                  },
                }}
              />
            </Box>

            {/* Number of Guests */}
            <TextField
              label={t("private-event-guests")}
              name="guests"
              value={privateFormData.guests}
              variant="standard"
              onChange={handlePrivateFormChange}
              type="number"
              fullWidth
              required
              inputProps={{ min: 1 }}
              sx={{
                "& .MuiInputBase-input": {
                  fontSize: { xs: "16px", sm: "24px" },
                },
                "& .MuiInputLabel-root": {
                  fontSize: { xs: "16px", sm: "24px" },
                },
              }}
            />

            {/* Contact Number */}
            <TextField
              label={t("private-event-phone")}
              name="phone"
              value={privateFormData.phone}
              variant="standard"
              onChange={handlePrivateFormChange}
              type="tel"
              fullWidth
              required
              sx={{
                "& .MuiInputBase-input": {
                  fontSize: { xs: "16px", sm: "24px" },
                },
                "& .MuiInputLabel-root": {
                  fontSize: { xs: "16px", sm: "24px" },
                },
              }}
            />

            {/* Contact Email */}
            <TextField
              label={t("private-event-email")}
              name="email"
              value={privateFormData.email}
              variant="standard"
              onChange={handlePrivateFormChange}
              type="email"
              fullWidth
              required
              sx={{
                "& .MuiInputBase-input": {
                  fontSize: { xs: "16px", sm: "24px" },
                },
                "& .MuiInputLabel-root": {
                  fontSize: { xs: "16px", sm: "24px" },
                },
              }}
            />

            {/* Special Requirements */}
            <TextField
              label={t("private-event-requirements")}
              name="requirements"
              value={privateFormData.requirements}
              variant="standard"
              onChange={handlePrivateFormChange}
              multiline
              rows={3}
              fullWidth
              sx={{
                "& .MuiInputBase-input": {
                  fontSize: { xs: "16px", sm: "24px" },
                },
                "& .MuiInputLabel-root": {
                  fontSize: { xs: "16px", sm: "24px" },
                },
              }}
            />

            {/* Catering Radio Buttons */}
            <FormControl component="fieldset">
              <FormLabel
                component="legend"
                sx={{
                  fontSize: { xs: "16px", sm: "24px" },
                  color: "#FF6F61",
                  "&.Mui-focused": { color: "#FF6F61" },
                }}
              >
                {t("private-event-catering")}
              </FormLabel>
              <RadioGroup
                name="catering"
                value={privateFormData.catering}
                onChange={handlePrivateFormChange}
                row
              >
                <FormControlLabel
                  value="yes"
                  control={<Radio sx={{ color: "#FF6F61", "&.Mui-checked": { color: "#FF6F61" } }} />}
                  label={t("private-event-catering-yes")}
                  sx={{ "& .MuiFormControlLabel-label": { fontSize: { xs: "16px", sm: "20px" } } }}
                />
                <FormControlLabel
                  value="no"
                  control={<Radio sx={{ color: "#FF6F61", "&.Mui-checked": { color: "#FF6F61" } }} />}
                  label={t("private-event-catering-no")}
                  sx={{ "& .MuiFormControlLabel-label": { fontSize: { xs: "16px", sm: "20px" } } }}
                />
              </RadioGroup>
            </FormControl>

            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{
                backgroundColor: "#FF6F61",
                "&:hover": { backgroundColor: "#e65a50" },
                fontSize: { xs: "16px", sm: "22px" },
              }}
            >
              {t("contact-form-submit")}
            </Button>
          </Box>
        )}
      </Box>
  );
}
