# COVID-19 Statistics Dashboard

## Tech Stack

- **Frontend:**

  - React
  - TypeScript
  - Next.js
  - Tailwind CSS
  - ChartJs
  - react-chartjs
  - Shadcn
  - Lucide icons
  - Next themes

- **Data:**

  - COVID-19 API

- **Deployment:**
  - Vercel

#### Getting started

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

##### Run the project

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

#### Access the project :

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result or access PROD on [https://covid-stats-arbaaz-mowlabucus-projects.vercel.app/en](https://covid-stats-arbaaz-mowlabucus-projects.vercel.app/en)

### Features :

- Real-time COVID-19 statistics
- Interactive charts and graphs
- Responsive design
- Multi-language support

### Approach and tradeoffs

##### UI/setup :

I started the project with a standard nextjs template and added some basic UI from shadcn to help things go faster and to have a nice theme ongoing (I chose shadcn because they use next-themes for their themeing which i'm familliar with.). I also chose next-intl as a trans lib, because of it's flexibility on server/client components ⛷️.

##### Data fetching :

I just went the basic fetch route for this one, it was mostly fetches so I didn't try complexify things and i wanted to focus more on chartJS. A big tradeoff 🥲 here was error handling, which I left for last but didn't really got time to implement.

##### ChartJs:

Big focus of the project 🤞
For chart js i used the main library for thr barchart and piecharts with my own custom component, but I did use react-chart2js lib for the line chart for experimentation.
