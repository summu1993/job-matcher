# Job Matcher

Job Matcher portal show most approciate job listing for a worker, upon first page load user can see his/her profile

upon clicking `See Matching Jobs` user can see their matching Jobs from which he/she can `Accept` or `Reject` the job

Application can be accessed on https://job-matcher.vercel.app/

# Tech Used

- NextJs framework
- API context (State Management)
- Tailwind CSS
- TypeScript


## To Run the Project
```shell
git clone https://github.com/summu1993/job-matcher

npm i
```

## To Run it locally Build Mode

```shell

npm run build
npm run start
```

## Modularity and Folder Structure Followed

```shell

Next js native folder structure has been moved to `src` folder to make it more modular and concise
`components` directory contains the all reusable components
`constants` directory contains constants
`contexts` use of context API by creating context Provider & context
`httpClient` directory contains one time instantiated axios object for our backend API calls
`pages` Pages directory is the crux of next js by each file creates a different route 

```

- src
  - components
    - actionableButtons
    - baseLayout
    - jobListingCard
    - Toast
  - constants
  - contexts
  - httpClient
  - pages
    - api
  - utils