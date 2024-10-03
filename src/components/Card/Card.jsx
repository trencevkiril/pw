import React from "react";
import "./Card.scss";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "../Button/Button";
import Divider from "@mui/material/Divider";
import QuantityInput from "../NumberInput/NumberInput";
import { useTranslation } from "react-i18next";

export default function CardMUI({ spotsLeft }) {
  const { t } = useTranslation();

  return (
    <div className="container">
      <Box sx={{ minWidth: 275 }}>
        <Card variant="outlined">
          <CardContent>
            <div className="card-title">{t("reserve-seat")}</div>
            <QuantityInput />
            <div className="seats-text">
              {t("available-seats")}
              <strong className="seats-left">{spotsLeft}</strong>
            </div>
          </CardContent>
          <Divider />
          <CardActions>
            <div className="button-container">
              <Button title={t("reserve")} fontSize={16} className="button" />
            </div>
          </CardActions>
        </Card>
      </Box>
    </div>
  );
}
