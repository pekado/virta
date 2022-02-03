import * as accordion from "./accordion";
import * as articleCallout from "./article-callout";
import * as article from "./article";
import * as avatar from "./avatar";
import * as badge from "./badge";
import * as biotracker from "./biotracker";
import * as blocktext from "./blocktext";
import * as buttonRadioInput from "./button-radio-input";
import * as button from "./button";
import * as callout from "./callout";
import * as carouselCard from "./carousel-card";
import * as checkbox from "./checkbox";
import * as chiclet from "./chiclet";
import * as chicletCard from "./chiclet-card";
import * as containers from "./containers";
import * as divider from "./divider";
import * as dropdown from "./dropdown";
import * as dynamicForms from "./dynamicForms";
import * as featuredLink from "./featured-link";
import * as fhirQuestionnaire from "./fhir-questionnaire";
import * as filePicker from "./file-picker";
import * as formElement from "./form-element";
import * as foodDetail from "./food-detail";
import * as genericFilterBar from "./generic-filter-bar";
import * as growingTextbox from "./growing-textbox";
import * as image from "./image";
import * as input from "./input";
import * as linkTile from "./link-tile";
import * as listCard from "./list-card";
import * as list from "./list";
import * as menuButton from "./menu-button";
import * as tooltip from "./tooltip";
import * as multiSelect from "./multi-select";
import * as navbar from "./navbar";
import * as optionsPane from "./options-pane";
import * as popover from "./popover";
import * as priorityIndicator from "./priority-indicator";
import * as progressCircle from "./progress-circle";
import * as progressiveImage from "./progressive-image";
import * as radioChooser from "./radio-chooser";
import * as radioInput from "./radio-input";
import * as recipe from "./recipe";
import * as richText from "./rich-text";
import * as searchInput from "./search-input";
import * as sectionTable from "./section-table";
import * as spacing from "./spacing";
import * as subTab from "./sub-tab";
import * as substrateText from "./substrate-text";
import * as tableCell from "./table-cell";
import * as tableRow from "./table-row";
import * as table from "./table";
import * as text from "./text";
import * as toast from "./toast";
import * as toggleList from "./toggle-list";

/**
 * base theme
 * @module base
 */

export const base = <const>{
  ...accordion,
  ...articleCallout,
  ...article,
  ...avatar,
  ...badge,
  ...biotracker,
  ...blocktext,
  ...buttonRadioInput,
  ...button,
  ...callout,
  ...carouselCard,
  ...checkbox,
  ...chiclet,
  ...chicletCard,
  ...containers,
  ...divider,
  ...dropdown,
  ...dynamicForms,
  ...featuredLink,
  ...fhirQuestionnaire,
  ...filePicker,
  ...formElement,
  ...foodDetail,
  ...genericFilterBar,
  ...growingTextbox,
  ...image,
  ...input,
  ...linkTile,
  ...listCard,
  ...list,
  ...menuButton,
  ...tooltip,
  ...multiSelect,
  ...navbar,
  ...optionsPane,
  ...popover,
  ...priorityIndicator,
  ...progressCircle,
  ...progressiveImage,
  ...radioChooser,
  ...radioInput,
  ...recipe,
  ...richText,
  ...searchInput,
  ...sectionTable,
  ...spacing,
  ...subTab,
  ...substrateText,
  ...tableCell,
  ...tableRow,
  ...table,
  ...text,
  ...toast,
  ...toggleList,
};

export type BaseTheme = typeof base;
