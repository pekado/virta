/* eslint-disable max-lines*/
import * as React from "react";
import { TextProps } from "react-native";
import {
  Svg,
  Path,
  Circle,
  SvgProps,
  Mask,
  Rect,
  Line,
  Ellipse,
  G,
  Defs,
  ClipPath,
} from "react-native-svg";
import styled from "../styled-components";

const StyledCloseSymbol = styled.Text`
  color: #fff;
  text-align: center;
  line-height: 14px;
  font-size: 16px;
  font-weight: bold;
  padding-left: 10px;
  padding-right: 5px;
`;

interface SvgPropsTwoColors extends SvgProps {
  secondColor?: string;
}

type CloseProps = Pick<TextProps, "style">;

export const CloseSymbol: React.FC<CloseProps> = ({ style }) => {
  return (
    <StyledCloseSymbol style={style}>
      {String.fromCharCode(0x2715)}
    </StyledCloseSymbol>
  );
};

export const UpDownArrowsIcon: React.FC = () => (
  <Svg width="6" height="14">
    <Path d="M2.63591 0L5.11753 5H0.154297L2.63591 0Z" fill="#595E65" />
    <Path d="M2.63591 14L5.11753 9H0.154297L2.63591 14Z" fill="#595E65" />
  </Svg>
);

export const ActiveCheckmarkPathIcon: React.FC<SvgProps> = ({
  width = 12,
  height = 12,
}) => (
  <Svg width={width} height={height} viewBox="0 0 12 12" fill="none">
    <Circle cx="6" cy="6" r="6" fill="#00AC47" />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.74638 3.08861C9.00664 3.25144 9.07833 3.58337 8.90649 3.83L5.30416 9L3.16003 6.91251C2.9425 6.70073 2.94734 6.36195 3.17084 6.15583C3.39434 5.94971 3.75186 5.95429 3.96939 6.16607L5.1348 7.30071L7.96397 3.24033C8.13581 2.9937 8.48611 2.92578 8.74638 3.08861Z"
      fill="white"
    />
  </Svg>
);

export const InActiveCheckmarkPathIcon: React.FC = () => (
  <Svg width="12" height="12" viewBox="0 0 12 12" fill="none">
    <Circle cx="6" cy="6" r="5.5" stroke="#A8AEB6" />
  </Svg>
);

export const SearchIcon: React.FC<SvgProps> = ({
  color = "white",
  width = 14,
  height = 14,
  ...svgProps
}) => (
  <Svg {...svgProps} width={width} height={height} color={color}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.5 6C10.5 8.48528 8.48528 10.5 6 10.5C3.51472 10.5 1.5 8.48528 1.5 6C1.5 3.51472 3.51472 1.5 6 1.5C8.48528 1.5 10.5 3.51472 10.5 6ZM9.67835 10.7406C8.66248 11.53 7.38613 12 6 12C2.68629 12 0 9.31371 0 6C0 2.68629 2.68629 0 6 0C9.31371 0 12 2.68629 12 6C12 7.38613 11.53 8.66248 10.7406 9.67835L13.78 12.7178C14.0733 13.0111 14.0733 13.4867 13.78 13.78C13.4867 14.0733 13.0111 14.0733 12.7178 13.78L9.67835 10.7406Z"
      fill="currentColor"
    />
  </Svg>
);

export const CheckmarkIcon: React.FC<SvgProps> = ({
  width = 48,
  height = 50,
  color = "#00AC47",
}) => (
  <Svg width={width} height={height} viewBox="0 0 24 25" fill="none">
    <Path
      d="M23.25 0.749023L8.158 22.308C7.75405 22.8885 7.09569 23.2394 6.3886 23.2511C5.68152 23.2627 5.01192 22.9338 4.589 22.367L0.75 17.249"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </Svg>
);

export const CheckboxIcon: React.FC<{
  color?: string;
  width?: number;
  height?: number;
  testID?: string;
  fillColor?: string;
}> = ({
  color = "#000",
  fillColor = "none",
  width = 13,
  height = 11,
  testID,
}) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 13 11"
    fill="none"
    testID={testID}
  >
    <Path
      d="M1 5.90608L3.52353 9.42913C3.76754 9.77458 4.17263 9.98701 4.61107 9.99942C5.0495 10.0118 5.46725 9.82271 5.73259 9.49168L12 1"
      stroke={color}
      fill={fillColor}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const CameraIcon: React.FC<{
  color?: string;
  width?: number;
  height?: number;
}> = ({ color = "#226EAD", height = 32, width = 43 }) => (
  <Svg
    width={width}
    height={height}
    viewBox={`0 0 ${width} ${height}`}
    fill="none"
  >
    <G transform={`scale(${width / 43} ${height / 32})`}>
      <Mask id="path-1-inside-1" fill="white">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.8441 0.754395C13.1872 0.754395 11.8441 2.09754 11.8441 3.75439V4.25334H3.53638C1.87952 4.25334 0.536377 5.59649 0.536377 7.25334V28.3918C0.536377 30.0487 1.87952 31.3918 3.53638 31.3918H39.5364C41.1932 31.3918 42.5364 30.0487 42.5364 28.3918V7.25334C42.5364 5.59649 41.1932 4.25334 39.5364 4.25334H31.2287V3.75439C31.2287 2.09754 29.8855 0.754395 28.2287 0.754395H14.8441Z"
        />
      </Mask>
      <Path
        d="M11.8441 4.25334V6.25334H13.8441V4.25334H11.8441ZM31.2287 4.25334H29.2287V6.25334H31.2287V4.25334ZM13.8441 3.75439C13.8441 3.20211 14.2918 2.75439 14.8441 2.75439V-1.24561C12.0826 -1.24561 9.84407 0.992969 9.84407 3.75439H13.8441ZM13.8441 4.25334V3.75439H9.84407V4.25334H13.8441ZM3.53638 6.25334H11.8441V2.25334H3.53638V6.25334ZM2.53638 7.25334C2.53638 6.70106 2.98409 6.25334 3.53638 6.25334V2.25334C0.774957 2.25334 -1.46362 4.49191 -1.46362 7.25334H2.53638ZM2.53638 28.3918V7.25334H-1.46362V28.3918H2.53638ZM3.53638 29.3918C2.98409 29.3918 2.53638 28.9441 2.53638 28.3918H-1.46362C-1.46362 31.1532 0.774955 33.3918 3.53638 33.3918V29.3918ZM39.5364 29.3918H3.53638V33.3918H39.5364V29.3918ZM40.5364 28.3918C40.5364 28.9441 40.0887 29.3918 39.5364 29.3918V33.3918C42.2978 33.3918 44.5364 31.1532 44.5364 28.3918H40.5364ZM40.5364 7.25334V28.3918H44.5364V7.25334H40.5364ZM39.5364 6.25334C40.0887 6.25334 40.5364 6.70106 40.5364 7.25334H44.5364C44.5364 4.49192 42.2978 2.25334 39.5364 2.25334V6.25334ZM31.2287 6.25334H39.5364V2.25334H31.2287V6.25334ZM29.2287 3.75439V4.25334H33.2287V3.75439H29.2287ZM28.2287 2.75439C28.781 2.75439 29.2287 3.2021 29.2287 3.75439H33.2287C33.2287 0.992975 30.9901 -1.24561 28.2287 -1.24561V2.75439ZM14.8441 2.75439H28.2287V-1.24561H14.8441V2.75439Z"
        fill={color}
        mask="url(#path-1-inside-1)"
      />
      <Circle
        cx="21.5364"
        cy="17.7719"
        r="7.72308"
        stroke={color}
        strokeWidth="2"
      />
    </G>
  </Svg>
);

export const PhoneActionEmailIcon: React.FC<{ color?: string }> = ({
  color = "#37617B",
}) => (
  <Svg width="91" height="91" viewBox="0 0 91 91" fill="none">
    <Path
      d="M54.3151 48.5996V77.7296C54.3151 80.4474 53.2352 83.0538 51.313 84.9752C49.3909 86.8967 46.7841 87.9756 44.0663 87.9746H19.5638C16.846 87.9756 14.2392 86.8967 12.3171 84.9752C10.395 83.0538 9.31506 80.4474 9.31506 77.7296V19.4734C9.31506 13.8131 13.9036 9.22461 19.5638 9.22461H26.1901"
      stroke={color}
      strokeWidth="3.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M9.31506 71.0996H54.3151"
      stroke={color}
      strokeWidth="3.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M55.2927 20.1033C55.2927 19.5438 54.8392 19.0903 54.2797 19.0903H52.2537V17.0643C52.2537 16.5048 51.8001 16.0513 51.2407 16.0513H49.2146C48.6552 16.0513 48.2016 16.5048 48.2016 17.0643V19.0903H46.1756C45.6161 19.0903 45.1626 19.5438 45.1626 20.1033V22.1293C45.1626 22.6888 45.6161 23.1423 46.1756 23.1423H48.2016V25.1684C48.2016 25.7278 48.6552 26.1814 49.2146 26.1814H51.2407C51.8001 26.1814 52.2537 25.7278 52.2537 25.1684V23.1423H54.2797C54.8392 23.1423 55.2927 22.6888 55.2927 22.1293V20.1033Z"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Rect
      x="38.2977"
      y="6.36523"
      width="42.8895"
      height="29.5"
      rx="5.5"
      stroke={color}
      strokeWidth="3"
    />
    <Line
      x1="59.8331"
      y1="17.9507"
      x2="73.3226"
      y2="17.9507"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
    />
    <Line
      x1="59.8331"
      y1="22.709"
      x2="68.5651"
      y2="22.709"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
    />
  </Svg>
);

export const CircularPhoneActionEmailIcon: React.FC<{ color?: string }> = ({
  color = "#37617B",
}) => (
  <Svg width="48" height="48" viewBox="0 0 48 48" fill="none">
    <Path
      d="M26.4375 24.8125V33.2278C26.4375 34.013 26.1255 34.7659 25.5703 35.321C25.015 35.8761 24.2619 36.1878 23.4768 36.1875H16.3983C15.6131 36.1878 14.86 35.8761 14.3047 35.321C13.7495 34.7659 13.4375 34.013 13.4375 33.2278V16.3983C13.4375 14.7631 14.7631 13.4375 16.3983 13.4375H18.3125"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M13.4375 31.3125H26.4375"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M27.4963 16.2539C27.4963 16.0555 27.3354 15.8946 27.137 15.8946H26.4185V15.1761C26.4185 14.9777 26.2577 14.8169 26.0593 14.8169H25.3408C25.1424 14.8169 24.9816 14.9777 24.9816 15.1761V15.8946H24.2631C24.0646 15.8946 23.9038 16.0555 23.9038 16.2539V16.9724C23.9038 17.1708 24.0646 17.3316 24.2631 17.3316H24.9816V18.0501C24.9816 18.2485 25.1424 18.4094 25.3408 18.4094H26.0593C26.2577 18.4094 26.4185 18.2485 26.4185 18.0501V17.3316H27.137C27.3354 17.3316 27.4963 17.1708 27.4963 16.9724V16.2539Z"
      stroke={color}
      strokeWidth="0.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Rect
      x="21.6875"
      y="11.6001"
      width="14.774"
      height="10.0256"
      rx="1.25"
      stroke={color}
      strokeWidth="1.5"
    />
    <Line
      x1="29.002"
      y1="15.5952"
      x2="33.995"
      y2="15.5952"
      stroke={color}
      strokeWidth="0.5"
      strokeLinecap="round"
    />
    <Line
      x1="29.002"
      y1="17.2827"
      x2="32.3079"
      y2="17.2827"
      stroke={color}
      strokeWidth="0.5"
      strokeLinecap="round"
    />
    <Circle cx="24" cy="24" r="23.25" stroke={color} strokeWidth="1.5" />
  </Svg>
);

