import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { MemberVm } from "@/pods/member-detail";

interface Props {
member:MemberVm
}

export const CardComponent: React.FC<Props> = ({ member }) => {  
  return (
    <Card sx={{ width: 345, minWidth: 250 }}>
      <CardMedia
        sx={{
          height: 0,
          paddingTop: "56.25%",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundImage: `url(${member.avatarUrl})`,
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          borderRadius: "8px",
        }}
        title={member.login}
      />
  
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
        {member.login}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
        {member.company}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        {member.bio}
        </Typography>
      </CardContent>
     
    </Card>
  );
};
