import { useState } from "react";
import {
  Box, ToggleButton, ToggleButtonGroup,
  Radio, RadioGroup, FormControlLabel, FormControl,
  FormLabel, Alert, Paper, Typography, TextField
} from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import dayjs from "dayjs";
import { useTranslation } from "react-i18next";
import "./ContactUsPage.scss";
import SEO from "../../components/SEO/SEO";
import Button from "../../components/Button/Button";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

const NAVY      = "#003366";
const RED       = "#a8392f";
const RED_LIGHT = "#fdf1f0";
const GREY      = "#f5f5f5";
const GREY_MID  = "#e0e0e0";

const fieldSx = {
  "& .MuiInputBase-input":            { fontSize: { xs: "16px", sm: "18px" } },
  "& .MuiInputLabel-root":            { fontSize: { xs: "16px", sm: "18px" } },
  "& .MuiInput-underline:after":      { borderBottomColor: RED },
  "& .MuiInput-underline:hover:not(.Mui-disabled):before": { borderBottomColor: RED },
  "& .MuiInputLabel-root.Mui-focused":{ color: RED },
};

const outlinedFieldSx = {
  ...fieldSx,
  "& .MuiOutlinedInput-root": {
    "&:hover fieldset":       { borderColor: RED },
    "&.Mui-focused fieldset": { borderColor: RED },
  },
};

