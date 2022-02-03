import { MessageDescriptor } from "react-intl";

export type SingleActionOrSeries = {
  // exactly one of these is required
  singleAction?: SingleAction;
  actionSeries?: {
    title: MessageDescriptor;
    actions: Array<SingleAction>;
  };
};

export type SingleAction = {
  title: MessageDescriptor;
  /**
   * Estimated time to complete this action in minutes
   */
  timeToComplete?: number;
  /**
   * Details for the action details page
   */
  whatDetails?: MessageDescriptor;
  whenDetails?: MessageDescriptor;
  /**
   * Determines certain text and icons in the action details
   */
  actionType: "article" | "video" | "task" | "tip" | "quiz";
  /**
   * Determines certain navigation and network behavior
   */
  type: "checkmark" | "questionnaire";
  /**
   * Where the action button will take the user (if there is one)
   */
  ctaLink?: string;
  /**
   * Readable label for the action button (if there is one)
   */
  ctaLabel?: MessageDescriptor;
  /**
   * When the action was created for the user. Used to determine whether the "New" label is shown
   */
  createdAt?: Date;
  updatedAt?: Date;
  /**
   * When the action was completed. If this is present, the action will not be shown
   */
  endDate?: Date;
  /**
   * Used for tracking the action in the FE
   */
  id: string;
  /**
   * Used for updating the action in the BE
   */
  backendId?: string;
  /**
   * Readable label to display at the footer of the action card
   */
  calloutText?: MessageDescriptor;
};

export type RefreshBooleans = {
  refreshHH: boolean;
  justMarkedId: string;
  nextBackendId?: string;
};
