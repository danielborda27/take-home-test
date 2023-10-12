# Show Git Commits App!

This application displays the list of commits made in the **GitHub** repository of this project (danielborda27).

## Setting up the Project

To set up the project, you should execute the following commands in the order shown below:

After cloning the project, access the project's root folder and navigate to the following path `frontend/show-git-commits`. Execute the following command to rebuild the Node modules and run the application on port 4200:

```
npm install && npm run start
```

Next, navigate to the following path in another terminal instance `backend/show-git-commits` and execute the following command to rebuild the Node modules and run the application on port 3000:

```
npm install && npm run start
```

Finally, go to the following URL in your browser and click on the **"Click Here"** button to view the list of commits.

## Running Unit Tests

To run the unit tests, execute the following command:

```
npm run test
```

## Technologies Used

For the frontend, **Angular 16** was used, implementing lazy loading to optimize the loading of the two modules that were created. For the backend, **NestJS** was used along with **Swagger** and **Axios** to build an API and retrieve the list of commits from the GitHub repository.