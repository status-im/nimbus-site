# Nimbus Site

This repo hosts the code for both [nimbus.team](https://nimbus.team) on the `master` branch (which builds and serves through `gh-pages`), and [dev.nimbus.team](https://dev.nimbus.team) on the `develop` branch.

There is an `edit` button on each page, which will take you directly to the document you need to edit on the `develop` branch. We can then allow a large group of people to push directly to `develop` and show their changes on the staging site when asking for review, which should smooth out and speed up the process considerably for everyone. `master` is obviously protected, and will only have changes merged in from `develop` once accepted.

## Adding a New Page

If you want to add a page, rather than just edit, you'll need to make sure it appears on the sidebar and is accessible to everyone.

1. Add your page to `source/docs/<your_file_here>.md`
2. In `source/_data/sidebars.yml` add the appropriate text to the appropriate place.
3. In `themes/navy/languages/en.yml` edit the sidebars section to make sure that your new text in `sidebars.yml` is rendered correctly.

## Testing locally

Make sure you have node.js installed first.

1. Open Terminal and navigate to the project root directory,
1. Run `npm install`,
1. Run `./node_modules/.bin/gulp build`,
1. In another terminal, run `./node_modules/.bin/hexo serve -p 8000`,
1. Open http://localhost:8000 in a browser.

This prevents the need for any global installs, and will allow you to have live reloading for any changes you are making.
