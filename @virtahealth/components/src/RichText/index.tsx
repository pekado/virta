// TODO: Fix all the rule violations, yo
/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
/* eslint-disable react/jsx-key */
import * as React from "react";
import {
  View,
  Dimensions,
  ScrollView,
  Linking,
  Platform,
  TextProps,
} from "react-native";
import BlockContent, {
  BlockContentProps,
} from "@sanity/block-content-to-react";
import {
  getPlatformFontFamilySuffix,
  addSearchParam,
} from "@virtahealth/utils";
import * as _ from "lodash";
import { BaseTheme } from "@virtahealth/styles";
import {
  Body,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  BodyLight,
  BodySmall,
  BodyEmphasized,
} from "../Text";
import { Spacer } from "../Spacer";
import styled, { css } from "../styled-components";
import { List } from "../List";
import {
  ArticleCallout,
  textColors,
  ArticleCalloutColors,
} from "../ArticleCallout";
import { ProgressiveImage } from "../ProgressiveImage";
import { Table, TableRow, TableCell } from "../Table";
import { SanityListItem } from "./serializers/ListItem";
import { VideoSerializer } from "./serializers/Video";

const isWeb = Platform.OS === "web";

const BaseText = styled.Text`
  font-family: "${({ theme }) =>
    theme[
      `textBodyFontFamily${getPlatformFontFamilySuffix()}` as keyof BaseTheme
    ]}";
`;

const BaseBody = styled(Body)`
  font-size: ${({ theme }) => theme.standardStyledBodyFontSize}px;
  font-weight: ${({ theme }) => theme.standardStyledBodyFontWeight};
  line-height: ${({ theme }) => theme.standardStyledBodyLineHeight}px;
`;

const UnderLineBase = styled(BaseBody)`
  text-decoration: underline;
`;

const BlockWrapper = styled(View)<{ isMobile: boolean }>``;

const CalloutUnderLineBase = styled(UnderLineBase)<{
  color: ArticleCalloutColors;
}>`
  font-size: ${({ theme }) => theme.calloutUnderlineBaseFontSize}px;
  color: ${({ color, theme }) => textColors(theme, color)};
`;

const StrikeThroughBase = styled(BaseBody)`
  text-decoration: line-through;
`;

const CalloutStrikeThroughBase = styled(StrikeThroughBase)<{
  color: ArticleCalloutColors;
}>`
  font-size: ${({ theme }) => theme.calloutStrikethroughBaseFontSize}px;
  color: ${({ color, theme }) => textColors(theme, color)};
`;

const StrongBase = styled.Text`
  font-weight: ${({ theme }) => theme.strongBaseFontWeight};
`;

const CalloutStrongBase = styled(StrongBase)<{ color: ArticleCalloutColors }>`
  font-size: ${({ theme }) => theme.calloutStrongBaseFontSize}px;
  color: ${({ color, theme }) => textColors(theme, color)};
`;

const EmphasizedBase = styled(BodyEmphasized)`
  font-size: ${({ theme }) => theme.standardStyledBodyFontSize}px;
  line-height: ${({ theme }) => theme.standardStyledBodyLineHeight}px;
`;

const CalloutEmBase = styled(EmphasizedBase)<{ color: ArticleCalloutColors }>`
  font-size: ${({ theme }) => theme.calloutEmBaseFontSize}px;
  color: ${({ color, theme }) => textColors(theme, color)};
`;

const StyledBody = styled(BaseBody)<{ color: string }>``;

export const CalloutStyledBody = styled(StyledBody)<{
  color: ArticleCalloutColors;
}>`
  font-size: ${({ theme }) => theme.calloutStyledBodyFontSize}px;
  color: ${({ color, theme }) => textColors(theme, color)};
  line-height: ${({ theme }) => theme.calloutStyledBodyLineHeight}px;
`;

const TableHeadingText = styled(BodySmall)`
  font-weight: ${({ theme }) => theme.strongBaseFontWeight};
`;

const BlockquoteBody = styled(BaseBody)`
  font-weight: ${({ theme }) => theme.standardStyledBodyFontWeight};
`;

const LinkText = styled(StrongBase)`
  text-decoration: underline;
  text-decoration-color: ${({ theme }) => theme.buttonSecondaryBackgroundColor};
  color: ${({ theme }) => theme.buttonSecondaryBackgroundColor};
  ${() => {
    if (Platform.OS === "web") {
      return css`
        cursor: pointer;
      `;
    }
  }}
`;

