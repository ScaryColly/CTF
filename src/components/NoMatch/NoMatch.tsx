import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { FC } from "react";
import { Link } from "react-router-dom";
import WavingFish from "../../assets/images/wavingFish.png";
import { PAGE_NOT_EXISTS_MESSAGE } from "./constants";

export const NoMatch: FC = () => {
  return (
    <Box
      display='flex'
      width='100vw'
      justifyContent='space-around'
      alignItems='center'>
      {WavingFish}
      <Box
        display='flex'
        flexDirection='column'
        gap='10%'
        justifyContent='center'
        height='100vh'>
        <Typography variant='h4'>
          {PAGE_NOT_EXISTS_MESSAGE.firstCaption}
        </Typography>
        <Box alignSelf='center'>
          <Link to='/'>
            <Button sx={{ fontSize: "1.5em" }} variant='text'>
              {PAGE_NOT_EXISTS_MESSAGE.takeMeHome}
            </Button>
          </Link>
        </Box>
        <Typography alignSelf='flex-end' variant='h4'>
          {PAGE_NOT_EXISTS_MESSAGE.secondCaption}
        </Typography>
      </Box>
    </Box>
  );
};