export const RectangleBulletIcon: React.FC<{ color?: string }> = ({
  color = "#3A3D43",
}) => (
  <Svg width="11" height="11" viewBox="0 0 11 11" fill="none">
    <Rect x="0.902344" y="0.510254" width="10" height="10" fill={color} />
  </Svg>
);

export const InsuranceCardIcon: React.FC<{ color?: string }> = ({
  color = "#37617B",
}) => (
  <Svg width="74" height="53" viewBox="0 0 74 53" fill="none">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M29.9537 25.0048C29.9537 24.1136 29.2312 23.3912 28.3401 23.3912H25.1128V20.1639C25.1128 19.2727 24.3904 18.5503 23.4992 18.5503H20.2719C19.3807 18.5503 18.6583 19.2727 18.6583 20.1639V23.3912H15.431C14.5398 23.3912 13.8174 24.1136 13.8174 25.0048V28.2321C13.8174 29.1233 14.5398 29.8457 15.431 29.8457H18.6583V33.073C18.6583 33.9642 19.3807 34.6866 20.2719 34.6866H23.4992C24.3904 34.6866 25.1128 33.9642 25.1128 33.073V29.8457H28.3401C29.2312 29.8457 29.9537 29.1233 29.9537 28.2321V25.0048Z"
      stroke="#37617B"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Rect
      x="1.99316"
      y="2.23193"
      width="70.0978"
      height="48.7695"
      rx="5.5"
      stroke={color}
      strokeWidth="3"
    />
    <Line
      x1="36.5928"
      y1="22.1689"
      x2="59.266"
      y2="22.1689"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
    />
    <Line
      x1="36.5928"
      y1="29.7485"
      x2="51.6878"
      y2="29.7485"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
    />
  </Svg>
);

export const CheckedInsuranceCardIcon: React.FC<{
  color?: string;
  height?: number;
  width?: number;
}> = ({ color = "#37617B", height, width = 92 }) => (
  <Svg
    width={width}
    height={height}
    preserveAspectRatio="xMidYMid"
    viewBox="0 0 92 63"
    fill="none"
  >
    <Rect
      x="2.32422"
      y="12.231"
      width="70.0978"
      height="48.7695"
      rx="5.5"
      stroke={color}
      strokeWidth="3"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M29.9537 25.0048C29.9537 24.1136 29.2312 23.3912 28.3401 23.3912H25.1128V20.1639C25.1128 19.2727 24.3904 18.5503 23.4992 18.5503H20.2719C19.3807 18.5503 18.6583 19.2727 18.6583 20.1639V23.3912H15.431C14.5398 23.3912 13.8174 24.1136 13.8174 25.0048V28.2321C13.8174 29.1233 14.5398 29.8457 15.431 29.8457H18.6583V33.073C18.6583 33.9642 19.3807 34.6866 20.2719 34.6866H23.4992C24.3904 34.6866 25.1128 33.9642 25.1128 33.073V29.8457H28.3401C29.2312 29.8457 29.9537 29.1233 29.9537 28.2321V25.0048Z"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Line
      x1="36.9238"
      y1="32.168"
      x2="59.5971"
      y2="32.168"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
    />
    <Line
      x1="36.9238"
      y1="39.7476"
      x2="52.0189"
      y2="39.7476"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
    />
    <Ellipse cx="75.3115" cy="16.5005" rx="16.5" ry="16" fill="#00AC47" />
    <Path
      d="M91.3115 16.5005C91.3115 25.0465 84.1627 32.0005 75.3115 32.0005C66.4604 32.0005 59.3115 25.0465 59.3115 16.5005C59.3115 7.95447 66.4604 1.00049 75.3115 1.00049C84.1627 1.00049 91.3115 7.95447 91.3115 16.5005Z"
      stroke="#008531"
      strokeOpacity="0.3"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M80.6266 11.3377C81.1165 11.6513 81.2514 12.2906 80.9279 12.7656L74.1481 22.723L70.1127 18.7025C69.7033 18.2946 69.7124 17.6421 70.1331 17.2451C70.5537 16.8481 71.2266 16.857 71.636 17.2649L73.8294 19.4502L79.1541 11.6299C79.4775 11.1549 80.1368 11.024 80.6266 11.3377Z"
      fill="white"
    />
  </Svg>
);

export const MoreIcon: React.FC<{ color?: string }> = ({
  color = "#C4C4C4",
}) => (
  <Svg width="4" height="22" viewBox="0 0 4 22" fill="none">
    <Ellipse cx="2.00001" cy="2" rx="2.00001" ry="2" fill={color} />
    <Ellipse cx="2.00001" cy="11" rx="2.00001" ry="2" fill={color} />
    <Ellipse cx="2.00001" cy="20" rx="2.00001" ry="2" fill={color} />
  </Svg>
);

export const PhoneEmailIcon: React.FC<{ color?: string }> = ({
  color = "#37617B",
}) => (
  <Svg width="115" height="113" viewBox="0 0 115 113" fill="none">
    <Path
      d="M68.2355 59.7168V95.9675C68.2355 99.3496 66.8754 102.593 64.4545 104.984C62.0336 107.375 58.7504 108.718 55.3273 108.717H24.4668C21.0437 108.718 17.7605 107.375 15.3396 104.984C12.9187 102.593 11.5586 99.3496 11.5586 95.9675V23.4708C11.5586 16.427 17.3378 10.7168 24.4668 10.7168H32.8124"
      stroke={color}
      strokeWidth="3.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M11.5586 87.7168H68.2355"
      stroke={color}
      strokeWidth="3.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M103.658 10.7168V38.7168C103.658 42.5828 100.486 45.7168 96.5737 45.7168H54.0661C50.1533 45.7168 46.9814 42.5828 46.9814 38.7168V10.7168"
      stroke="#23AFFF"
      strokeWidth="3.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M103.658 10.7168C103.658 6.8508 100.486 3.7168 96.5737 3.7168H54.0661C50.1533 3.7168 46.9814 6.8508 46.9814 10.7168L71.5651 25.8835C73.8624 27.3022 76.7774 27.3022 79.0747 25.8835L103.658 10.7168Z"
      stroke="#23AFFF"
      strokeWidth="3.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const PhoneEmailCircleIcon: React.FC<{ color?: string }> = ({
  color = "#37617B",
}) => (
  <Svg width="126" height="124" viewBox="0 0 126 124" fill="none">
    <Path
      d="M72.0093 66.6836V89.2998C72.0093 91.4099 71.1709 93.4335 69.6785 94.9252C68.1862 96.417 66.1623 97.2547 64.0523 97.2539H45.0288C42.9187 97.2547 40.8948 96.417 39.4025 94.9252C37.9102 93.4335 37.0718 91.4099 37.0718 89.2998V44.0703C37.0718 39.6758 40.6343 36.1133 45.0288 36.1133H50.1733"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M37.0718 84.1523H72.0093"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M72.0093 39.247C72.0093 38.7499 71.6063 38.347 71.1093 38.347H69.3093V36.547C69.3093 36.0499 68.9063 35.647 68.4093 35.647H66.6093C66.1122 35.647 65.7093 36.0499 65.7093 36.547V38.347H63.9093C63.4122 38.347 63.0093 38.7499 63.0093 39.247V41.047C63.0093 41.544 63.4122 41.947 63.9093 41.947H65.7093V43.747C65.7093 44.244 66.1122 44.647 66.6093 44.647H68.4093C68.9063 44.647 69.3093 44.244 69.3093 43.747V41.947H71.1093C71.6063 41.947 72.0093 41.544 72.0093 41.047V39.247Z"
      stroke={color}
      strokeWidth="0.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Rect
      x="57.978"
      y="29.9097"
      width="42.2363"
      height="29.475"
      rx="1.25"
      stroke={color}
      strokeWidth="1.5"
    />
    <Line
      x1="78.4795"
      y1="42.334"
      x2="92.7421"
      y2="42.334"
      stroke={color}
      strokeWidth="0.5"
      strokeLinecap="round"
    />
    <Line
      x1="78.4795"
      y1="46.8691"
      x2="88.2079"
      y2="46.8691"
      stroke={color}
      strokeWidth="0.5"
      strokeLinecap="round"
    />
    <Path
      d="M124.752 62C124.752 95.8243 97.211 123.25 63.2303 123.25C29.2497 123.25 1.7085 95.8243 1.7085 62C1.7085 28.1756 29.2497 0.75 63.2303 0.75C97.211 0.75 124.752 28.1756 124.752 62Z"
      stroke={color}
      strokeWidth="1.5"
    />
  </Svg>
);

export const HeartIcon: React.FC<SvgProps> = ({ color }) => (
  <Svg width="21" height="18" viewBox="0 -256 1850 1850" color={color}>
    <G transform="matrix(1,0,0,-1,37.966102,1343.4237)">
      <Path
        d="m 896,-128 q -26,0 -44,18 L 228,492 q -10,8 -27.5,26 Q 183,536 145,583.5 107,631 77,681 47,731 23.5,802 0,873 0,940 q 0,220 127,344 127,124 351,124 62,0 126.5,-21.5 64.5,-21.5 120,-58 55.5,-36.5 95.5,-68.5 40,-32 76,-68 36,36 76,68 40,32 95.5,68.5 55.5,36.5 120,58 64.5,21.5 126.5,21.5 224,0 351,-124 127,-124 127,-344 0,-221 -229,-450 L 940,-110 q -18,-18 -44,-18"
        fill="currentColor"
      />
    </G>
  </Svg>
);

