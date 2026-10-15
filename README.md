# Ravish — portfolio site (GitHub Pages)

A ready-to-publish static portfolio: home, about, work, and contact pages in the
charcoal-and-ember style, with no build step and no dependencies.

## What's in this folder

| File | What it is |
| --- | --- |
| `index.html` | Home page — intro, interests, story, achievement |
| `about.html` | About me — story, education, three first-place finishes |
| `work.html` | My work — currently shows "projects to come" |
| `contact.html` | Contact — masked number and location |
| `404.html` | Shown when a web address doesn't match a page |
| `assets/styles.css` | All colours, fonts, spacing, and the mobile layout |
| `assets/main.js` | Opens and closes the phone menu |
| `assets/sketch-studio.jpg` | Illustrative hero image (not original artwork) |
| `favicon.ico` | The small tab icon |

Every link is relative, so the site works both at
`https://Ravishvats.github.io/` and at
`https://Ravishvats.github.io/<repo-name>/`.

## Publish it in about five minutes

1. **Make the repository.** On github.com, choose **New repository**.
   For the shortest address, name it exactly `Ravishvats.github.io`
   — that gives you `https://Ravishvats.github.io/`. Keep it **Public**,
   tick **Add a README file**, then **Create repository**.
2. **Upload the files.** On the repository page choose **Add file → Upload files**.
   Select everything in this folder — including the `assets` folder and the
   hidden `.nojekyll` file — then **Commit changes**.
3. **Turn Pages on.** Go to **Settings → Pages**. Under **Build and deployment**
   set **Source** to *Deploy from a branch*, **Branch** to `main`, and the folder
   to `/ (root)`. Press **Save**.
4. **Open it.** After about a minute, GitHub shows your live address at the top of
   **Settings → Pages**. Open it in a browser.

> If you named the repository something else, your site appears at
> `https://Ravishvats.github.io/<repo-name>/` instead. Nothing needs changing.

## Making changes later

- Edit the text in the matching `.html` file (for example `about.html`) and upload
  the new copy over the old one.
- Colours and fonts live at the top of `assets/styles.css`:
  `--background` is the charcoal, `--primary` is the ember orange,
  `--font-display` and `--font-sans` are the two typefaces.
- When a project is finished, add a block inside `<section class="work-empty">`
  in `work.html`, or copy `work.html` to a new page and link it from the menu.

## Adding your real artwork

Replace `assets/sketch-studio.jpg` with your own scan or photo (keep the same
file name, or update the `src` in `index.html`). The caption in the top-right
corner of the home page says the image is illustrative — once it is your own
drawing, change that line in `index.html` too.
