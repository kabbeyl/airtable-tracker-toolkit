# development-tracker-toolkit

Detour Detroit is building a development tracker toolkit, using Airtable, that anyone can use to create a development tracker for their city.

## Before you start

You should already have:
- A GitHub account,  [generated an SSH key](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent) and [added the key to your GitHub account](https://help.github.com/articles/adding-a-new-ssh-key-to-your-github-account).
- `git` should be installed on your computer

## Create your own copy of this site

- Fork this repository, using the "Fork" button at the top right of this page.
- Clone your version to your local computer:

```
git clone git@github.com:<your-user-name>/det-dev-tracker-toolkit.git
```

## Configure your local copy

- From a terminal, run `npm install` in the root directory.
- Populate the `.env.development.example` and rename it to `.env.development.local`. See [environment variables](#environment-variables) for more information about these values.
- From a terminal, `yarn dev` in the root directory: this will start the development server.
- If you see the toolkit running in your browser, congrats! You can now make changes to the site, or your Airtable, and you should see them live in the site.

## Customizing your site

### `toolkit.config.js`

This file sits at the root of your site, and should be used to customize the site. Here is a list of the values in that file, and what they should be:

- `siteTitle`: the title of your site.
- `organization`: the name of your organization.
- `city` and `state`: The city and state you're based in - this is purely for display purposes!
- `boundingBox`: The bounding box of your region. You can find this with [bboxfinder.com](https://bboxfinder.com/):
  - You want to zoom to your general region and then copy the **Map** value from bottom left. 
  - Make sure the four numbers are between square brackets (`[` and `]`), like this: 
  - `[-83.872890,42.216949,-83.581238,42.345985]` would be a good bounding box for [Ann Arbor, Michigan](http://bboxfinder.com/#42.231314,-83.806286,42.331773,-83.647842).
- `primary`, `secondary`, and `tertiary`: Three basic colors you can configure the site with.

## Deploying the site to Netlify

- Log in to Netlify with your GitHub account.
- Link your site's GitHub repository to your Netlify account.
- Populate your environment variables in Netlify

## Environment variables

- `AIRTABLE_API_KEY`: The API key for your Airtable account. You can find this on your Airtable [account page](https://airtable.com/account).
- `AIRTABLE_BASE_ID`: The ID of the Airtable base. Find this by clicking "Help" in the top right corner of the Airtable interface, then "API documentation" in the bottom right corner. The base ID will be in green text in the API introduction.
- `AIRTABLE_RECORD_FILTER`: The filter to apply to the Airtable base. This is the only value which is pre-populated, as it's designed to work with [the example Airtable base](). This needs to be an [Airtable formula](https://support.airtable.com/hc/en-us/articles/203255215-Formula-Field-Reference).
- `NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN`: The Mapbox access token for your project. You can find this on your Mapbox [account page](https://www.mapbox.com/account/).
- `NEXT_PUBLIC_SUPABASE_URL`: The URL of your Supabase instance.
- `NEXT_PUBLIC_SUPABASE_API_KEY`: The API key for your Supabase instance. You can find this on your Supabase [account page](https://supabase.com/account).
- `PRODUCTION_URL`: The URL of the production site.


