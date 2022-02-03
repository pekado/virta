import * as React from "react";
import { Body, styled } from "@virtahealth/components";
import { FlatList } from "react-native";

interface Props {
  content: string;
  media?: string[];
}

const StyledBody = styled(Body)`
  font-size: ${({ theme }) => theme.textBodySpacedFontSize}px;
  color: ${({ theme }) => theme.textCommunityColorPrimary};
  font-weight: ${({ theme }) => theme.textCommunityThinFontWeight};
`;

const StyledImage = styled.Image`
  height: 200px;
  max-width: 300px;
  margin-top: ${({ theme }) => theme.standardSpacingSmallMedium}px;
`;

const Container = styled.View`
  padding-left: ${({ theme }) => theme.standardSpacingMedium}px;
  padding-right: ${({ theme }) => theme.standardSpacingMedium}px;
`;

const MediaImage: React.FC<{ mediaUrl: string }> = ({ mediaUrl }) => (
  <StyledImage source={{ uri: mediaUrl }} />
);

export const PostBody: React.FC<Props> = ({ content, media }) => (
  <Container>
    <StyledBody>{content}</StyledBody>

    <FlatList
      data={media}
      renderItem={({ item }) => <MediaImage mediaUrl={item} />}
    />
  </Container>
);
