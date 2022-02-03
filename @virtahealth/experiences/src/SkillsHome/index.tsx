import * as React from "react";
import { Linking, useWindowDimensions } from "react-native";
import {
  withVirta,
  styled,
  VirtaClient,
  ClickEventProperties,
  LinkTile,
  VirtaAnalyticsClient,
} from "@virtahealth/components";
import { getPlatformFontFamilySuffix } from "@virtahealth/utils";
import { DefaultTheme } from "styled-components/native";
import {
  calculateJustifyContent,
  calculateTileHeightPixels,
  calculateTileWidthPercentage,
  getColorForTile,
} from "./utils";

interface SkillsHomeProps {
  navigationFn?(url: string): void;
}

interface InnerProps extends SkillsHomeProps {
  analyticsClient?: VirtaAnalyticsClient;
  client?: VirtaClient;
}

interface SkillTileItem {
  title: string;
  url: string;
  id: number;
}

interface SkillTileWrapperProps {
  screenWidth: number;
}

interface ContentWrapperProps {
  screenWidth: number;
}

const Container = styled.View``;
const SubHeadingText = styled.Text`
  font-family: "${({ theme }) =>
    theme[
      `textSubHeadingFontFamily${getPlatformFontFamilySuffix()}` as keyof DefaultTheme
    ]}";
  font-size: ${({ theme }) => theme.textSubHeadingFontSize}px;
  font-weight: ${({ theme }) => theme.textSubHeadingFontWeight};
  color: ${({ theme }) => theme.textSubHeadingColor};
  margin: 10px 0;
`;
const ContentWrapper = styled.View<ContentWrapperProps>`
  display: flex;
  align-items: center;
  justify-content: ${({ screenWidth }) => calculateJustifyContent(screenWidth)};
  flex-flow: row wrap;
`;
const SkillTileWrapper = styled.View<SkillTileWrapperProps>`
  margin: 7px 0;
  height: ${({ screenWidth }) => calculateTileHeightPixels(screenWidth)}px;
  width: ${({ screenWidth }) => calculateTileWidthPercentage(screenWidth)}%;
`;

export const InnerSkillsHome: React.FC<InnerProps> = ({
  analyticsClient,
  client,
  navigationFn,
}) => {
  const [skills, setSkills] = React.useState<SkillTileItem[]>();

  React.useEffect(() => {
    const abortController = new AbortController();
    const fetchSkills = async () => {
      const skillsUrl = `/api/v1/actions/templates?location=skills`;
      const fetchedSkills = (await client!.get(skillsUrl)) as SkillTileItem[];
      setSkills(fetchedSkills);
    };
    if (!skills) {
      fetchSkills();
    }
    return () => {
      abortController.abort();
    };
  }, []);
  const { width: screenWidth } = useWindowDimensions();

  const logSkillTileClicked = (properties: ClickEventProperties) => {
    analyticsClient!.logClickEvent("Skills Home Tile", properties);
  };
  const tiles = skills
    ? skills.map((skill) => {
        const [backgroundColor, labelColor] = getColorForTile(skill.title);
        const onTilePress = () => {
          logSkillTileClicked({
            screen_name: "Skills Home",
            screen_path: "/skills-home",
            destination_path: skill.url,
            skill_title: skill.title,
          });
          if (navigationFn) {
            navigationFn(skill.url);
          } else {
            Linking.openURL(skill.url);
          }
        };
        return (
          <SkillTileWrapper screenWidth={screenWidth} key={skill.id}>
            <LinkTile
              title={skill.title}
              backgroundColor={backgroundColor}
              labelColor={labelColor}
              onTilePress={onTilePress}
            />
          </SkillTileWrapper>
        );
      })
    : [];

  return (
    <Container>
      <SubHeadingText>
        Build your VirtaLife skills to maintain or level up your progress.
      </SubHeadingText>
      <ContentWrapper screenWidth={screenWidth}>{tiles}</ContentWrapper>
    </Container>
  );
};

export const SkillsHome = withVirta<SkillsHomeProps>(InnerSkillsHome);
