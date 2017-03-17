# Personal Website

My personal website - excluding my personal detail :\)

## Installing and Running

Use (yarn)[https://yarnpkg.com/]. It's so much better than NPM.

```bash
# Install Node Modules
yarn install

# Run it (This will build first then expose the site on http://localhost:3000
gulp
```

To rebuild whilst you're making changes:

```bash
# This will build first, expose the site on http://localhost:3000, and automatically rebuild when you change
gulp watch
```

To rebuild the favicon, replace _public/images/favicon.svg_ with a SVG you want to use, then:

```bash
gulp favicon
```

To build a production release:

```bash
gulp release
```

## Configs to change

* Change personal info in _public/data_:
    * bio.json for the home page content
    * profile.json for the profile page content
    * skills.json for the skills list on the profile page     
    * projects.json for the code page content
* Change images in _public/images_:
    * favicon.svg is the source for favicons
    * notfound.jpeg is displayed when an invalid route is specified
    * wallpaper.jpg is the background on the home page
* Change video on home page by changing _public/video/profile.mp4_
* Contact form config in _contact.form.config.json_
* Stylesheets in _src/sass/styles.scss_
* App in _src/app/app.js_
