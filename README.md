# Job Matcher

Job Matcher portal show most approciate job listing for a worker, upon first page load user can see his/her profile

upon clicking `See Matching Jobs` user can see their matching Jobs from which he/she can `Accept` or `Reject` the job

Application can be accessed on https://job-matcher.vercel.app/

# Tech Used

- NextJs framework
- API context (State Management)
- Tailwind CSS
- TypeScript
- Jest (for testing)


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
`tests`  Test directory contains all relevant test files for the component

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
- tests  


## Demo with Screenshots


# Desktop

This is how the main screen looks like

<img width="1440" alt="index" src="https://user-images.githubusercontent.com/35147974/174237163-ec920fed-b6e8-4458-af78-f77997be6855.png">

Upon clicking See Matching Jobs User can see all the matching jobs below

<img width="1440" alt="listjob" src="https://user-images.githubusercontent.com/35147974/174237542-5abf0caf-4e4b-4b1d-9f44-60b3e3b56a08.png">

Notification action based on user action either he/she accepts the job rejects it

<img width="1427" alt="not" src="https://user-images.githubusercontent.com/35147974/174237745-58407475-eb7d-4baf-9b56-d977143f3b93.png">


#Mobile Responsiveness

<img width="331" alt="indexMob" src="https://user-images.githubusercontent.com/35147974/174237952-bd3f3e32-6028-4361-96f8-5ba730ec289d.png">


<img width="336" alt="listJobMob" src="https://user-images.githubusercontent.com/35147974/174237961-3a7b67f3-6521-4e8f-8a92-46cfa3791c98.png">




## Run Test cases

Unit test has been implemented using Jest . Test is in watcher mode so runtime time based will trigger the test run in the background. To run the tests, run the below command


```shell
 npm run test  
```

<img width="895" alt="testcases" src="https://user-images.githubusercontent.com/35147974/174238622-eee803c2-1b6e-421a-ab5a-aeba40c0be5e.png">