export default function ContactUsPage() {
  const { t } = useTranslation();
  const [formType, setFormType]       = useState("private");
  const [showSuccess, setShowSuccess] = useState(false);

  const [contactFormData, setContactFormData] = useState({
    name: "", email: "", number: "", message: "",
  });

  const [privateFormData, setPrivateFormData] = useState({
    dateFrom: null, dateTo: null,
    timeFrom: null, timeTo: null,
    guests: "", phone: "", email: "", requirements: "", catering: "no",
  });

  const handleFormTypeChange = (_, newType) => {
    if (newType !== null) setFormType(newType);
  };

  const handleContactChange = (e) => {
    const { name, value } = e.target;
    setContactFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePrivateChange = (e) => {
    const { name, value } = e.target;
    setPrivateFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Build payload manually since date pickers aren't native inputs
    const payload = formType === "contact"
      ? { ...contactFormData }
      : {
          ...privateFormData,
          dateFrom: privateFormData.dateFrom ? dayjs(privateFormData.dateFrom).format("DD.MM.YYYY") : "",
          dateTo:   privateFormData.dateTo   ? dayjs(privateFormData.dateTo).format("DD.MM.YYYY")   : "",
          timeFrom: privateFormData.timeFrom ? dayjs(privateFormData.timeFrom).format("HH:mm")       : "",
          timeTo:   privateFormData.timeTo   ? dayjs(privateFormData.timeTo).format("HH:mm")         : "",
        };

    payload.access_key = "56ed0f1d-9644-46b8-9dcd-4bed2f75b8b7";
    payload.subject    = formType === "contact"
      ? "New Contact Form Submission - Paint & Wine"
      : "New Private Event Request - Paint & Wine";
    payload.from_name  = formType === "contact"
      ? "Paint & Wine Contact Form"
      : "Paint & Wine Private Event";

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(payload),
    }).then((r) => r.json());

    if (res.success) {
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 5000);
      if (formType === "contact") {
        setContactFormData({ name: "", email: "", number: "", message: "" });
      } else {
        setPrivateFormData({
          dateFrom: null, dateTo: null,
          timeFrom: null, timeTo: null,
          guests: "", phone: "", email: "", requirements: "", catering: "no",
        });
      }
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box sx={{ maxWidth: "900px", margin: "auto", padding: { xs: 2, sm: 3 } }}>
        <SEO
          title="Contact Us"
          description="Contact Paint & Wine Skopje for bookings, private events, and inquiries."
          url="/contact-us"
        />

        <h1 className="page-header">{t("contact-page-heading")}</h1>

        {showSuccess && (
          <Alert severity="success" sx={{ marginBottom: 3, fontSize: { xs: "14px", sm: "18px" } }}>
            {t("form-success-message")}
          </Alert>
        )}

        {/* ── Toggle ───────────────────────────────────────────────────────── */}
        <ToggleButtonGroup
          value={formType} exclusive onChange={handleFormTypeChange}
          sx={{ width: "100%", marginBottom: 3, display: "flex" }}
        >
          {[
            { value: "contact", label: t("form-toggle-contact") },
            { value: "private", label: t("form-toggle-private") },
          ].map(({ value, label }) => (
            <ToggleButton
              key={value} value={value}
              sx={{
                flex: 1,
                fontSize: { xs: "14px", sm: "17px" },
                fontWeight: 600,
                padding: { xs: "10px", sm: "12px" },
                border: `1px solid ${GREY_MID}`,
                color: NAVY,
                backgroundColor: GREY,
                textTransform: "none",
                transition: "all 0.2s ease",
                "&:hover": { backgroundColor: RED_LIGHT, borderColor: RED },
                "&.Mui-selected": {
                  backgroundColor: RED, color: "white", borderColor: RED,
                  "&:hover": { backgroundColor: "#922f26" },
                },
              }}
            >
              {label}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>

        {/* ── Contact Form ─────────────────────────────────────────────────── */}
        {formType === "contact" && (
          <Paper
            component="form" onSubmit={handleSubmit} elevation={0}
            sx={{
              display: "flex", flexDirection: "column", gap: 3,
              padding: { xs: 2, sm: 4 },
              border: `1px solid ${GREY_MID}`,
              borderRadius: "12px",
              backgroundColor: GREY,
            }}
          >
            {[
              { label: t("contact-form-name"),   name: "name",   type: "text",  required: true,  value: contactFormData.name   },
              { label: t("contact-form-email"),  name: "email",  type: "email", required: true,  value: contactFormData.email  },
              { label: t("contact-form-number"), name: "number", type: "tel",   required: false, value: contactFormData.number },
            ].map(({ label, name, type, required, value }) => (
              <TextField
                key={name}
                label={label} name={name} value={value} type={type}
                variant="standard" fullWidth required={required}
                onChange={handleContactChange}
                sx={fieldSx}
              />
            ))}

            <TextField
              label={t("contact-form-message")}
              name="message" value={contactFormData.message}
              variant="outlined" multiline rows={4} fullWidth required
              onChange={handleContactChange}
              sx={outlinedFieldSx}
            />

            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              <Button title={t("contact-form-submit")} type="submit" />
            </Box>
          </Paper>
        )}

        {/* ── Private Event Form ───────────────────────────────────────────── */}
        {formType === "private" && (
          <Paper
            component="form" onSubmit={handleSubmit} elevation={0}
            sx={{
              display: "flex", flexDirection: "column", gap: 3,
              padding: { xs: 2, sm: 4 },
              border: `1px solid ${GREY_MID}`,
              borderRadius: "12px",
              backgroundColor: GREY,
            }}
          >
            {/* Min guests note */}
            <Box
              sx={{
                display: "flex", alignItems: "flex-start", gap: 1.5,
                padding: "14px 18px",
                backgroundColor: RED_LIGHT,
                border: `1px solid ${RED}`,
                borderRadius: "8px",
              }}
            >
              <InfoOutlinedIcon sx={{ color: RED, mt: "2px", flexShrink: 0 }} />
              <Typography sx={{ color: RED, fontSize: { xs: "14px", sm: "16px" }, fontWeight: 500, lineHeight: 1.5 }}>
                {t("private-event-min-guests-note")}
              </Typography>
            </Box>

            {/* Date range */}
            <Box sx={{ display: "flex", gap: 2, flexDirection: { xs: "column", sm: "row" } }}>
              <DatePicker
                label={t("private-event-date-from")}
                value={privateFormData.dateFrom}
                minDate={dayjs()}
                onChange={(val) =>
                  setPrivateFormData((prev) => ({
                    ...prev,
                    dateFrom: val,
                    // clear dateTo if it's now before the new dateFrom
                    dateTo: prev.dateTo && dayjs(prev.dateTo).isBefore(val) ? null : prev.dateTo,
                  }))
                }
                slotProps={{ textField: { fullWidth: true, required: true, sx: outlinedFieldSx } }}
              />
              <DatePicker
                label={t("private-event-date-to")}
                value={privateFormData.dateTo}
                minDate={privateFormData.dateFrom ? dayjs(privateFormData.dateFrom) : dayjs()}
                onChange={(val) =>
                  setPrivateFormData((prev) => ({ ...prev, dateTo: val }))
                }
                slotProps={{ textField: { fullWidth: true, required: true, sx: outlinedFieldSx } }}
              />
            </Box>

            {/* Time range */}
            <Box sx={{ display: "flex", gap: 2, flexDirection: { xs: "column", sm: "row" } }}>
              <TimePicker
                label={t("private-event-time-from")}
                value={privateFormData.timeFrom}
                ampm={false}
                onChange={(val) =>
                  setPrivateFormData((prev) => ({ ...prev, timeFrom: val }))
                }
                slotProps={{ textField: { fullWidth: true, required: true, sx: outlinedFieldSx } }}
              />
              <TimePicker
                label={t("private-event-time-to")}
                value={privateFormData.timeTo}
                ampm={false}
                minTime={privateFormData.timeFrom ? dayjs(privateFormData.timeFrom) : undefined}
                onChange={(val) =>
                  setPrivateFormData((prev) => ({ ...prev, timeTo: val }))
                }
                slotProps={{ textField: { fullWidth: true, required: true, sx: outlinedFieldSx } }}
              />
            </Box>

            {/* Guests, phone, email */}
            {[
              { label: t("private-event-guests"), name: "guests", type: "number", inputProps: { min: 15 }, value: privateFormData.guests },
              { label: t("private-event-phone"),  name: "phone",  type: "tel",    inputProps: {},         value: privateFormData.phone  },
              { label: t("private-event-email"),  name: "email",  type: "email",  inputProps: {},         value: privateFormData.email  },
            ].map(({ label, name, type, inputProps, value }) => (
              <TextField
                key={name}
                label={label} name={name} value={value} type={type}
                variant="standard" fullWidth required
                onChange={handlePrivateChange}
                inputProps={inputProps}
                sx={fieldSx}
              />
            ))}

            {/* Special requirements */}
            <TextField
              label={t("private-event-requirements")}
              name="requirements" value={privateFormData.requirements}
              variant="outlined" multiline rows={3} fullWidth
              onChange={handlePrivateChange}
              sx={outlinedFieldSx}
            />

            {/* Catering */}
            <FormControl component="fieldset">
              <FormLabel
                component="legend"
                sx={{
                  fontSize: { xs: "16px", sm: "18px" },
                  color: NAVY, fontWeight: 600,
                  "&.Mui-focused": { color: RED },
                }}
              >
                {t("private-event-catering")}
              </FormLabel>
              <RadioGroup
                name="catering" value={privateFormData.catering}
                onChange={handlePrivateChange} row
              >
                {["yes", "no"].map((val) => (
                  <FormControlLabel
                    key={val} value={val}
                    control={<Radio sx={{ color: RED, "&.Mui-checked": { color: RED } }} />}
                    label={t(`private-event-catering-${val}`)}
                    sx={{ "& .MuiFormControlLabel-label": { fontSize: { xs: "16px", sm: "18px" } } }}
                  />
                ))}
              </RadioGroup>
            </FormControl>

            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              <Button title={t("contact-form-submit")} type="submit" />
            </Box>
          </Paper>
        )}
      </Box>
    </LocalizationProvider>
  );
}