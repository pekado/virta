import * as React from "react";
import {
  withVirta,
  VirtaClient,
  Article,
  ContentTypes,
  Spinner,
  Body,
  Recipe,
  Spacer,
} from "@virtahealth/components";
import { formatResponse, messages } from "@virtahealth/utils";

interface Props {
  contentId?: string;
  contentSlug?: string;
  wordpressId?: string;
  wordpressSlug?: string;
  isMobile: boolean;
  handleOpenVideo: (url: string) => void;
  handleLinkPress?: (url: string) => void;
}

interface InnerProps extends Props {
  client?: VirtaClient;
}

type Content = ContentTypes.RecipeType | ContentTypes.ArticleType;

const ContentPageExperience: React.FC<InnerProps> = ({
  client,
  contentId,
  isMobile,
  contentSlug,
  handleOpenVideo,
  wordpressId,
  wordpressSlug,
  handleLinkPress,
}) => {
  const [isFetching, setIsFetching] = React.useState(false);
  const [content, setContent] = React.useState<Content>();
  const [showErrorMessage, setShowErrorMessage] = React.useState(false);

  React.useEffect(() => {
    const abortController = new AbortController();
    const fetchExplorePage = async () => {
      // contentId or sanitySlug
      let contentPageUrl = "/api/v1/content";

      if (contentId) {
        contentPageUrl = contentPageUrl.concat(`?contentId=${contentId}`);
      } else if (contentSlug) {
        contentPageUrl = contentPageUrl.concat(`?sanitySlug=${contentSlug}`);
      } else if (wordpressId) {
        contentPageUrl = contentPageUrl.concat(`?wordpressId=${wordpressId}`);
      } else if (wordpressSlug) {
        contentPageUrl = contentPageUrl.concat(
          `?wordpressSlug=${wordpressSlug}`
        );
      }

      try {
        setIsFetching(true);
        const fetchedContent = formatResponse(
          (await client!.get(contentPageUrl.toString())) as object
        ) as ContentTypes.ArticleType;
        setContent(fetchedContent);
        setIsFetching(false);
      } catch (e) {
        setIsFetching(false);
        setShowErrorMessage(true);
      }
    };

    if (content !== null) {
      fetchExplorePage();
    }

    return () => {
      abortController.abort();
    };
  }, [contentId, contentSlug, wordpressId, wordpressSlug]);

  const renderContent = (content?: Content) => {
    if (!content) {
      return null;
    }
    switch (content._type) {
      case "recipe":
        return (
          <Recipe
            data={content as ContentTypes.RecipeType}
            isMobile={isMobile}
          />
        );
      case "article":
        return (
          <Article
            data={content as ContentTypes.ArticleType}
            isMobile={isMobile}
            handleOpenVideo={handleOpenVideo}
            handleLinkPress={handleLinkPress}
          />
        );
      default:
        return null;
    }
  };
  return (
    <>
      <Spacer height={30} />
      {isFetching ? <Spinner /> : null}
      {renderContent(content)}
      {showErrorMessage ? (
        <Body message={messages.contentFetchErrorMessage} />
      ) : null}
    </>
  );
};

export const ContentPage = withVirta<Props>(ContentPageExperience);
