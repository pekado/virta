export interface ListItem {
  id: number;
  labelMessage: string;
}

export interface SelectedListItems {
  [itemId: number]: ListItem;
}