const CalloutStyledBodyComponent: React.FC<{ color: ArticleCalloutColors }> = ({
  children,
  color,
}) => {
  return (
    <CalloutStyledBody color={color}>
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(child, { color })
          : child
      )}
    </CalloutStyledBody>
  );
};

const StyledBodyLight = styled(BodyLight)`
  font-size: ${({ theme }) => theme.standardStyledBodyLightFontSize}px;
  font-weight: ${({ theme }) => theme.standardStyledBodyLightFontWeight};
  line-height: ${({ theme }) => theme.standardStyledBodyLightLineHeight}px;
  width: 100%;
  text-align: center;
`;

const StyledImageContainer = styled(View)<{ alignLeft: boolean }>`
  align-items: ${({ alignLeft }) => (alignLeft ? "flex-start" : "center")};
`;

const StyledImage = styled(ProgressiveImage)<{ isMobile: boolean }>`
  ${({ isMobile }) => (isMobile ? "" : "max-width: 39rem;")}
`;

const StyledInnerBlock = styled(View)`
  display: flex;
  flex-direction: row;
  border-left-width: 4px;
  border-color: ${({ theme }) => theme.quoteBorderColor};
  border-style: solid;
  align-items: center;
  padding-left: 12px;
`;

const BlockQuoteComponent: React.FC = ({ children }) => (
  <View>
    <Spacer height={16} />
    <StyledInnerBlock>
      <Spacer width={8} />
      <BlockquoteBody>{children}</BlockquoteBody>
    </StyledInnerBlock>
    <Spacer height={16} />
  </View>
);

const { width: windowWidth } = Dimensions.get("window");

/**
 * Component uses BlockContent from @sanity to parse and assign serializers to different Block sub-types, code
 * based on https://github.com/sanity-io/block-content-to-hyperscript/blob/master/src/serializers.js. Adjusted
 * for Atlas components
 */

// Low-level span serializer
// @ts-ignore - TODO: add types
const SpanSerializer = (props) => {
  const { mark, children } = props.node;
  const isPlain = typeof mark === "string";
  const markType = isPlain ? mark : mark._type;
  const serializer = props.serializers.marks[markType];
  if (!serializer) {
    // @todo Revert back to throwing errors?
    // eslint-disable-next-line no-console
    console.warn(
      `Unknown mark type "${markType}", please specify a serializer for it in the \`serializers.marks\` prop`
    );
    return React.createElement(props.serializers.markFallback, null, children);
  }
  return React.createElement(
    serializer,
    { ...props.node, color: props.color },
    children
  );
};

// Low-level list serializer
const ListSerializer =
  (isCalloutType: boolean): React.Component =>
  // @ts-ignore - TODO: add types
  (props) =>
    (
      <View>
        <List direction="column">{props.children}</List>
        {props.level === 1 && !isCalloutType ? <Spacer height={8} /> : null}
      </View>
    );

const CalloutListSerializer = ListSerializer(true);
const NormalListSerializer = ListSerializer(false);

// Low-level list item serializer
const ListItemSerializer =
  (isCalloutType: boolean): React.Component =>
  // @ts-ignore - TODO: add types
  (props) => {
    const children =
      !props.node.style || props.node.style === "normal"
        ? // Don't wrap plain text in paragraphs inside of a list item
          props.children
        : // But wrap any other style in whatever the block serializer says to use
          React.createElement(
            props.serializers.types.block,
            props,
            props.children
          );
    const listStyle = props.node.listItem;
    const listItemProps = {
      level: props.node.level,
      index: props.index,
      isInCalloutBlock: isCalloutType,
      itemNumber: listStyle === "bullet" ? undefined : props.index + 1,
      color: props.node.style,
    };
    if (listStyle === "bullet" || listStyle === "number") {
      return <SanityListItem {...listItemProps}>{children}</SanityListItem>;
    }
    return null;
  };

const CalloutListItemSerializer = ListItemSerializer(true);
const NormalListItemSerializer = ListItemSerializer(false);

