const fetchedPatient = {
  first_name: "Courtbourt",
  last_name: "Tiger",
  date_of_birth: "02-05-1990",
  gender: "m",
};

const mockUpdatedPatient = {
  first_name: "New updated name - Court",
  last_name: "Tiger",
  date_of_birth: "02-05-1990",
  gender: "m",
};

export default class MockSparkClient {
  get(url) {
    if (url === `/identity/users/40d9bd52-edea-46c8-84a5-42e003f01502`) {
      return Promise.resolve(fetchedPatient);
    }
  }

  patch(url, body) {
    if (url === `/identity/users/40d9bd52-edea-46c8-84a5-42e003f01502`) {
      return Promise.resolve(mockUpdatedPatient);
    }
  }
}
