# Task Manager (Vue 3)

A small task / activity manager demonstrating CRUD operations in **Vue 3** with
**Vuex** state management. Add tasks, mark them complete, and delete them — state is
persisted in the browser via `localStorage`.

## Features

- **Add** tasks/activities.
- **Toggle complete** status.
- **Delete** tasks.
- **Persistent state** — the task list survives page reloads using `localStorage`.

## Tech stack

- **Framework:** [Vue 3](https://vuejs.org/) (Composition-friendly SFCs)
- **State:** [Vuex 4](https://vuex.vuejs.org/)
- **Build tool:** [Vite 6](https://vite.dev/)

## Project structure

The application lives in the [`crud-app/`](./crud-app) directory:

```
crud-app/
  src/
    components/   ActivityForm, ActivityItem, ActivityList
    store/        Vuex store (activities state + mutations)
    App.vue       Root component
    main.js       App entry
  vite.config.js
```

## Getting started

```bash
cd crud-app
npm install
npm run dev      # start the dev server (Vite)
```

Then open the URL printed in the terminal (default http://localhost:5173).

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview the production build locally |