// Renderer of an actual block of type `block`
// @ts-ignore - TODO: add types
const BlockTypeSerializer = (isCalloutType: boolean) => (props) => {
  const SpacingWrapper: React.FC<{ component: React.FC }> = ({
    component,
    children,
  }) => (
    <View>
      <Spacer height={16} />
      {React.createElement(component, null, children)}
      <Spacer height={16} />
    </View>
  );
  const style = props.node.style || "normal";
  if (/^h\d/.test(style)) {
    if (/^h1/.test(style)) {
      return (
        <SpacingWrapper component={Heading1}>{props.children}</SpacingWrapper>
      );
    }
    if (/^h2/.test(style)) {
      return (
        <SpacingWrapper component={Heading2}>{props.children}</SpacingWrapper>
      );
    }
    if (/^h3/.test(style)) {
      return (
        <SpacingWrapper component={Heading3}>{props.children}</SpacingWrapper>
      );
    }
    if (/^h4/.test(style)) {
      return (
        <SpacingWrapper component={Heading4}>{props.children}</SpacingWrapper>
      );
    }
  }

  if (style === "blockquote") {
    return <BlockQuoteComponent>{props.children}</BlockQuoteComponent>;
  }

  if (isCalloutType) {
    return (
      <View>
        <CalloutStyledBodyComponent
          {...props}
          color={props.node.style || "blue"}
        >
          {props.children}
        </CalloutStyledBodyComponent>
        <Spacer height={8} />
      </View>
    );
  }

  return (
    <View>
      <StyledBody {...props}>{props.children}</StyledBody>
      <Spacer height={16} />
    </View>
  );
};
const CalloutBlockTypeSerializer = BlockTypeSerializer(true);

const NormalBlockTypeSerializer = BlockTypeSerializer(false);

// Serializers for things that can be directly attributed to a tag without any props
// We use partial application to do this, passing the tag name as the first argument
const RawMarkSerializer = (
  tag: string,
  props: React.PropsWithChildren<unknown>
) => {
  return React.createElement(tag, null, props.children);
};

// @ts-ignore - TODO: add types
const CalloutBlockSerializer = (props) => {
  return (
    <View>
      <Spacer height={16} />
      <ArticleCallout
        color={props.node.color}
        blocks={props.node.contents}
        serializers={calloutSerializers}
        title={props.node.title}
      />
      <Spacer height={16} />
    </View>
  );
};

const UnderlineSerializer: React.FC<TextProps> = (props) => {
  return React.createElement(UnderLineBase, props, props.children);
};

const StrongSerializer: React.FC<TextProps> = (props) => {
  return React.createElement(StrongBase, props, props.children);
};

const StrikeThroughSerializer: React.FC<TextProps> = (props) => {
  return React.createElement(StrikeThroughBase, props, props.children);
};

const LinkSerializer =
  (
    handleLinkPress: (url: string) => any
  ): React.FC<{ mark: { href: string } }> =>
  (props) => {
    return (
      <LinkText onPress={() => handleLinkPress(props.mark.href)}>
        {props.children}
      </LinkText>
    );
  };

// @ts-ignore - TODO: add types
const ImageSerializer = (props) => {
  if (!props.node.asset && !props.node.imageSourceUrl) {
    // pulls the image out of the image property
    if (props.node.image.asset) {
      props = _.set(props, "node.asset", props.node.image.asset);
    } else {
      return null;
    }
  }

  const isMobile = props.options.imageOptions.align === "center";

  const { imageSourceUrl } = props.node;
  const thumbnailSourceUrl = addSearchParam(imageSourceUrl, "w", "50");
  return (
    <StyledImageContainer
      testID={"styled-image-container"}
      alignLeft={!isMobile}
    >
      <StyledImage
        isMobile={isMobile}
        imageProps={{
          source: { uri: imageSourceUrl },
          resizeMode: "contain",
          width: windowWidth,
          themeHeightProp: "richTextImageHeight",
        }}
        thumbnailSource={{ uri: thumbnailSourceUrl }}
      />
      <Spacer height={4} />
      <StyledBodyLight>{props.node.caption}</StyledBodyLight>
      <Spacer height={8} />
    </StyledImageContainer>
  );
};

// @ts-ignore - TODO: add types
const TableFieldSerializer = (props) => {
  const { table, use_row_headers, use_column_headers } = props.node;
  if (!table) {
    return null;
  }
  return (
    <ScrollView>
      <ScrollView horizontal={true}>
        <Table>
          {/* @ts-ignore - TODO: add types */}
          {table.rows.map((row, rowIndex: number) => (
            <TableRow>
              {/* @ts-ignore - TODO: add types */}
              {row.cells.map((cell, colIndex: number) => {
                const isHeading =
                  (rowIndex === 0 && use_column_headers) ||
                  (colIndex === 0 && use_row_headers);
                const TextComponent = isHeading ? TableHeadingText : BodySmall;
                return (
                  <TableCell value={<TextComponent>{cell}</TextComponent>} />
                );
              })}
            </TableRow>
          ))}
        </Table>
      </ScrollView>
    </ScrollView>
  );
};

