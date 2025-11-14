# The Lumber River

A website celebrating the natural beauty, ecology, and wildlife of the Lumber River in Robeson County, North Carolina.

## 🌿 About

This site serves visitors to the Lumber River—birders, paddlers, hikers, fishermen, and nature lovers—with accessible content about the river's wildlife, paddling guides, and seasonal updates.

## 🚀 Project Structure

```
/
├── public/
│   ├── images/          # Static images
│   ├── robots.txt       # Search engine directives
│   └── favicon.svg      # Site icon
├── src/
│   ├── components/      # Reusable Astro components
│   ├── layouts/         # Page layout wrapper
│   ├── pages/           # Site pages (file-based routing)
│   ├── styles/          # Global CSS and Tailwind
│   └── content/         # Content collections (blog posts)
├── astro.config.mjs     # Astro configuration
├── tailwind.config.mjs  # Tailwind CSS configuration
└── package.json
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |

## 🎨 Design

The site uses a natural color palette inspired by the Lumber River:

- **River Deep Blue** (#243B53)
- **Cypress Green** (#3E6B48)
- **Wetland Moss** (#7E8F6E)
- **Sandbar Tan** (#DCC7A1)
- **Driftwood Brown** (#5A4632)
- **Fog Gray** (#E5E7EB)

Typography combines poetic headings (Merriweather) with clean body text (Inter).

## 📝 Content Strategy

- Wildlife and ecology blog posts
- Paddling and fishing guides
- Seasonal river updates
- Local event listings
- Future: Sponsored posts for local businesses

## 🛠️ Tech Stack

- **Framework:** [Astro](https://astro.build)
- **Styling:** [Tailwind CSS](https://tailwindcss.com)
- **Deployment:** Cloudflare Pages
- **Approach:** Beginner-friendly patterns from Astro tutorial

## 📚 Documentation

See [PROJECT_SPEC.md](./PROJECT_SPEC.md) for detailed requirements and [Copilot agent prompt profile.md](<./Copilot agent prompt profile.md>) for development guidelines.

## 🤝 Contributing

- Follow semantic HTML and accessibility best practices
- Use reusable components for consistency
- Keep code beginner-friendly (Astro tutorial patterns only)
- Commit early and often
- Ask before making breaking changes

## 📄 License

All rights reserved.
