export interface CommonAnalyticsProperties {
  screen_name: string;
  screen_path: string;
  destination_path?: string;
}

interface SkillTileProperties {
  skill_title: string;
}

interface BehavioralHealthScreenerCommonProperties
  extends CommonAnalyticsProperties {
  patient_action_id: string;
}
interface BehavioralHealthQuestionProperties
  extends BehavioralHealthScreenerCommonProperties {
  screener_question_display: string;
  screener_answer_display: string;
}
interface BehavioralHealthFollowUpEventProperties
  extends BehavioralHealthScreenerCommonProperties {
  skill_name: string;
}
interface ContentPageProperties extends CommonAnalyticsProperties {
  origin?: string;
  /**
   * `rank` represents the position within the page or carousel
   * of the content piece
   *
   * value should start at 1 (first piece of content is a "1")
   */
  rank: number;
}
export interface DiscoverSearchProperties {
  searchTerm: string;
  numberOfHits?: number;
}
type DiscoverSearchPageProperties = ContentPageProperties &
  DiscoverSearchProperties;

interface ActionCardAnalyticsProperties extends CommonAnalyticsProperties {
  content_id?: string;
  action_id?: string;
  action_title?: string;
}

type SkillsHomeEventProperties = CommonAnalyticsProperties &
  SkillTileProperties;
type BehavioralHealthEventProperties =
  | BehavioralHealthScreenerCommonProperties
  | BehavioralHealthQuestionProperties;
export type ClickEventProperties =
  | CommonAnalyticsProperties
  | SkillsHomeEventProperties
  | BehavioralHealthEventProperties
  | BehavioralHealthFollowUpEventProperties
  | ContentPageProperties
  | ActionCardAnalyticsProperties
  | DiscoverSearchProperties
  | DiscoverSearchPageProperties;
export type ViewEventProperties =
  | CommonAnalyticsProperties
  | BehavioralHealthScreenerCommonProperties
  | BehavioralHealthFollowUpEventProperties
  | ActionCardAnalyticsProperties
  | DiscoverSearchProperties
  | DiscoverSearchPageProperties;

export interface VirtaAnalyticsClient {
  logClickEvent: (event: string, properties: ClickEventProperties) => void;
  logViewEvent: (event: string, properties: ViewEventProperties) => void;
  logCustomEvent?: (event: string, properties: Record<string, unknown>) => void;
}
