import * as React from "react";
import { Article } from "@virtahealth/components";
import { View } from "react-native";

export default {
  title: "Components / Article",
  component: Article,
};

export const Example = () => {
  return (
    <View style={{ alignItems: "center", display: "flex" }}>
      <Article
        handleOpenVideo={() => null}
        isMobile={false}
        data={{
          __i18n_lang: "en-US",
          _createdAt: "2021-02-24T19:15:35Z",
          _id: "3f116dc9-9d88-4d8a-aadc-a55727fb2e93",
          _rev: "470SfgGPjrsNjiL5ekgCAI",
          _type: "article",
          _updatedAt: "2021-02-25T17:14:10Z",
          body: [
            {
              _key: "950d0d0c14ed",
              _type: "calloutBlock",
              color: "purple",
              contents: [
                {
                  _key: "a8dfd782f7e6",
                  _type: "block",
                  children: [
                    {
                      _key: "aad6b438acfb",
                      _type: "span",
                      marks: [],
                      text: "I'm calling this ",
                    },
                    {
                      _key: "6057299d171e",
                      _type: "span",
                      marks: ["strong"],
                      text: "stuff",
                    },
                    {
                      _key: "4de87565b656",
                      _type: "span",
                      marks: [],
                      text: " out and it better ",
                    },
                    {
                      _key: "519641963157",
                      _type: "span",
                      marks: ["em"],
                      text: "show up",
                    },
                  ],
                  markDefs: [],
                  style: "purple",
                },
              ],
              title: "Called out stuff",
            },
            {
              _key: "ad6dff57a444",
              _type: "block",
              children: [
                {
                  _key: "df5c8af467bc",
                  _type: "span",
                  marks: [],
                  text: "Rich Text",
                },
              ],
              markDefs: [],
              style: "h4",
            },
            {
              _key: "8a81db63a4b7",
              _type: "block",
              children: [
                {
                  _key: "9c3c519e7869",
                  _type: "span",
                  marks: [],
                  text: "This is an example of ",
                },
                {
                  _key: "0a2be8e20cfa",
                  _type: "span",
                  marks: ["strong"],
                  text: "rich text",
                },
                {
                  _key: "195892518c59",
                  _type: "span",
                  marks: [],
                  text: " in an ",
                },
                {
                  _key: "570c95321af9",
                  _type: "span",
                  marks: ["underline"],
                  text: "article body",
                },
              ],
              markDefs: [],
              style: "normal",
            },
            {
              _key: "91df0c6efcec",
              _type: "block",
              children: [
                {
                  _key: "35305bc47bde",
                  _type: "span",
                  marks: [],
                  text: "This is a whole lot of text so we're gonna hit you with some lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                },
                {
                  _key: "0a2be8e20cfa",
                  _type: "span",
                  marks: ["strong"],
                  text: "rich text",
                },
                {
                  _key: "35305c47bde",
                  _type: "span",
                  marks: [],
                  text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                },
                {
                  _key: "db54392c6c3c",
                  _type: "span",
                  marks: [],
                  text: "This is ",
                },
                {
                  _key: "d3569dcdb595",
                  _type: "span",
                  marks: ["strong"],
                  text: "bolded",
                },
                {
                  _key: "c204f319d471",
                  _type: "span",
                  marks: [],
                  text: ", and ",
                },
                {
                  _key: "519641963157",
                  _type: "span",
                  marks: ["em"],
                  text: "article body",
                },
                {
                  _key: "4fb8598169c6",
                  _type: "span",
                  marks: [],
                  text: " is ",
                },
                {
                  _key: "0601b9c50086",
                  _type: "span",
                  marks: ["underline"],
                  text: "underlined.",
                },
              ],
              markDefs: [],
              style: "normal",
            },
            {
              _key: "ad6dff57a444",
              _type: "block",
              children: [
                {
                  _key: "df5c8af467bc",
                  _type: "span",
                  marks: [],
                  text: "Pupper",
                },
              ],
              markDefs: [],
              style: "h2",
            },
            {
              _type: "figure",
              caption: "a cute pupper",
              imageSourceUrl:
                "https://cdn.sanity.io/images/iyfmtfwm/patient-content-dev/e898a30d679c3e9fbdbfac592e138b9ec57be346-2121x1414.png",
            },
            {
              _key: "ece2aafc6b39",
              _type: "block",
              children: [
                {
                  _key: "d4f2d024ef7a",
                  _type: "span",
                  marks: [],
                  text: "",
                },
              ],
              markDefs: [],
              style: "normal",
            },
            {
              _key: "6a0303c7969a",
              _type: "block",
              children: [
                {
                  _key: "35305bc47bde",
                  _type: "span",
                  marks: [],
                  text: "This is a whole lot of text so we're gonna hit you with some lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                },
              ],
              markDefs: [],
              style: "normal",
            },
            {
              _key: "1c53e0e68d1e",
              _type: "calloutBlock",
              color: "blue",
              contents: [
                {
                  _key: "ce02a0f8bd40",
                  _type: "block",
                  children: [
                    {
                      _key: "bd0ac93afe1f",
                      _type: "span",
                      marks: [],
                      text: "This one is blue",
                    },
                  ],
                  markDefs: [],
                  style: "blue",
                },
              ],
              title: "Second Callout",
            },
          ],
          careProtocols: [
            {
              _key: "14297c99fbee",
              _ref: "ce055aa9-0281-45f0-985a-5fe6323cac19",
              _type: "reference",
            },
          ],
          heroImage: {
            altText: "test alrternative text",
            caption: "Recognizing Hypoglycemia caption",
            imageUrl:
              "https://cdn.sanity.io/images/iyfmtfwm/patient-content-dev/e898a30d679c3e9fbdbfac592e138b9ec57be346-2121x1414.png",
          },
          previewText: "This is an article containing rich text",
          slug: {
            // @ts-ignore - ignoring because this is mock data
            _type: "slug",
            current: "article-with-rich-text",
          },
          tags: [
            {
              tagName: "Puppies",
              // @ts-ignore - ignoring because this is mock data
              _key: "68361f080a1e",
              _ref: "769c094f-404f-4944-8167-86345c551d4a",
              _type: "reference",
            },
            // @ts-ignore - ignoring because this is mock data
            {
              tagName: "Cute",
            },
            // @ts-ignore - ignoring because this is mock data
            {
              tagName: "Chewing",
            },
          ],
          title: "Article With Rich Text",
        }}
      />
    </View>
  );
};
