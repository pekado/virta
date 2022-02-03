# Sanity Content Studio

[Sanity](https://www.sanity.io/) is our CMS provider. This folder is primarily used to define the structure
that our content will take via [schemas](https://www.sanity.io/docs/content-modelling). Once the structure is
defined, actual content pieces are created inside of [Sanity Studio](https://www.sanity.io/docs/sanity-studio).

## Running Sanity Studio Locally:

First, ensure you are on at least node v14 or higher. If you aren't, install or use a more recent version with nvm

```
node --version
nvm install 14
nvm use 14
```

Install the CLI

```
npm install -g @sanity/cli
```

Inside of the `/atlas` folder, update all dependencies with

```
yarn install
```

Finally, from the same place, run

```
yarn start:content
```

Navigate to `http://localhost:3333`

## Viewing Production Schemas & Content

Our production Sanity Studio instance is deployed at https://virtahealth.sanity.studio/

Data can be queried directly with a request similar to the following:

```
curl
--location -g
--request GET 'https://iyfmtfwm.apicdn.sanity.io/v1/data/query/dev?query={YOUR GROQ QUERY HERE}' \
--header 'Authorization: Bearer {YOUR TOKEN HERE}' \
--header 'Content-Type: application/json'
```

More information on the [GROQ query language](https://www.sanity.io/docs/overview-groq)

If you need access to either Sanity Studio or an Auth token, contact the Core-Treatment team

## Troubleshooting

> **Help, the Sanity desk tool crashed. What do I do?**
> If the desk tool crashed, it's most likely related to a project level `bolt install` messing up some modules in Sanity Studio. A quick way to resolve this is to re-run `npm install` inside `@virtahealth/content`.
