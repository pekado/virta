export const MockGetCoverages = [
  {
    grouping: {
      group: {
        value: "Group id test",
      },
      plan: {
        value: "Blue Shield of California",
      },
      subPlan: {},
    },
    id: {
      value: "30eb177d-13d4-4e45-84f6-3b9730dafc8e",
    },
    meta: {
      lastUpdated: {
        precision: "MICROSECOND",
        timezone: "+00:00",
        valueUs: "1626142559622395",
      },
      versionId: {
        value: "MTYyNjE0MjU1OTYyMjM5NTAwMA",
      },
    },
    order: {
      value: 1,
    },
    period: {
      start: {
        precision: "MICROSECOND",
        timezone: "+00:00",
        valueUs: "1626134400000000",
      },
    },
    policyHolder: {
      patientId: {
        value: "fa200e7a-59c0-4b61-a123-08f37c2425fc",
      },
    },
    subscriber: {
      patientId: {
        value: "fa200e7a-59c0-4b61-a123-08f37c2425fc",
      },
    },
    subscriberId: {
      value: "member id testing",
    },
  },
  {
    grouping: {
      group: {
        value: "kjkjkj",
      },
      plan: {
        value: "kjk",
      },
      subPlan: {},
    },
    id: {
      value: "fcad5806-4593-423c-91f8-72aabcf37368",
    },
    meta: {
      lastUpdated: {
        precision: "MICROSECOND",
        timezone: "+00:00",
        valueUs: "1626132361458681",
      },
      versionId: {
        value: "MTYyNjEzMjM2MTQ1ODY4MTAwMA",
      },
    },
    order: {
      value: 1,
    },
    period: {
      start: {
        precision: "MICROSECOND",
        timezone: "+00:00",
        valueUs: "1626048000000000",
      },
    },
    policyHolder: {
      patientId: {
        value: "fa200e7a-59c0-4b61-a123-08f37c2425fc",
      },
    },
    subscriber: {
      patientId: {
        value: "fa200e7a-59c0-4b61-a123-08f37c2425fc",
      },
    },
    subscriberId: {
      value: "kjkjkj",
    },
  },
  {
    grouping: {
      group: {
        value: "jhjhjhjhjh",
      },
      plan: {
        value: "Blue Shield of California",
      },
      subPlan: {},
    },
    id: {
      value: "52b0e96f-3118-4e4e-b2f9-15fd5cc2da24",
    },
    meta: {
      lastUpdated: {
        precision: "MICROSECOND",
        timezone: "+00:00",
        valueUs: "1626132163858985",
      },
      versionId: {
        value: "MTYyNjEzMjE2Mzg1ODk4NTAwMA",
      },
    },
    order: {
      value: 1,
    },
    period: {
      start: {
        precision: "MICROSECOND",
        timezone: "+00:00",
        valueUs: "1626048000000000",
      },
    },
    policyHolder: {
      patientId: {
        value: "fa200e7a-59c0-4b61-a123-08f37c2425fc",
      },
    },
    subscriber: {
      patientId: {
        value: "fa200e7a-59c0-4b61-a123-08f37c2425fc",
      },
    },
    subscriberId: {
      value: "kjkjhjh",
    },
  },
];

export const MockPatchCoverages = {
  id: {
    value: "dc00122c-7359-45bb-8ae6-9ec7a00aee13",
  },
  grouping: {
    group: {
      value: "Update 100 test plan patch",
    },
    plan: {
      value: "Update Cigna",
    },
  },
  order: {
    value: 1,
  },
  period: {
    start: "1615240175000000",
  },
  meta: {
    versionId: {
      value: "MTYxNTI0MDgwODA5MzA1OTAwMA",
    },
    lastUpdated: {
      valueUs: 1615334517855062,
    },
  },
  subscriberId: {
    value: "Update 14321-12121",
  },
};

export const MockPostCoverage = {
  id: {
    value: "dc00122c-7359-45bb-8ae6-9ec7a00aee13",
  },
  grouping: {
    group: {
      value: "Post 100 test plan",
    },
    plan: {
      value: "Post Cigna",
    },
  },
  order: {
    value: 1,
  },
  period: {
    start: "1615240175000000",
  },
  meta: {
    versionId: {
      value: "MTYxNTI0MDgwODA5MzA1OTAwMA",
    },
    lastUpdated: {
      valueUs: 1615334517855062,
    },
  },
  subscriberId: {
    value: "Post 14321-12121",
  },
};