export const HeartOutlineIcon: React.FC<SvgProps> = ({ color }) => (
  <Svg width="21" height="18" color={color}>
    <G transform="scale(0.82)">
      <Path
        d="M11.46 19.78l.7-.72.01.01-.71.7zM3.8 12.33l.63-.78.03.03.04.03-.7.72zM12 3.67l.71.7-.71.72-.71-.71.71-.7zm8.19 8.69l.7.7v.01l-.7-.71zm-7.65 7.42l-.71-.7v-.01l.01-.01.7.72zM12 21c-.47 0-.91-.18-1.25-.52l1.42-1.4a.26.26 0 00-.08-.06A.24.24 0 0012 19v2zm-1.24-.5L3.1 13.04l1.4-1.44 7.66 7.45-1.4 1.43zm-7.59-7.4c-.13-.1-.28-.24-.43-.4l1.44-1.39c.14.15.21.22.25.24l-1.26 1.56zm-.43-.4c-.18-.18-.43-.49-.74-.88l1.56-1.24c.31.39.51.62.62.73l-1.44 1.4zM2 11.82c-.34-.42-.64-.86-.91-1.32L2.8 9.48c.23.37.48.74.76 1.1L2 11.82zm-.91-1.32a8.5 8.5 0 01-.75-1.7l1.9-.62c.17.54.37.97.56 1.3L1.1 10.5zM.34 8.8A6.45 6.45 0 010 6.8h2c0 .43.08.9.24 1.4l-1.9.62zM0 6.8c0-2.01.58-3.71 1.86-4.97l1.4 1.43C2.46 4.04 2 5.17 2 6.79H0zm1.86-4.97C3.13.57 4.84 0 6.86 0v2c-1.63 0-2.8.45-3.6 1.25l-1.4-1.43zm5-1.82c.63 0 1.26.11 1.88.32l-.64 1.9A3.86 3.86 0 006.87 2V0zm1.88.32c.6.2 1.18.48 1.7.83l-1.1 1.67c-.38-.25-.79-.46-1.24-.6l.64-1.9zm1.7.83c.48.31.9.61 1.25.9l-1.25 1.56c-.3-.24-.66-.5-1.1-.8l1.1-1.66zm1.25.9c.36.29.7.6 1.02.92l-1.42 1.4c-.27-.26-.55-.52-.85-.76l1.25-1.56zm-.4.92c.32-.33.66-.63 1.02-.92l1.25 1.56c-.3.24-.58.5-.85.77l-1.42-1.41zm1.02-.92c.35-.29.77-.59 1.24-.9l1.1 1.67c-.43.29-.8.55-1.09.79l-1.25-1.56zm1.24-.9c.53-.35 1.1-.63 1.71-.83l.64 1.9c-.45.14-.86.35-1.24.6l-1.1-1.67zm1.71-.83C15.88.1 16.51 0 17.13 0v2c-.39 0-.8.07-1.23.21l-.64-1.9zM17.13 0c2.03 0 3.74.57 5.01 1.82l-1.4 1.43c-.8-.8-1.97-1.25-3.6-1.25V0zm5.01 1.82C23.42 3.08 24 4.78 24 6.8h-2c0-1.62-.46-2.75-1.26-3.54l1.4-1.43zM24 6.8c0 2.19-1.13 4.28-3.1 6.27l-1.42-1.4C21.25 9.85 22 8.24 22 6.78h2zm-3.12 6.28l-7.64 7.42-1.4-1.43 7.65-7.42 1.4 1.43zm-7.63 7.41c-.34.34-.78.52-1.25.52v-2l-.09.02a.26.26 0 00-.08.05l1.42 1.41z"
        fill="currentColor"
      />
    </G>
  </Svg>
);

export const SpeechBubbleIcon: React.FC<SvgProps> = ({ color }) => (
  <Svg width="20" height="20" viewBox="0 0 20 20" color={color}>
    <G transform="scale(0.8)">
      <G transform="translate(32 730)">
        <Path
          d="M1.02 1.33L.28.66l.74.67zm0 12.8l.75-.68-.75.67zm.3.3l-.66.74.67-.74zm10.09 1.02l.93.38.55-1.38h-1.48v1zm-1.38 3.41l.93.37-.93-.37zm1.54 1.17l.6.8-.6-.8zm5.87-4.5l-.6-.8.6.8zm.15-.14l-.06-1-.41.03-.27.3.74.67zm3.08-.96l.67.74-.67-.74zm.3-.3l-.74-.68.75.67zm0-12.8l.75-.67-.74.67zm-.3-.3l-.67.74.67-.75zm-19.34 0l.67.74-.67-.75zM1 7.72c0-1.78 0-3.02.12-3.97.12-.91.33-1.4.65-1.76L.27.66A5 5 0 00-.85 3.52C-1 4.62-1 6-1 7.72h2zm.77 5.72c-.32-.35-.53-.85-.65-1.76C1 10.74 1 9.5 1 7.73h-2c0 1.72 0 3.11.14 4.2A5 5 0 00.28 14.8l1.49-1.34zm.23.23a3 3 0 01-.23-.23L.27 14.8a5 5 0 00.39.38L2 13.68zm5.73.77c-1.78 0-3.02 0-3.97-.12-.91-.11-1.4-.33-1.76-.65l-1.34 1.5a5 5 0 002.86 1.13c1.1.14 2.48.14 4.2.14v-2zm3.68 0H7.73v2h3.68v-2zm-.45 4.78l1.38-3.4-1.86-.75-1.37 3.4 1.85.75zm0 0l-1.85-.75c-.77 1.9 1.45 3.58 3.07 2.34l-1.22-1.59zm5.88-4.5l-5.88 4.5 1.22 1.6 5.87-4.5-1.21-1.6zm0 0l1.21 1.6c.1-.09.2-.17.28-.27l-1.48-1.33zM20 13.68c-.44.4-1.09.63-2.47.72l.12 2c1.5-.1 2.72-.36 3.69-1.23L20 13.68zm.23-.23a3 3 0 01-.23.23l1.34 1.5.38-.39-1.49-1.34zM21 7.73c0 1.77 0 3.01-.12 3.96-.12.91-.33 1.4-.65 1.76l1.5 1.34a5 5 0 001.13-2.85c.14-1.1.14-2.49.14-4.21h-2zM20.23 2c.32.35.53.85.65 1.76.12.95.12 2.19.12 3.97h2c0-1.73 0-3.12-.14-4.21A5 5 0 0021.72.66L20.23 2zM20 1.77l.23.23 1.5-1.34a4.98 4.98 0 00-.39-.38L20 1.77zM14.27 1c1.78 0 3.02 0 3.97.12.91.12 1.4.33 1.76.65l1.34-1.5a5 5 0 00-2.86-1.13C17.38-1 16-1 14.28-1v2zM7.73 1h6.54v-2H7.73v2zM2 1.77c.35-.32.85-.53 1.76-.65C4.71 1 5.95 1 7.73 1v-2C6-1 4.6-1 3.52-.86A5 5 0 00.66.28L2 1.77zM1.77 2A3 3 0 012 1.77L.66.27a5 5 0 00-.38.39L1.77 2z"
          transform="translate(-31 -729)"
          fill="currentColor"
        />
      </G>
    </G>
  </Svg>
);

export const PencilIcon: React.FC<SvgProps> = ({
  color,
  width = 24,
  height = 23,
}) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 -51.2 1024 1024"
    color={color}
    style={{ transform: [{ rotate: "270deg" }] }}
  >
    <Path
      d="M630 783l205-204L205-51H0v205l630 629zm71 72l118 118 205-205-118-118-205 205z"
      fill="currentColor"
    />
  </Svg>
);

export const BellIcon: React.FC<SvgProps> = ({
  color,
  width = 24,
  height = 23,
}) => (
  <Svg
    width={width}
    height={height}
    viewBox="51.2 -51.2 921.6 1023.2"
    color={color}
    style={{ transform: [{ rotate: "180deg" }] }}
  >
    <Path
      d="M204.8 563.2v.1A307.3 307.3 0 00409 852.8l2.1.7a102.4 102.4 0 10202.2-.6v.6a307.8 307.8 0 00205.9-290V256l153.6-102.4v-51.2H51.2v51.2L204.8 256v307.2zm409.6-512a102.4 102.4 0 10-204.8 0h204.8z"
      fill="currentColor"
    />
  </Svg>
);

