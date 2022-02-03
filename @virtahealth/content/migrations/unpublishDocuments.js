/*
This script is used to delete published documents and recreate them as drafts.
Note, this will fail if the document is being referenced elsewhere (i.e. in a collection or a translation)

Run this script from the root content directory (~/code/atlas/@virtahealth/content):
Log in to sanity to automatically authenticate the client.
    $ sanity login
Run the script against the development dataset:
    $ sanity exec migrations/unpublishDocuments.js --with-user-token

To run this script against another dataset, you must set the env var SANITY_STUDIO_API_DATASET:
    $ SANITY_STUDIO_API_DATASET=patient-content sanity exec migrations/unpublishDocuments.js --with-user-token
To verify the dataset being used by the client, you can log the client instance (console.log(client))
*/

import client from "part:@sanity/base/client";

const contentIdsToMigrate = [];
const ARTICLE_TYPE = "article";
const RECIPE_TYPE = "recipe";
const docTypes = [ARTICLE_TYPE, RECIPE_TYPE];

const fetchPublishedDocuments = () =>
  client.fetch(
    `*[
            (_type in $docTypes) &&
            (_id in $contentIdsToMigrate) &&
            !(_id in path('drafts.**'))
        ][
            count(*[_type == 'resourceCollection' && references(^._id)]) == 0
        ]`,
    { contentIdsToMigrate, docTypes }
  );

const buildMutationForDoc = (doc) => {
  const unpublishedDoc = {
    ...doc,
    ...{ _id: `drafts.${doc._id}` },
  };
  delete unpublishedDoc._rev;

  return [{ delete: doc._id }, { create: unpublishedDoc }];
};

const createTransaction = (mutations) =>
  mutations.reduce((transaction, mutation) => {
    if (mutation.patch) {
      return transaction.patch(mutation.id, mutation.patch);
    }
    if (mutation.delete) {
      return transaction.delete(mutation.delete);
    }
    if (mutation.create) {
      return transaction.createIfNotExists(mutation.create);
    }
  }, client.transaction());

let allDocuments = [];
let migratedDocuments = [];
let notMigratedDocuments = [];

const migrateDocuments = async () => {
  console.log("starting migration");
  console.log("fetching documents...");
  const documents = await fetchPublishedDocuments();
  console.log(`fetched ${documents.length} documents`);
  allDocuments = documents.map((doc) => doc._id);
  notMigratedDocuments = [...allDocuments];
  for (const doc of documents) {
    try {
      const mutations = buildMutationForDoc(doc);
      console.log("-----------------------------");
      console.log(`Building mutations for for doc ${doc._id}`);
      console.log(mutations);
      console.log("-----------------------------");
      const transaction = createTransaction(mutations);
      const transactionResponse = await transaction.commit();
      const results = transactionResponse.results;
      console.log(`Transaction completed: ${results}`);
      migratedDocuments.push(doc._id);
      notMigratedDocuments.pop(doc._id);
    } catch (e) {
      console.log(`error encountered while migration document ${doc._id}`);
      console.log(e);
      console.log(e.message);
    }
  }
};

function main() {
  migrateDocuments()
    .then(() => {
      console.log("Migration finished");
      console.log(`Migrated ${migratedDocuments.length} documents`);
      console.log(`Did not migrated ${notMigratedDocuments.length} documents`);
      console.log("Migrated docs: ", migratedDocuments);
      console.log("Not migrated docs: ", notMigratedDocuments);
    })
    .catch((err) => {
      console.log("Unexpected Error");
      console.error(JSON.stringify(err, null, 2));
      process.exit(1);
    });
}

main();
