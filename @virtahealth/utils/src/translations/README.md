When adding translations, follow these steps:

1.  Determine a proper location for each translation in the `messages` directory. If one does not exist,
    create a new file and/or folder and copy the basic structure from another file.

2.  Come up with an id. This id should be as simple as possible, though as descriptive as necessary.
    It should convey to future users how this string is used and whether they should reuse it or create a new one.
    For example "bloodGlucose" is good for "Blood Glucose", while "biomarkerFormEntryPromptBloodGlucose" is good for
    "Please enter your blood glucose".

3.  Come up with a description. The description should provide context about how the message will be used, if not already
    clear from the message itself, or details that may help with translation.

4.  Place a request with our translation provider (currently Smartling) to get translations created for other languages
    (in the [Atlas Messages project](https://dashboard.smartling.com/app/projects/79dd192f9/account-jobs/79dd192f9:ezahkqpd9jbf/files?filter=ALL)).
    If you do not have Smartling access, ask your EM to place the request, or post for help in Slack.

5.  Add an entry to the `en`, `es`, and `messages` objects in the relevant file(s). For `messages`,
    `id` should match the keys in all three objects, and `defaultMessage` should reference the `en` object.
