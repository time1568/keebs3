import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <>
    <WidgetWrapper>
      <FlexBetween>
        <Typography textAlign='center' color={dark} variant="h5" fontWeight="500">
          New release
        </Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src="http://localhost:3001/assets/info5.png"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>Mode sonnet</Typography>
        <Typography color={medium}><a href="https://modedesigns.com/">Modedesigns.com</a></Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
      Great tools inspire great work. Like a finely-tuned instrument, 
      a great keyboard brings out your best.
      </Typography>
    </WidgetWrapper>

    
    </> 
  );
};

export default AdvertWidget;
