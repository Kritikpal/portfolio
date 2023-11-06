import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";

const MaterialCard = ({ image }) => {
  return (
    <Card
      style={{
        height: "300px",
        width: "100%",
        borderRadius: "16px",
        overflow: "hidden",
      }}
    >
      <CardMedia
        component="img"
        image={image}
        alt="Image Alt Text"
        style={{
          height: "100%",
          width: "100%",
        }}
      />
    </Card>
  );
};

export default MaterialCard;
