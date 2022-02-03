export default class MockAnalyticsClient {
  logClickEvent(eventName, eventProperties) {
    console.log(`Clicked ${eventName}: `, eventProperties);
  }
  logViewEvent(eventName, eventProperties) {
    console.log(`Viewed ${eventName}: `, eventProperties);
  }
}
