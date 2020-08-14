# Nimbus Site

This repo holds the code for two sites:

* [nimbus.team](https://nimbus.team) - From `master`, built in [CI](https://ci.status.im/job/misc/job/nimbus.team/), served from `gh-pages`
* [dev.nimbus.team](https://dev.nimbus.team) - From `develop`, built in [CI](https://ci.status.im/job/misc/job/dev.nimbus.team/), serverd from dev host

There is an `edit` button on each page, which will take you directly to the document you need to edit on the `develop` branch.

The recommended flow is to create a PR against `develop`. We can then allow a large group of people to push directly to `develop` and show their changes on the staging site when asking for review, which should smooth out and speed up the process considerably for everyone. `master` is obviously protected, and will only have changes merged in from `develop` once accepted.

## Adding a New Page

If you want to add a page, rather than just edit, you'll need to make sure it appears on the sidebar and is accessible to everyone.

1. Add your page to `source/docs/<your_file_here>.md`
2. In `source/_data/sidebars.yml` add the appropriate text to the appropriate place.
3. In `themes/navy/languages/en.yml` edit the sidebars section to make sure that your new text in `sidebars.yml` is rendered correctly.

## Testing locally

Make sure you have [Node.js](https://nodejs.org/) installed first.

1. Open Terminal and navigate to the project root directory,
3. Run `yarn build`
4. Run `yarn devel`
5. Open http://localhost:8000 in a browser

This prevents the need for any global installs, and will allow you to have live reloading for any changes you are making.