export const MarketingTargetBullseye: React.FC<SvgProps> = ({
  color = "#9661B4",
}) => (
  <Svg width="32" height="32" fill="none">
    <Path
      d="M14.69 15.81l5.55-5.55"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      clipRule="evenodd"
      d="M20.24 10.26l.76-5L25.33 1 26 4.5l3.5.67-4.26 4.33-5 .76v0z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M28.07 12.68a13 13 0 11-11.25-9.61M22.3 14.32A7 7 0 1115.5 9M8.69 27l-1 4M22.69 27l1 4"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const ArrowRight: React.FC<SvgProps> = ({ color = "#D6D9DD" }) => (
  <Svg width="16" height="18" viewBox="0 0 16 18" fill="none">
    <Path
      d="M3.66667 1.5L10.8133 8.64667C10.9071 8.74033 10.9598 8.86745 10.9598 9C10.9598 9.13255 10.9071 9.25967 10.8133 9.35333L3.66667 16.5"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const CircleIcon: React.FC<{ color?: string }> = ({
  color = "#005234",
}) => (
  <Svg width="12" height="12" viewBox="0 0 12 12" fill="none">
    <Circle cx="6" cy="6" r="5" fill={color} />
  </Svg>
);

export const UserCircle: React.FC<SvgProps> = ({ color = "#23AFFF" }) => (
  <Svg width="32" height="32" fill="none">
    <Path
      clipRule="evenodd"
      d="M16 20a7 7 0 100-14 7 7 0 000 14z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M25.2 27.8a13 13 0 00-18.4 0"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      clipRule="evenodd"
      d="M16 31a15 15 0 100-30 15 15 0 000 30z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const Clock: React.FC<SvgProps> = ({ color = "#9661B4" }) => (
  <Svg width="32" height="32" fill="none">
    <Path
      clipRule="evenodd"
      d="M16 30a14 14 0 100-28 14 14 0 000 28z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M16 16v-5M16 16l6.2 6.3"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const UserId: React.FC<SvgProps> = ({ color = "#E64238" }) => (
  <Svg width="32" height="32" fill="none">
    <Path
      d="M13 7H3a2 2 0 00-2 2v18c0 1.1.9 2 2 2h26a2 2 0 002-2V9a2 2 0 00-2-2H19"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      clipRule="evenodd"
      d="M19 6a3 3 0 10-6 0v4a1 1 0 001 1h4c.6 0 1-.4 1-1V6zM11 22a3.5 3.5 0 100-7 3.5 3.5 0 000 7zM5 29a6 6 0 0112 0H5z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M19 17h6M19 21h8"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const UserWarning: React.FC<SvgProps> = ({ color = "#E64238" }) => (
  <Svg width="32" height="32" fill="none">
    <Path
      d="M23 27a.5.5 0 100 1 .5.5 0 000-1M23 24v-4"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      clipRule="evenodd"
      d="M30.7 27.6a2.4 2.4 0 01-2 3.4H17.3a2.4 2.4 0 01-2.2-3.4L21 16.3a2.4 2.4 0 014.2 0l5.6 11.3zM10 12a5.5 5.5 0 100-11 5.5 5.5 0 000 11z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M16.3 16.6A9 9 0 001 23"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const Email: React.FC<SvgProps> = ({ color = "#F0278D" }) => (
  <Svg width="32" height="32" fill="none">
    <Path
      d="M30.6 4.8c.2.2.4.6.4 1v20.1a1.4 1.4 0 01-1.4 1.4H2.4A1.4 1.4 0 011 26V5.8c0-.4.2-.8.4-1m29.2 0c-.3-.3-.7-.5-1-.5H2.4c-.3 0-.7.2-1 .5m29.2 0L16 16.7 1.4 4.7"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const Phone: React.FC<SvgProps> = ({ color = "#009C7A" }) => (
  <Svg width="32" height="32" fill="none">
    <Path
      clipRule="evenodd"
      d="M20 29.9h0c3 1.8 6.8 1.4 9.2-1l1-1c1-1 1-2.6 0-3.6L26 20c-1-1-2.5-1-3.4 0v0a2.5 2.5 0 01-3.5 0l-7-7c-1-1-1-2.5 0-3.4v0A2.5 2.5 0 0012 6L7.7 1.7c-1-1-2.5-1-3.5 0l-1 1a7.4 7.4 0 00-1 9.2h0C6.9 19 13 25.2 20 30v0z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const CommentBubble: React.FC<SvgProps> = ({ color = "#FF9500" }) => (
  <Svg width="32" height="32" fill="none">
    <Path
      clipRule="evenodd"
      d="M29 25H15l-8 6v-6H3a2 2 0 01-2-2V3c0-1.1.9-2 2-2h26a2 2 0 012 2v20a2 2 0 01-2 2z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M10 12.5a.5.5 0 100 1 .5.5 0 000-1M16 12.5a.5.5 0 100 1 .5.5 0 000-1M22 12.5a.5.5 0 100 1 .5.5 0 000-1"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const MeterPlus: React.FC<SvgProps> = ({ color = "#009C7A" }) => (
  <Svg width="24" height="24" fill="none">
    <Path
      d="M13.5 17.3v3.2a2.7 2.7 0 01-2.7 2.8H4.2a2.7 2.7 0 01-2.7-2.8V5a2.7 2.7 0 012.7-2.8H9M1.5 18.8h12"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      clipRule="evenodd"
      d="M22.5 6c0-.4-.3-.8-.8-.8H18V1.5c0-.4-.3-.8-.8-.8h-3c-.4 0-.7.4-.7.8v3.8H9.7c-.4 0-.7.3-.7.7v3c0 .4.3.8.8.8h3.7v3.7c0 .4.3.8.8.8h3c.4 0 .7-.4.7-.8V9.7h3.8c.4 0 .7-.3.7-.7V6z"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const ArrowsCircle: React.FC<SvgProps> = ({ color = "#F0278D" }) => (
  <Svg width="24" height="24" fill="none">
    <Path
      d="M18.4 7a8.2 8.2 0 00-14.6 5.2v2.3M6 18a8.3 8.3 0 0014.3-5.8v-1.5"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M.8 11.5l3 3 3-3M23.3 13.7l-3-3-3 3"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const GlucoseIcon: React.FC<SvgPropsTwoColors> = ({
  color = "#FC8E87",
  secondColor = "#FDD7DC",
}) => (
  <Svg width="18" height="24" viewBox="0 0 18 24" fill="none">
    <Path
      d="M9 23.0001C13.4444 23.0001 17 19.3334 17 15.6667C17 10.1667 13 10 9 1.00006C5 10 1 10.1667 1 15.6667C1 19.3334 4.55556 23.0001 9 23.0001Z"
      fill={secondColor}
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const BloodPressureIcon: React.FC<SvgPropsTwoColors> = ({
  color = "#9661B4",
  secondColor = "#EFE7F4",
}) => (
  <Svg width="32" height="32" viewBox="0 0 32 32" fill="none">
    <Rect
      x="5"
      y="5"
      width="22"
      height="22"
      rx="3"
      fill={secondColor}
      stroke={color}
      strokeWidth="2"
    />
    <Path
      d="M11 12L21 12"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
    />
    <Path
      d="M16 17.0005L21 17.0005"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
    />
  </Svg>
);

export const KetonesIcon: React.FC<SvgPropsTwoColors> = ({
  color = "#23AFFF",
  secondColor = "#E2F6FF",
}) => (
  <Svg width="18" height="24" viewBox="0 0 18 24" fill="none">
    <Path
      d="M9 23C13.4444 23 17 19.3333 17 15.6667C17 10.1667 13 9.99994 9 1C5 9.99994 1 10.1667 1 15.6667C1 19.3333 4.55556 23 9 23Z"
      fill={secondColor}
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const SymptomsIcon: React.FC<SvgPropsTwoColors> = ({
  color = "#009C7A",
  secondColor = "#C7EDD2",
}) => (
  <Svg width="24" height="25" viewBox="0 0 24 25" fill="none">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.09266 23.2813V17.2773C2.38274 14.7668 1.48791 10.8523 2.83792 7.41369C4.18794 3.97511 7.50699 1.71499 11.2011 1.71875C18.0426 1.71875 19.5194 7.35184 21.9584 13.6788C22.0432 13.8999 22.0138 14.1485 21.8798 14.3438C21.7458 14.539 21.5244 14.6559 21.2875 14.6563H19.4677V17.5313C19.4677 19.1191 18.1805 20.4063 16.5927 20.4063H15.1552V23.2813"
      fill={secondColor}
    />
    <Path
      d="M5.09266 23.2813V17.2773C2.38274 14.7668 1.48791 10.8523 2.83792 7.41369C4.18794 3.97511 7.50699 1.71499 11.2011 1.71875C18.0426 1.71875 19.5194 7.35184 21.9584 13.6788C22.0432 13.8999 22.0138 14.1485 21.8798 14.3438C21.7458 14.539 21.5244 14.6559 21.2875 14.6563H19.4677V17.5313C19.4677 19.1191 18.1805 20.4063 16.5927 20.4063H15.1552V23.2813H5.09266Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.5928 9.625C16.5928 9.22805 16.271 8.90625 15.874 8.90625H13.7178V6.75C13.7178 6.35305 13.396 6.03125 12.999 6.03125H10.124C9.72707 6.03125 9.40527 6.35305 9.40527 6.75V8.90625H7.24807C6.85148 8.90678 6.53027 9.22842 6.53027 9.625V12.5C6.53027 12.897 6.85207 13.2187 7.24902 13.2187H9.40527V15.375C9.40527 15.772 9.72707 16.0937 10.124 16.0937H12.999C13.396 16.0937 13.7178 15.772 13.7178 15.375V13.2187H15.874C16.271 13.2187 16.5928 12.897 16.5928 12.5V9.625Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const WeightIcon: React.FC<SvgPropsTwoColors> = ({
  color = "#FF9500",
  secondColor = "#FFEACC",
}) => (
  <Svg width="32" height="32" viewBox="0 0 32 32" fill="none">
    <Rect
      x="5"
      y="5"
      width="22"
      height="22"
      rx="3"
      fill={secondColor}
      stroke={color}
      strokeWidth="1.77778"
    />
    <Path
      d="M13 11.9497H19"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
    />
  </Svg>
);

export const PlusIcon: React.FC<SvgProps> = ({ color = "#000000" }) => (
  <Svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <Path
      d="M1.375 7H12.625"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M7 1.375V12.625"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const PlusIconSmall: React.FC<SvgProps> = ({ color = "#5484A4" }) => (
  <Svg width="10" height="10" viewBox="0 0 10 10" fill="none">
    <Path
      d="M1.25 5H8.75"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M5 1.25V8.75"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const HeartbeatIcon: React.FC<SvgProps> = ({ color = "#9661B4" }) => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <Path
      d="M0.75 11.75H4.25C4.85567 11.7502 5.40202 11.3861 5.635 10.827L8.235 4.712C8.35657 4.42597 8.64196 4.24456 8.95255 4.25587C9.26313 4.26719 9.53456 4.46889 9.635 4.763L14.369 19.488C14.4694 19.7821 14.7409 19.9838 15.0515 19.9951C15.362 20.0065 15.6474 19.825 15.769 19.539L18.364 12.673C18.597 12.1139 19.1433 11.7498 19.749 11.75H23.249"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const EllipsisIcon: React.FC<SvgProps> = ({
  color = "rgb(140, 148, 157)",
}) => (
  <Svg width="16" height="16" fill={color}>
    <G transform="scale(0.66)">
      <Path
        clipRule="evenodd"
        d="M3.38 14.65a2.62 2.62 0 100-5.25 2.62 2.62 0 000 5.25zM20.63 14.65a2.62 2.62 0 100-5.25 2.62 2.62 0 000 5.25zM12 14.65a2.62 2.62 0 100-5.25 2.62 2.62 0 000 5.25z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
  </Svg>
);

export const InfoIcon: React.FC<SvgProps> = ({
  color = "#A8AEB6",
  width = 14,
  height = 14,
}) => (
  <Svg width={width} height={height} viewBox="0 0 14 14" fill="none">
    <G clipPath="url(#clip0_2679:399)">
      <Path
        d="M7.00002 12.8333C10.2217 12.8333 12.8334 10.2217 12.8334 7.00001C12.8334 3.77834 10.2217 1.16667 7.00002 1.16667C3.77836 1.16667 1.16669 3.77834 1.16669 7.00001C1.16669 10.2217 3.77836 12.8333 7.00002 12.8333Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7 9.33333V7"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7 4.66667H7.00583"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_2679:399">
        <Rect width="14" height="14" fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);

export const TooltipArrowIcon: React.FC<SvgProps> = ({
  color = "#A8AEB6",
  style,
}) => (
  <Svg viewBox="0 0 32 16" fill={color} style={style}>
    <Path d="M16 0l16 16H0z" fill={color}></Path>
  </Svg>
);

export const PlayIcon: React.FC<SvgProps> = ({ color = "white" }) => (
  <Svg width="8" height="12" viewBox="0 0 8 12" fill="none">
    <Path
      d="M7.98999 6.03892L-9.98522e-06 11.1689L-9.53674e-06 0.908935L7.98999 6.03892Z"
      fill={color}
    />
  </Svg>
);

export const BookmarkIcon: React.FC<SvgProps> = () => (
  <Svg width="16" height="20" viewBox="0 0 16 20" fill="none">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.409 18.9725L7.74854 15.2858L2.0881 18.9725C1.88297 19.1061 1.61502 19.1224 1.39292 19.0149C1.17081 18.9073 1.03141 18.6938 1.03125 18.4608V2.16083C1.03125 1.47047 1.63274 0.910828 2.37471 0.910828H13.1224C13.8643 0.910828 14.4658 1.47047 14.4658 2.16083V18.4608C14.4657 18.6938 14.3263 18.9073 14.1042 19.0149C13.8821 19.1224 13.6141 19.1061 13.409 18.9725Z"
      stroke="#24262B"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const StudyIcon: React.FC = () => (
  <Svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <Path
      d="M5.44868 12.146C4.15355 11.7173 2.80298 11.4793 1.43934 11.4393C0.910797 11.4102 0.497788 10.972 0.500009 10.4427V1.53333C0.499341 1.25566 0.614161 0.990203 0.816974 0.80054C1.01979 0.610876 1.29233 0.514082 1.56934 0.533335C5.78534 0.754002 8.00001 2.25867 8.00001 3.40933C8.00001 2.26667 10.4767 0.771335 14.4273 0.537335C14.7049 0.517111 14.9783 0.61347 15.1819 0.803243C15.3855 0.993016 15.5007 1.25903 15.5 1.53733V9.93733"
      stroke="#595E65"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M8 3.40933V6.00067"
      stroke="#595E65"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M6.22796 4.36534C5.02753 3.93186 3.78031 3.64097 2.51196 3.49867"
      stroke="#595E65"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M12.9426 6.14733C13.1733 6.11 13.4095 6.07555 13.6513 6.044"
      stroke="#595E65"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M6.22796 6.90867C5.02654 6.47854 3.77971 6.18775 2.51196 6.042"
      stroke="#595E65"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M6.22803 9.604C5.01528 9.17267 3.75705 8.88188 2.47803 8.73734"
      stroke="#595E65"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M9.93335 4.37C11.1467 3.93838 12.4056 3.64758 13.6854 3.50333"
      stroke="#595E65"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M15.4241 15.5007L15.4907 14.7527C15.5817 13.7509 14.9146 12.8375 13.9327 12.6193L11.4987 12.0787V8.25066C11.4987 7.56031 10.9391 7.00066 10.2487 7.00066C9.55838 7.00066 8.99874 7.56031 8.99874 8.25066V14.3873L8.01407 13.6487C7.6072 13.3439 7.0382 13.3845 6.67874 13.744C6.31929 14.1035 6.27866 14.6725 6.58341 15.0793L6.89941 15.5007"
      stroke="#595E65"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const TvWatchIcon: React.FC = () => (
  <Svg width="14" height="16" viewBox="0 0 14 16" fill="none">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.5 6C0.5 5.17157 1.17157 4.5 2 4.5H12C12.8284 4.5 13.5 5.17157 13.5 6V13C13.5 13.8284 12.8284 14.5 12 14.5H2C1.17157 14.5 0.5 13.8284 0.5 13V6Z"
      stroke="#595E65"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.53339 7.36201C5.3784 7.28463 5.1944 7.29299 5.04707 7.38411C4.89974 7.47522 4.81006 7.63611 4.81006 7.80934V11.1907C4.81006 11.3639 4.89974 11.5248 5.04707 11.6159C5.1944 11.707 5.3784 11.7154 5.53339 11.638L8.91539 9.94734C9.08449 9.86234 9.1912 9.68926 9.1912 9.50001C9.1912 9.31075 9.08449 9.13767 8.91539 9.05267L5.53339 7.36201Z"
      stroke="#595E65"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M1.5 14.5V15.5"
      stroke="#595E65"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M12.5 14.5V15.5"
      stroke="#595E65"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M11 0.5L7 4.5L3 0.5"
      stroke="#595E65"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const AudioListenIcon: React.FC = () => (
  <Svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.5 14.25V14.25C14.1569 14.25 15.5 12.9068 15.5 11.25V11.25C15.5 9.59312 14.1569 8.24997 12.5 8.24997V8.24997C11.9477 8.24997 11.5 8.69768 11.5 9.24997V13.25C11.5 13.5152 11.6054 13.7695 11.7929 13.9571C11.9804 14.1446 12.2348 14.25 12.5 14.25Z"
      stroke="#595E65"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.5 14.25V14.25C1.84315 14.25 0.5 12.9068 0.5 11.25V11.25C0.5 9.59312 1.84315 8.24997 3.5 8.24997V8.24997C4.05228 8.24997 4.5 8.69768 4.5 9.24997V13.25C4.5 13.8023 4.05228 14.25 3.5 14.25Z"
      stroke="#595E65"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M2.5 8.42064V7.24997C2.50879 4.21605 4.96608 1.75876 8 1.74997V1.74997C11.0339 1.75876 13.4912 4.21605 13.5 7.24997V8.42064"
      stroke="#595E65"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const CartIcon: React.FC = () => (
  <Svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <Path
      d="M4 12.75H10.614C11.1018 12.75 11.5184 12.3982 11.6 11.9173L13.358 1.58398C13.4399 1.10337 13.8565 0.75188 14.344 0.751984H15"
      stroke="#737981"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M5.25 14.25C5.38807 14.25 5.5 14.3619 5.5 14.5C5.5 14.6381 5.38807 14.75 5.25 14.75C5.11193 14.75 5 14.6381 5 14.5C5 14.3619 5.11193 14.25 5.25 14.25"
      stroke="#737981"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M10.25 14.25C10.3881 14.25 10.5 14.3619 10.5 14.5C10.5 14.6381 10.3881 14.75 10.25 14.75C10.1119 14.75 10 14.6381 10 14.5C10 14.3619 10.1119 14.25 10.25 14.25"
      stroke="#737981"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M11.9687 9.74998H3.92137C3.00382 9.74988 2.20403 9.12544 1.98137 8.23531L1.01471 4.36865C0.977328 4.21922 1.01091 4.06091 1.10572 3.93953C1.20054 3.81814 1.34601 3.74723 1.50004 3.74731H12.9894"
      stroke="#737981"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M4 5.75V7.25"
      stroke="#737981"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M7 5.75V7.25"
      stroke="#737981"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M10 5.75V7.25"
      stroke="#737981"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const RestaurantIcon: React.FC = () => (
  <Svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.5 4.12537C3.4665 4.12537 4.25 3.34186 4.25 2.37537C4.25 1.40887 3.4665 0.625366 2.5 0.625366C1.5335 0.625366 0.75 1.40887 0.75 2.37537C0.75 3.34186 1.5335 4.12537 2.5 4.12537Z"
      stroke="#737981"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.5 15.3754C4.94772 15.3754 4.5 14.9277 4.5 14.3754V12.3754H2.5C1.39543 12.3754 0.5 11.4799 0.5 10.3754V6.37537C0.5 5.9966 0.714002 5.65034 1.05279 5.48094C1.39157 5.31155 1.79698 5.34811 2.1 5.57537C2.11667 5.58671 3.868 6.87537 5.5 6.87537C6.05228 6.87537 6.5 7.32309 6.5 7.87537C6.5 8.42766 6.05228 8.87537 5.5 8.87537C4.45665 8.84138 3.4331 8.5814 2.5 8.11337V10.3754H4.5C5.60457 10.3754 6.5 11.2708 6.5 12.3754V14.3754C6.5 14.9277 6.05228 15.3754 5.5 15.3754Z"
      stroke="#737981"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M2.5 14.3754H0.5"
      stroke="#737981"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M15.5 8.37537H9.5C8.94772 8.37537 8.5 8.82308 8.5 9.37537C8.5 9.92765 8.94772 10.3754 9.5 10.3754H15.5"
      stroke="#737981"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M13.5 10.3754V15.3754"
      stroke="#737981"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13 5.37537H10L10.5 8.37537H12.5L13 5.37537V5.37537Z"
      stroke="#737981"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const RecipeIcon: React.FC = () => (
  <Svg width="16" height="18" viewBox="0 0 16 18" fill="none">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.652 9.99994C10.3876 10.0002 10.1388 9.875 9.98133 9.66261C9.0834 8.19957 8.57354 6.53165 8.5 4.81661C8.5 3.09928 9.61933 1.70728 11 1.70728C12.3807 1.70728 13.5 3.09928 13.5 4.81661C13.4265 6.53155 12.9168 8.19942 12.0193 9.66261C11.8617 9.87475 11.613 9.99984 11.3487 9.99994H10.652Z"
      stroke="#737981"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M11 1.70728V11.9999"
      stroke="#737981"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 15.5C12 16.0523 11.5523 16.5 11 16.5C10.4477 16.5 10 16.0523 10 15.5V12H12V15.5Z"
      stroke="#737981"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.5 6.5C2.5 5.94772 2.94772 5.5 3.5 5.5H5C5.55228 5.5 6 5.94772 6 6.5V11.5C6 12.0523 5.55228 12.5 5 12.5H3.5C2.94772 12.5 2.5 12.0523 2.5 11.5V6.5Z"
      stroke="#737981"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.99997 5.49994H3.49997L3.12463 2.74394C3.07395 2.31041 3.27674 1.8863 3.64599 1.65356C4.01525 1.42082 4.48535 1.42082 4.85461 1.65356C5.22386 1.8863 5.42665 2.31041 5.37597 2.74394L4.99997 5.49994Z"
      stroke="#737981"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.99997 12.5H3.49997L3.12463 15.256C3.07395 15.6895 3.27674 16.1136 3.64599 16.3464C4.01525 16.5791 4.48535 16.5791 4.85461 16.3464C5.22386 16.1136 5.42665 15.6895 5.37597 15.256L4.99997 12.5Z"
      stroke="#737981"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const CopyIcon: React.FC<SvgProps> = () => (
  <Svg width="20" height="21" fill="none">
    <Rect
      x="7.8"
      y="1.8"
      width="9.5"
      height="11.5"
      rx="1.3"
      fill="#fff"
      stroke="#737981"
      strokeWidth="1.5"
    />
    <Rect
      x="4.8"
      y="4.8"
      width="9.5"
      height="11.5"
      rx="1.3"
      fill="#fff"
      stroke="#737981"
      strokeWidth="1.5"
    />
    <Rect
      x="1.8"
      y="7.8"
      width="9.5"
      height="11.5"
      rx="1.3"
      fill="#fff"
      stroke="#737981"
      strokeWidth="1.5"
    />
  </Svg>
);

export const ReadingIcon: React.FC<SvgProps> = ({ color = "#23AFFF" }) => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <Path
      d="M8.17301 18.219C6.23033 17.576 4.20446 17.219 2.15901 17.159C1.3662 17.1153 0.746682 16.458 0.750013 15.664V2.3C0.749011 1.88348 0.921241 1.4853 1.22546 1.20081C1.52968 0.916312 1.9385 0.771121 2.35401 0.8C8.67801 1.131 12 3.388 12 5.114C12 3.4 15.715 1.157 21.641 0.806C22.0574 0.775664 22.4675 0.920203 22.7729 1.20486C23.0782 1.48952 23.2511 1.88855 23.25 2.306V14.906"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M12 5.114V9.001"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M9.34207 6.548C7.54142 5.89778 5.67058 5.46145 3.76807 5.248"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M19.4141 9.22099C19.7601 9.16499 20.1144 9.11333 20.4771 9.06599"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M9.34207 10.363C7.53993 9.71781 5.66969 9.28162 3.76807 9.063"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M9.3418 14.406C7.52267 13.759 5.63534 13.3228 3.7168 13.106"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M14.8999 6.555C16.7199 5.90757 18.6083 5.47138 20.5279 5.255"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M23.1359 23.251L23.2359 22.129C23.3724 20.6264 22.3717 19.2563 20.8989 18.929L17.2479 18.118V12.376C17.2479 11.3405 16.4084 10.501 15.3729 10.501C14.3373 10.501 13.4979 11.3405 13.4979 12.376V21.581L12.0209 20.473C11.4106 20.0159 10.5571 20.0768 10.0179 20.616C9.47869 21.1552 9.41775 22.0087 9.87487 22.619L10.3489 23.251"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const VideoIcon: React.FC<SvgProps> = ({ color = "#E64238" }) => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.25 8.25C2.25 7.42157 2.92157 6.75 3.75 6.75H20.25C21.0784 6.75 21.75 7.42157 21.75 8.25V20.25C21.75 21.0784 21.0784 21.75 20.25 21.75H3.75C2.92157 21.75 2.25 21.0784 2.25 20.25V8.25Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.79984 11.043C9.56736 10.9269 9.29136 10.9395 9.07036 11.0761C8.84936 11.2128 8.71485 11.4541 8.71484 11.714V16.786C8.71485 17.0458 8.84936 17.2872 9.07036 17.4238C9.29136 17.5605 9.56736 17.5731 9.79984 17.457L14.8728 14.921C15.1265 14.7935 15.2866 14.5339 15.2866 14.25C15.2866 13.9661 15.1265 13.7065 14.8728 13.579L9.79984 11.043Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M3.75 21.75V23.25"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M20.25 21.75V23.25"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M18 0.75L12 6.75L6 0.75"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const ShareIcon: React.FC<SvgProps> = () => (
  <Svg width="17" height="22" viewBox="0 0 17 22" fill="none">
    <Path
      d="M13.2923 7.875H14.6358C15.3777 7.875 15.9792 8.43464 15.9792 9.125V19.125C15.9792 19.8154 15.3777 20.375 14.6358 20.375H2.54463C1.80266 20.375 1.20117 19.8154 1.20117 19.125V9.125C1.20117 8.43464 1.80266 7.875 2.54463 7.875H3.88809"
      stroke="#24262B"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M8.58984 1.625V10.375"
      stroke="#24262B"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M5.23242 4.75L8.59107 1.625L11.9497 4.75"
      stroke="#24262B"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export const QuizIcon: React.FC<SvgProps> = ({ color = "#9661B4" }) => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21.75 18.75H11.25L5.25 23.25V18.75H2.25C1.42157 18.75 0.75 18.0784 0.75 17.25V2.25C0.75 1.42157 1.42157 0.75 2.25 0.75H21.75C22.5784 0.75 23.25 1.42157 23.25 2.25V17.25C23.25 18.0784 22.5784 18.75 21.75 18.75Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M9 6.74999C9.00029 5.22442 10.1455 3.942 11.6613 3.76975C13.1771 3.59749 14.5808 4.59027 14.9234 6.07687C15.266 7.56348 14.4383 9.07047 13 9.57899C12.4004 9.79098 11.9997 10.358 12 10.994V11.25"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M12 14.25C11.7929 14.25 11.625 14.4179 11.625 14.625C11.625 14.8321 11.7929 15 12 15C12.2071 15 12.375 14.8321 12.375 14.625C12.375 14.4179 12.2071 14.25 12 14.25V14.25"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const BookmarkedIcon: React.FC<SvgProps> = () => (
  <Svg width="16" height="20" viewBox="0 0 16 20" fill="none">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.409 18.9725L7.74854 15.2858L2.0881 18.9725C1.88297 19.1061 1.61502 19.1224 1.39292 19.0149C1.17081 18.9073 1.03141 18.6938 1.03125 18.4608V2.16083C1.03125 1.47047 1.63274 0.910828 2.37471 0.910828H13.1224C13.8643 0.910828 14.4658 1.47047 14.4658 2.16083V18.4608C14.4657 18.6938 14.3263 18.9073 14.1042 19.0149C13.8821 19.1224 13.6141 19.1061 13.409 18.9725Z"
      fill="#24262B"
      stroke="#24262B"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export const TaskIcon: React.FC<SvgProps> = ({ color = "#00AC47" }) => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.75 2.24902C0.75 1.4206 1.42157 0.749023 2.25 0.749023H21.75C22.5784 0.749023 23.25 1.4206 23.25 2.24902V21.749C23.25 22.5775 22.5784 23.249 21.75 23.249H2.25C1.42157 23.249 0.75 22.5775 0.75 21.749V2.24902Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M12 4.49902L7.5 10.499L4.5 7.49902"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M14.25 8.24902H18.75"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M12 13.499L7.5 19.499L4.5 16.499"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M14.25 17.249H18.75"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const TipIcon: React.FC<SvgProps> = ({ color = "#FF9500" }) => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <Path
      d="M15 17.25V21.75C15 22.5784 14.3284 23.25 13.5 23.25H10.5C9.67157 23.25 9 22.5784 9 21.75V17.25"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M9 20.25H15"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M12 0.75V2.25"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M1.5 11.25H3"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M3.75 3.75L4.85 4.807"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M22.5 11.25H21"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M20.2499 3.75L19.1499 4.807"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M13.5 17.25V11.25C13.5 10.4216 14.1716 9.75 15 9.75C15.8284 9.75 16.5 10.4216 16.5 11.25C16.5 12.0784 15.8284 12.75 15 12.75H9C8.17157 12.75 7.5 12.0784 7.5 11.25C7.5 10.4216 8.17157 9.75 9 9.75C9.82843 9.75 10.5 10.4216 10.5 11.25V17.25"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.91505 17.25H15.0851C17.359 16.1213 18.784 13.7884 18.7501 11.25C18.6844 7.54961 15.7004 4.56565 12.0001 4.5C8.29814 4.56572 5.31357 7.55205 5.25005 11.254C5.21767 13.791 6.64244 16.1219 8.91505 17.25V17.25Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const TagIcon: React.FC = () => (
  <Svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.06055 2.43123V8.15082C1.06046 8.87794 1.34915 9.57533 1.86314 10.0896L12.4312 20.6586C12.9666 21.1939 13.8346 21.1939 14.37 20.6586L20.6582 14.3695C21.1935 13.8341 21.1935 12.9661 20.6582 12.4307L10.0901 1.86265C9.57582 1.34866 8.87843 1.05997 8.15131 1.06006H2.43171C1.67444 1.06006 1.06055 1.67395 1.06055 2.43123Z"
      stroke="#24262B"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.85945 7.23031C6.61672 7.23031 7.23061 6.61642 7.23061 5.85914C7.23061 5.10187 6.61672 4.48798 5.85945 4.48798C5.10217 4.48798 4.48828 5.10187 4.48828 5.85914C4.48828 6.61642 5.10217 7.23031 5.85945 7.23031Z"
      stroke="#24262B"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const EsIcon: React.FC<SvgProps> = ({ color = "#017124" }) => (
  <Svg width="32" height="32" viewBox="0 0 32 32" fill="none">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M29 25H15L7 31V25H3C1.89543 25 1 24.1046 1 23V3C1 1.89543 1.89543 1 3 1H29C30.1046 1 31 1.89543 31 3V23C31 24.1046 30.1046 25 29 25Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M15.51 18V16.796H11.478V13.548H14.698L14.502 12.344H11.478V9.54403H15.37V8.34003H10.162V18H15.51Z"
      fill={color}
    />
    <Path
      d="M22.578 15.396C22.578 13.94 21.934 13.296 20.058 12.442C18.588 11.77 18.224 11.42 18.224 10.678C18.224 9.96403 18.714 9.37603 19.82 9.37603C20.59 9.37603 21.318 9.68403 21.85 10.09L22.06 8.77403C21.5 8.45203 20.8 8.22803 19.862 8.22803C18.112 8.22803 16.922 9.22203 16.922 10.776C16.922 12.162 17.608 12.764 19.428 13.59C20.884 14.248 21.276 14.612 21.276 15.494C21.276 16.432 20.562 16.964 19.554 16.964C18.588 16.964 17.678 16.572 17.02 16.138L16.824 17.482C17.538 17.86 18.476 18.112 19.526 18.112C21.332 18.112 22.578 17.062 22.578 15.396Z"
      fill={color}
    />
  </Svg>
);

export const ChevronUp: React.FC<SvgProps> = ({
  color = "#226EAD",
  height = 16,
  width = 18,
  viewBox = "0 0 18 16",
}) => (
  <Svg width={width} height={height} viewBox={viewBox} fill="none">
    <Path
      d="M1.5 11.4593L8.64667 4.31325C8.74033 4.21945 8.86745 4.16675 9 4.16675C9.13255 4.16675 9.25967 4.21945 9.35333 4.31325L16.5 11.4593"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const ChevronDown: React.FC<SvgProps> = ({
  color = "#226EAD",
  height = 16,
  width = 18,
  viewBox = "0 0 18 16",
}) => (
  <Svg width={width} height={height} viewBox={viewBox} fill="none">
    <Path
      d="M16.5 4.87402L9.35333 12.02C9.25967 12.1138 9.13255 12.1665 9 12.1665C8.86745 12.1665 8.74033 12.1138 8.64667 12.02L1.5 4.87402"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const ArrowRightCircle: React.FC<SvgProps> = ({
  color = "#0D4681",
  height = 24,
  width = 24,
  viewBox = "0 0 24 24",
}) => (
  <Svg width={width} height={height} viewBox={viewBox} fill="none">
    <Path
      d="M12.001 22.497C17.8 22.497 22.501 17.796 22.501 11.997C22.501 6.198 17.8 1.49699 12.001 1.49699C6.20199 1.49699 1.50098 6.198 1.50098 11.997C1.50098 17.796 6.20199 22.497 12.001 22.497Z"
      stroke={color}
      fillRule="evenodd"
      clipRule="evenodd"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M12.751 8.24699L16.501 11.997L12.751 15.747"
      stroke={color}
      fillRule="evenodd"
      clipRule="evenodd"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M16.501 11.997H7.50098"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const ArrowLeftCircle: React.FC<SvgProps> = ({
  color = "#0D4681",
  height = 24,
  width = 24,
  viewBox = "0 0 24 24",
}) => (
  <Svg width={width} height={height} viewBox={viewBox} fill="none">
    <Path
      d="M12.001 22.497C17.8 22.497 22.501 17.796 22.501 11.997C22.501 6.198 17.8 1.49699 12.001 1.49699C6.20199 1.49699 1.50098 6.198 1.50098 11.997C1.50098 17.796 6.20199 22.497 12.001 22.497Z"
      stroke={color}
      fillRule="evenodd"
      clipRule="evenodd"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M11.251 15.747L7.50098 11.997L11.251 8.24699"
      stroke={color}
      fillRule="evenodd"
      clipRule="evenodd"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M7.50098 11.997H16.501"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const ChecklistIcon: React.FC<SvgProps> = ({
  color = "#595E65",
  width = 13,
  height = 13,
  viewBox = "0 0 13 13",
}) => (
  <Svg width={width} height={height} viewBox={viewBox} fill="none">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.375 10.8805C11.375 11.2947 11.0392 11.6305 10.625 11.6305H2.375C1.96079 11.6305 1.625 11.2947 1.625 10.8805V1.13049C1.625 0.71628 1.96079 0.380493 2.375 0.380493H7.6895C7.88827 0.380536 8.0789 0.459484 8.2195 0.599993L11.1555 3.53599C11.296 3.67659 11.375 3.86722 11.375 4.06599V10.8805Z"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M11.375 4.13049H8.375C7.96079 4.13049 7.625 3.79471 7.625 3.38049V0.380493"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M5.3345 4.80945L4.2685 6.23045C4.20325 6.31734 4.10351 6.37165 3.99512 6.37932C3.88673 6.387 3.78034 6.34728 3.7035 6.27045L3.125 5.69245"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M5.3345 8.18445L4.2685 9.60545C4.20325 9.69234 4.10351 9.74665 3.99512 9.75432C3.88673 9.762 3.78034 9.72228 3.7035 9.64545L3.125 9.06695"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M6.875 6.38049H9.125"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M6.875 9.38049H9.125"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const EmailCheckedIcon: React.FC<SvgPropsTwoColors> = ({
  color = "#226EAD",
  secondColor = "#00AC47",
  width = "158",
  height = "127",
  viewBox = "0 0 158 127",
}) => (
  <Svg width={width} height={height} viewBox={viewBox} fill="none">
    <Path
      d="M120.909 18.8615C121.971 19.9259 122.567 21.3687 122.566 22.8725V102.34C122.567 103.843 121.971 105.286 120.909 106.351C119.846 107.415 118.405 108.014 116.901 108.015H9.77236C8.26853 108.014 6.82685 107.415 5.76446 106.351C4.70208 105.286 4.10603 103.843 4.10742 102.34L4.10742 22.8725C4.10603 21.3687 4.70208 19.9259 5.76446 18.8615M120.909 18.8615C119.846 17.7972 118.405 17.1985 116.901 17.1971H9.77236C8.26853 17.1985 6.82685 17.7972 5.76446 18.8615M120.909 18.8615L63.3365 65.8966L5.76446 18.8615"
      stroke={color}
      strokeWidth="5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M155.658 26.5864C155.658 40.3672 144.268 51.5864 130.158 51.5864C116.048 51.5864 104.658 40.3672 104.658 26.5864C104.658 12.8056 116.048 1.58643 130.158 1.58643C144.268 1.58643 155.658 12.8056 155.658 26.5864Z"
      fill="white"
      stroke="#00AC47"
      strokeWidth="3"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M138.856 18.0357C139.657 18.5552 139.878 19.614 139.349 20.4007L128.254 36.8928L121.651 30.2338C120.981 29.5582 120.996 28.4775 121.684 27.82C122.373 27.1625 123.474 27.1771 124.144 27.8527L127.733 31.4721L136.446 18.5197C136.975 17.733 138.054 17.5163 138.856 18.0357Z"
      fill={secondColor}
    />
  </Svg>
);

export const LargePlayIcon: React.FC<SvgProps> = ({
  color = "#ffffff",
  width = 48,
  height = 48,
  viewBox = "0 0 48 48",
}) => (
  <Svg width={width} height={height} viewBox={viewBox} fill="none">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.67578 6.51001V41.49C4.67568 42.5451 5.22985 43.5227 6.13521 44.0645C7.04056 44.6063 8.16399 44.6327 9.09378 44.134L41.7398 26.644C42.7142 26.1216 43.3223 25.1056 43.3223 24C43.3223 22.8944 42.7142 21.8784 41.7398 21.356L9.09378 3.86601C8.16399 3.3673 7.04056 3.39369 6.13521 3.93551C5.22985 4.47733 4.67568 5.45491 4.67578 6.51001Z"
      fill={color}
      fillOpacity="0.5"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const WarningIcon: React.FC<SvgProps> = ({
  color = "#FF9500",
  width = "24",
  height = "24",
  viewBox = "0 0 24 24",
}) => (
  <Svg width={width} height={height} viewBox={viewBox} fill="none">
    <Path
      d="M12 18.75C11.7929 18.75 11.625 18.9179 11.625 19.125C11.625 19.3321 11.7929 19.5 12 19.5C12.2071 19.5 12.375 19.3321 12.375 19.125C12.375 18.9179 12.2071 18.75 12 18.75V18.75"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M12 15.75V8.25"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.621 1.75976C13.3174 1.14165 12.6887 0.75 12 0.75C11.3114 0.75 10.6826 1.14165 10.379 1.75976L0.906011 21.0578C0.674185 21.5294 0.702213 22.0872 0.980139 22.5332C1.25807 22.9792 1.74652 23.2501 2.27201 23.2498H21.728C22.2535 23.2501 22.742 22.9792 23.0199 22.5332C23.2978 22.0872 23.3258 21.5294 23.094 21.0578L13.621 1.75976Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const VirtaLogo: React.FC<SvgProps> = ({
  width = "64",
  height = "64",
  viewBox = "0 0 64 64",
}) => (
  <Svg width={width} height={height} viewBox={viewBox} fill="none">
    <Path
      d="M55.7851 25.6239C54.9661 22.5694 55.6621 19.7856 59.7115 15.9965C54.4037 17.6063 51.6267 16.8155 49.4087 14.5905C47.1906 12.3656 46.3822 9.59578 48.0026 4.28823C44.2098 8.33744 41.4258 9.02988 38.3712 8.21441C35.3165 7.39895 33.2567 5.40246 31.9982 0C30.7398 5.40246 28.6764 7.38137 25.6218 8.21441C22.5671 9.04745 19.7832 8.33744 15.9938 4.28823C17.6038 9.59578 16.8129 12.3726 14.5878 14.5905C12.3627 16.8084 9.59631 17.6134 4.28846 15.9965C8.33789 19.7856 9.03037 22.5694 8.21486 25.6239C7.39935 28.6784 5.40276 30.7417 0 32C5.40276 33.2584 7.38178 35.3216 8.21486 38.3761C9.04795 41.4306 8.33789 44.2109 4.28846 48.0035C9.59631 46.3902 12.3733 47.181 14.5878 49.4095C16.8023 51.638 17.6143 54.4042 15.9938 59.7118C19.7832 55.6626 22.5671 54.9666 25.6218 55.7856C28.6764 56.6046 30.7398 58.5975 31.9982 64C33.2567 58.5975 35.32 56.6186 38.3712 55.7856C41.4223 54.9526 44.2098 55.6626 48.0026 59.7118C46.3892 54.4042 47.1801 51.6274 49.4087 49.4095C51.6373 47.1916 54.4037 46.3831 59.7115 48.0035C55.6621 44.2109 54.9661 41.4271 55.7851 38.3761C56.6042 35.3251 58.5972 33.2584 64 32C58.5972 30.7417 56.6042 28.6784 55.7851 25.6239ZM37.1549 51.2127C33.3548 52.2319 29.3378 52.1013 25.6119 50.8376C21.886 49.5738 18.6185 47.2336 16.2227 44.1129C13.827 40.9922 12.4104 37.2312 12.1524 33.3055C11.8943 29.3797 12.8062 25.4656 14.7728 22.0582C16.7394 18.6507 19.6724 15.9029 23.2008 14.1623C26.7292 12.4217 30.6946 11.7665 34.5954 12.2795C38.4962 12.7924 42.1573 14.4506 45.1157 17.0443C48.074 19.6379 50.1968 23.0506 51.2155 26.8506C51.8916 29.3741 52.0639 32.0061 51.7226 34.5962C51.3814 37.1863 50.5332 39.6839 49.2265 41.9462C47.9199 44.2084 46.1803 46.1912 44.1073 47.7812C42.0342 49.3711 39.6682 50.5371 37.1444 51.2127H37.1549Z"
      fill="white"
    />
  </Svg>
);

export const VirtaLogoLarge: React.FC<SvgProps> = ({
  color = "blue",
  width = "128",
  height = "128",
  viewBox = "0 0 1350 1350",
}) => (
  <Svg width={width} height={height} viewBox={viewBox} fill="none">
    <Path
      d="M434.713 939.733c29.737 0 52.553-21.385 52.553-51.037 0-29.651-22.816-51.037-52.553-51.037-29.738 0-52.554 21.386-52.554 51.037 0 29.652 22.816 51.037 52.554 51.037zm40.802 401.967V996.952H393.91V1341.7h81.605zm-252.314 0c57.383-88.23 103.737-202.02 127.238-344.748h-83.768c-15.896 104.808-38.713 180.638-76.74 247.528-37.343-66.89-60.159-142.72-76.019-247.528H28.125C51.626 1139.68 98.629 1253.47 155.364 1341.7h67.837zm743.391-4.81v-68.29a185.246 185.246 0 01-47.038 6.9c-33.883 0-46.318-13.8-46.318-58.62v-150.96h98.871l26.962-68.968H873.164V893.513l-81.606 24.152v318.555c0 75.15 48.408 112.38 114.082 112.38a159.34 159.34 0 0060.88-11.71h.072zm-346.464-167.56c0-70.34 32.44-106.86 96.132-106.86 15.243.03 30.396 2.34 44.948 6.87v-69.62a150.124 150.124 0 00-45.669-7.584c-42.173 0-73.964 18.614-95.411 51.004v-46.188H538.45V1341.7h81.606l.072-172.37zm501.962 117.24c-35.25 0-54.61-20.7-54.61-46.9 0-28.25 22.13-48.96 73.97-48.96 17.62.14 35.2 1.75 52.55 4.82v25.63c0 40.57-33.88 65.41-71.91 65.41zm195 53.19v-60.09c-34.56 4.13-46.85-7.59-46.85-37.24v-135.86c0-84.1-53.24-116.518-150.06-116.518-29.51.04-58.94 3.051-87.84 8.985l-28.33 72.383a504.525 504.525 0 01107.16-13.8c54.07 0 82.9 16.57 82.9 55.17v24.15c-20.99-4.02-42.31-6.1-63.69-6.21-95.41 0-141.728 49.63-141.728 109.62 0 58.62 45.628 108.25 119.638 108.25 43.54 0 76.74-17.97 96.78-45.5 20.76 35.19 65.89 51.04 112.02 36.66zM1051.52 383.718c-48.56-9.345-72.995-31.736-78.546-59.627-5.551-27.89 8.434-57.866 49.666-85.037-48.405 9.919-79.584-1.438-95.407-25.159-15.824-23.722-14.418-56.68 13.264-97.51-40.947 27.603-74.108 29.005-97.826 13.227-23.718-15.779-35.072-46.724-25.231-95.173-27.214 41.153-57.312 55.098-85.283 49.527-27.971-5.571-50.463-29.903-59.762-78.317-9.372 48.414-31.828 72.782-59.799 78.317-27.971 5.535-58.033-8.374-85.283-49.527 9.949 48.305-1.478 79.358-25.231 95.173-23.754 15.814-56.879 14.376-97.826-13.227 27.718 40.83 29.124 73.86 13.264 97.51-15.86 23.649-46.858 35.007-95.411 25.159 41.272 27.171 55.221 57.183 49.67 85.037-5.551 27.855-29.989 50.318-78.542 59.627 48.553 9.345 72.991 31.701 78.542 59.591 5.551 27.891-8.398 57.902-49.67 85.038 48.409-9.884 79.587 1.474 95.411 25.159 15.824 23.685 14.418 56.68-13.264 97.509 40.947-27.639 74.108-29.004 97.826-13.226 23.717 15.778 35.108 46.724 25.231 95.173 27.25-41.153 57.312-55.098 85.283-49.563 27.971 5.535 50.463 29.903 59.799 78.316 9.335-48.413 31.791-72.745 59.762-78.316 27.971-5.571 58.069 8.41 85.283 49.563-9.913-48.305 1.477-79.359 25.231-95.173 23.754-15.814 56.879-14.377 97.826 13.226-27.718-40.829-29.124-73.895-13.264-97.509 15.86-23.614 46.858-35.007 95.407-25.159-41.232-27.136-55.217-57.147-49.666-85.038 5.551-27.89 29.986-50.138 78.546-59.591zM722.173 632.541a255.121 255.121 0 01-147.014-14.432c-46.495-19.202-86.235-51.72-114.195-93.444a253.196 253.196 0 01-42.883-140.957 253.19 253.19 0 0142.882-140.957c27.96-41.723 67.7-74.242 114.194-93.444a255.114 255.114 0 01147.014-14.434c49.357 9.792 94.695 33.958 130.278 69.443 35.583 35.484 59.814 80.694 69.629 129.911a253.034 253.034 0 01.02 99.014 253.335 253.335 0 01-37.985 91.483 254.116 254.116 0 01-70.204 70.024 254.863 254.863 0 01-91.736 37.901v-.108z"
      fill={color}
    />
  </Svg>
);
export const IconHeadset: React.FC<SvgProps> = ({
  color = "blue",
  width = "32",
  height = "32",
  viewBox = "0 0 32 32",
}) => (
  <Svg width={width} height={height} viewBox={viewBox} fill="none">
    <Path
      d="M17.1898 26.5249H15.8754C14.7865 26.5249 13.9038 25.6421 13.9038 24.5532C13.9038 23.4643 14.7865 22.5816 15.8754 22.5816H17.1898C18.2787 22.5816 19.1614 23.4643 19.1614 24.5532C19.1614 25.6421 18.2787 26.5249 17.1898 26.5249ZM17.1898 26.5249C20.8194 26.5249 23.1046 23.5824 23.1046 19.9528M23.1046 19.9528H24.419C25.8709 19.9528 27.0479 18.7759 27.0479 17.324C27.0479 15.8721 25.8709 14.6952 24.419 14.6952H23.1046M23.1046 19.9528V14.6952M23.1046 14.6952V12.0664C23.1046 8.43673 20.4758 5.49432 16.5326 5.49432C12.5894 5.49432 9.96056 8.43673 9.96056 12.0664V14.6952M9.96056 14.6952V18.6384C9.96056 19.3643 9.37208 19.9528 8.64615 19.9528C7.1943 19.9528 6.01733 18.7759 6.01733 17.324C6.01733 15.8721 7.1943 14.6952 8.64615 14.6952H9.96056Z"
      stroke={color}
      strokeWidth="2.62882"
    />
  </Svg>
);
export const IconForm: React.FC<SvgProps> = ({
  color = "blue",
  width = "32",
  height = "32",
  viewBox = "0 0 32 32",
}) => (
  <Svg width={width} height={height} viewBox={viewBox} fill="none">
    <Rect
      x="6.96533"
      y="5.49432"
      width="18.4017"
      height="21.0305"
      rx="2.62882"
      stroke={color}
      strokeWidth="2.62882"
    />
    <Path
      d="M12.2229 10.752H20.1093"
      stroke={color}
      strokeWidth="2.62882"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M12.2229 16.0096H20.1093"
      stroke={color}
      strokeWidth="2.62882"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M12.2229 21.2672H20.1093"
      stroke={color}
      strokeWidth="2.62882"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const IconClipboard: React.FC<SvgProps> = ({
  color = "blue",
  width = "32",
  height = "32",
  viewBox = "0 0 32 32",
}) => (
  <Svg width={width} height={height} viewBox={viewBox} fill="none">
    <Path
      d="M10.9044 6.85236H7.72537C6.76493 6.81287 5.95322 7.5571 5.90942 8.51735V26.8322C5.95322 27.7924 6.76493 28.5367 7.72537 28.4972H24.0733C25.0337 28.5367 25.8454 27.7924 25.8892 26.8322V8.51735C25.8454 7.5571 25.0337 6.81287 24.0733 6.85236H20.8943"
      stroke={color}
      strokeWidth="1.97161"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20.8944 17.6747C20.8944 17.215 20.5217 16.8422 20.062 16.8422H17.5645V14.3448C17.5645 13.885 17.1918 13.5123 16.732 13.5123H15.067C14.6072 13.5123 14.2345 13.885 14.2345 14.3448V16.8422H11.737C11.2773 16.8422 10.9045 17.215 10.9045 17.6747V19.3397C10.9045 19.7995 11.2773 20.1722 11.737 20.1722H14.2345V22.6697C14.2345 23.1295 14.6072 23.5022 15.067 23.5022H16.732C17.1918 23.5022 17.5645 23.1295 17.5645 22.6697V20.1722H20.062C20.5217 20.1722 20.8944 19.7995 20.8944 19.3397V17.6747Z"
      stroke={color}
      strokeWidth="1.97161"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18.7677 5.18733C18.1796 4.15798 17.085 3.52271 15.8995 3.52271C14.714 3.52271 13.6194 4.15798 13.0313 5.18733H11.737C11.5162 5.18733 11.3045 5.27504 11.1484 5.43117C10.9922 5.58729 10.9045 5.79904 10.9045 6.01983V9.3498C10.9045 9.80957 11.2773 10.1823 11.737 10.1823H20.062C20.5217 10.1823 20.8944 9.80957 20.8944 9.3498V6.01983C20.8944 5.56005 20.5217 5.18733 20.062 5.18733H18.7677Z"
      stroke={color}
      strokeWidth="1.97161"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export const IconFinalStepsCalendar: React.FC<SvgProps> = ({
  color = "blue",
  width = "33",
  height = "32",
  viewBox = "0 0 33 32",
}) => (
  <Svg width={width} height={height} viewBox={viewBox} fill="none">
    <Rect
      x="5.75049"
      y="8.12314"
      width="21.0305"
      height="18.4017"
      rx="2.62882"
      stroke={color}
      strokeWidth="2.62882"
    />
    <Path
      d="M11.0081 5.49432V10.752"
      stroke={color}
      strokeWidth="2.62882"
      strokeLinecap="round"
    />
    <Path
      d="M21.5234 5.49432V10.752"
      stroke={color}
      strokeWidth="2.62882"
      strokeLinecap="round"
    />
    <Circle
      cx="16.2658"
      cy="16.0096"
      r="0.657204"
      fill={color}
      stroke={color}
      strokeWidth="1.31441"
    />
    <Circle
      cx="11.0083"
      cy="16.0096"
      r="0.657204"
      fill={color}
      stroke={color}
      strokeWidth="1.31441"
    />
    <Circle
      cx="21.5236"
      cy="16.0096"
      r="0.657204"
      fill={color}
      stroke={color}
      strokeWidth="1.31441"
    />
    <Circle
      cx="16.2658"
      cy="21.2672"
      r="0.657204"
      fill={color}
      stroke={color}
      strokeWidth="1.31441"
    />
    <Circle
      cx="11.0083"
      cy="21.2672"
      r="0.657204"
      fill={color}
      stroke={color}
      strokeWidth="1.31441"
    />
    <Circle
      cx="21.5236"
      cy="21.2672"
      r="0.657204"
      fill={color}
      stroke={color}
      strokeWidth="1.31441"
    />
  </Svg>
);

export const GlobeIcon: React.FC<SvgProps> = ({
  color = "#226EAD",
  width = 18,
  height = 18,
  viewBox = "0 0 18 18",
}) => (
  <Svg width={width} height={height} viewBox={viewBox} fill="none">
    <Path
      d="M9,16.5A7.5,7.5,0,1,0,1.5,9,7.5,7.5,0,0,0,9,16.5Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5px"
    />
    <Path
      d="M5.72,11.5a1,1,0,0,0,.79-.38,1,1,0,0,0,.18-.86l-.5-2a1,1,0,0,0-1-.76H1.65a7.49,7.49,0,0,0,2.68,7.36L5,11.5Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5px"
    />
    <Path
      d="M15,4.5H12.28a1,1,0,0,0-1,.76l-.5,2a1,1,0,0,0,.18.86,1,1,0,0,0,.79.38h1.05l.53,3.17a1,1,0,0,0,1,.83h1.28a7.47,7.47,0,0,0-.64-8Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5px"
    />
  </Svg>
);

export const LogoutIcon: React.FC<SvgProps> = ({
  color = "#226EAD",
  width = 24,
  height = 24,
  viewBox = "0 0 24 24",
}) => (
  <Svg width={width} height={height} viewBox={viewBox} fill="none">
    <Path
      d="M19 8C19 8.55228 19.4477 9 20 9C20.5523 9 21 8.55228 21 8H19ZM21 16C21 15.4477 20.5523 15 20 15C19.4477 15 19 15.4477 19 16H21ZM21 8V6H19V8H21ZM18 3H6V5H18V3ZM3 6V18H5V6H3ZM6 21H18V19H6V21ZM21 18V16H19V18H21ZM18 21C19.6569 21 21 19.6569 21 18H19C19 18.5523 18.5523 19 18 19V21ZM3 18C3 19.6569 4.34315 21 6 21V19C5.44772 19 5 18.5523 5 18H3ZM6 3C4.34315 3 3 4.34315 3 6H5C5 5.44772 5.44772 5 6 5V3ZM21 6C21 4.34315 19.6569 3 18 3V5C18.5523 5 19 5.44772 19 6H21Z"
      fill={color}
    />
    <Path
      d="M9 11C8.44772 11 8 11.4477 8 12C8 12.5523 8.44772 13 9 13V11ZM19 12L19.7071 12.7071C20.0976 12.3166 20.0976 11.6834 19.7071 11.2929L19 12ZM15.7071 7.29289C15.3166 6.90237 14.6834 6.90237 14.2929 7.29289C13.9024 7.68342 13.9024 8.31658 14.2929 8.70711L15.7071 7.29289ZM14.2929 15.2929C13.9024 15.6834 13.9024 16.3166 14.2929 16.7071C14.6834 17.0976 15.3166 17.0976 15.7071 16.7071L14.2929 15.2929ZM9 13H19V11H9V13ZM19.7071 11.2929L15.7071 7.29289L14.2929 8.70711L18.2929 12.7071L19.7071 11.2929ZM18.2929 11.2929L14.2929 15.2929L15.7071 16.7071L19.7071 12.7071L18.2929 11.2929Z"
      fill={color}
    />
  </Svg>
);

export const VMCheck: React.FC<SvgProps> = ({ color = "#009C7A", style }) => (
  <Svg width="64" height="64" viewBox="0 0 64 64" fill="none" style={style}>
    <Path
      d="M53.3333 16L24 45.3333L10.6666 32"
      stroke={color}
      strokeWidth="8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const VMError: React.FC<SvgProps> = ({ color = "#E64238", style }) => (
  <Svg width="64" height="64" viewBox="0 0 64 64" fill="none" style={style}>
    <Path
      d="M32 44C31.4477 44 31 44.4477 31 45C31 45.5523 31.4477 46 32 46C32.5523 46 33 45.5523 33 45C33 44.4477 32.5523 44 32 44V44"
      stroke={color}
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path d="M32 36V14" stroke={color} strokeWidth="3" strokeLinecap="round" />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M32 62C48.5685 62 62 48.5685 62 32C62 15.4315 48.5685 2 32 2C15.4315 2 2 15.4315 2 32C2 48.5685 15.4315 62 32 62Z"
      stroke={color}
      strokeWidth="3"
    />
  </Svg>
);
/* eslint-enable max-lines*/
