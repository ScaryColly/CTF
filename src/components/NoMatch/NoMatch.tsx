import { Button, Stack, Typography, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import WavingFish from "../../assets/images/wavingFish.png";
import { PAGE_NOT_EXISTS_MESSAGE } from "./constants";
import { Image } from "../Image";
import { getClasses } from "./style";

export const NoMatch: FC = () => {
  const theme = useTheme();
  const classes = getClasses(theme);
  const navigate = useNavigate();

  return (
    <Stack display="flex" width="100vw" alignItems="center">
      <Image className={classes.image} src={WavingFish} alt="fish" />
      <Stack flexDirection="column" justifyContent="center">
        <Typography variant="h6">
          {PAGE_NOT_EXISTS_MESSAGE.firstCaption}
        </Typography>
        <Box alignSelf="center">
          <Button
            onClick={() => navigate(-1)}
            sx={{ fontSize: "1.5em" }}
            variant="text"
          >
            {PAGE_NOT_EXISTS_MESSAGE.takeMeHome}
          </Button>
        </Box>
        <Typography alignSelf="flex-end" variant="h4">
          {PAGE_NOT_EXISTS_MESSAGE.secondCaption}
        </Typography>
      </Stack>
    </Stack>
  );
};