const TextSerializer: React.FC<TextProps> = (props) => {
  return <BaseText {...props}>{props.children}</BaseText>;
};

const CalloutStrongBaseSerializer: React.FC<{ color: ArticleCalloutColors }> = (
  props
) => (
  <CalloutStrongBase color={props.color}>{props.children}</CalloutStrongBase>
);

const CalloutUnderLineBaseSerializer: React.FC<{
  color: ArticleCalloutColors;
}> = (props) => (
  <CalloutUnderLineBase color={props.color}>
    {props.children}
  </CalloutUnderLineBase>
);

const CalloutEmBaseSerializer: React.FC<{ color: ArticleCalloutColors }> = (
  props
) => <CalloutEmBase color={props.color}>{props.children}</CalloutEmBase>;

const CalloutStrikeThroughBaseSerializer: React.FC<{
  color: ArticleCalloutColors;
}> = (props) => (
  <CalloutStrikeThroughBase color={props.color}>
    {props.children}
  </CalloutStrikeThroughBase>
);

const defaultMarkSerializers = {
  strong: StrongSerializer,
  em: RawMarkSerializer.bind(null, EmphasizedBase),
  code: RawMarkSerializer.bind(null, "code"),
  underline: UnderlineSerializer,
  "strike-through": StrikeThroughSerializer,
};

const calloutMarkSerializers = {
  strong: CalloutStrongBaseSerializer,
  em: CalloutEmBaseSerializer,
  code: RawMarkSerializer.bind(null, "code"),
  underline: CalloutUnderLineBaseSerializer,
  "strike-through": CalloutStrikeThroughBaseSerializer,
};

const serializers: BlockContentProps["serializers"] = {
  // Common overrides
  types: {
    block: NormalBlockTypeSerializer,
    image: ImageSerializer,
    figure: ImageSerializer,
    calloutBlock: CalloutBlockSerializer,
    tableField: TableFieldSerializer,
  },

  marks: defaultMarkSerializers,

  // Less common overrides
  list: NormalListSerializer,
  listItem: NormalListItemSerializer,

  span: SpanSerializer,

  // on mobile, use `false` to get a `\n`
  // on web, use default to get a `<br />`
  ...(!isWeb && {
    hardBreak: false,
  }),

  // Container element
  // @ts-ignore - TODO: type this properly
  container: View,

  // When we can't resolve the mark properly, use this renderer as the container
  markFallback: StyledBody,

  // don't change this unless you are ready for nested children to get styled in this way
  text: TextSerializer,

  // Empty nodes (React uses null, hyperscript with empty strings)
  empty: "",
};

// add the callout styled elements to the serializers object and use that for callouts
const calloutSerializers = Object.assign({}, serializers, {
  marks: calloutMarkSerializers,
  types: {
    ...serializers!.types,
    block: CalloutBlockTypeSerializer,
  },
  list: CalloutListSerializer,
  listItem: CalloutListItemSerializer,
});

export interface RichTextProps {
  blocks: Array<any>;
  isMobile?: boolean;
  handleOpenVideo: (url: string) => void;
  handleLinkPress?: (url: string) => any;
}

export const RichText: React.FC<RichTextProps> = ({
  blocks,
  isMobile = false,
  handleOpenVideo = () => undefined, // Do Nothing if not passed
  handleLinkPress = (url: string) => Linking.openURL(url),
}) => {
  serializers!.types!["video"] = VideoSerializer(handleOpenVideo);

  // TODO Refactor how serializers are built https://jira.virta.us/browse/TM-3841
  if (handleLinkPress) {
    serializers!.marks!["link"] = LinkSerializer(handleLinkPress);
  }

  return (
    <BlockWrapper isMobile={isMobile}>
      <BlockContent
        blocks={blocks}
        serializers={serializers}
        imageOptions={{
          w: 680,
          h: 300,
          fit: "max",
          align: isMobile ? "center" : "flex-start",
        }}
        projectId="iyfmtfwm"
        dataset="patient-content-dev"
      />
    </BlockWrapper>
  );
};
/* eslint-enable react/prop-types */
/* eslint-enable react/display-name */
/* eslint-enable react/jsx-key */
