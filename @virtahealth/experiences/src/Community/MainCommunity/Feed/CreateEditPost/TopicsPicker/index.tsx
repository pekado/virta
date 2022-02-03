import * as React from "react";
import { StyleSheet } from "react-native";
import { useField } from "formik";
import { sortBy } from "lodash";
import { ComboBox, ComboBoxOption } from "@virtahealth/components";
import { CommunityTopic, CommunityTopicByCategoryId } from "../../../../types";

interface Props {
  name: string;
  topics: CommunityTopicByCategoryId;
}

const styles = StyleSheet.create({
  topicsPicker: {
    flex: 1,
    flexBasis: "0%",
    display: "flex",
  },
});

const sortTopics = (topics: CommunityTopicByCategoryId) => {
  const [a, b, ...rest] = sortBy(topics, "position");
  if (b.is_small_group) {
    return [b, a, ...rest];
  }
  return [a, b, ...rest];
};

export const TopicsPicker: React.FC<Props> = ({ name, topics }) => {
  const [comboBoxValue, setComboBoxValue] = React.useState("");
  const sortedTopics = sortTopics(topics);
  const [, , { setValue }] = useField(name);

  const onTopicChange = (selectedTopic?: string) => {
    const selected = Object.values(topics).find(
      (t: CommunityTopic) => String(t.id) === String(selectedTopic)
    ) as CommunityTopic;
    if (selected) {
      setComboBoxValue(selected.name);
      setValue(selected.id);
    }
  };

  return (
    <ComboBox
      value={comboBoxValue}
      style={styles.topicsPicker}
      onSelectOption={onTopicChange}
      placeholderMessage={{
        id: "topicsPickerDefault",
        defaultMessage: "Select a topic...",
      }}
    >
      {sortedTopics.map((topic) => (
        <ComboBoxOption key={topic.categoryId} value={topic.categoryId}>
          {topic.name}
        </ComboBoxOption>
      ))}
    </ComboBox>
  );
};
