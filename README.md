## Installing 

    Dependencies: Node.js(tested with node version 8 and 9, version 10 was still having issues), Yarn/npm.

    - run `yarn install`

    - navigating to client folder

    - run `yarn install` inside client folder

## Running

    - navigate to root directory

    - run `yarn start`

    The application is running at http://localhost:8081.

## Running the applcation in development mode

    - navigate to root directory

    - run `yarn start`

    - navigate to client folder

    - run `yarn start`

    The Application is running in dev mode at http://localhost:3000.

## API routes
All routes use the GET method. 

`/app`
 
Return a list of all appIDs. 

`/app/:appID`
 
Return all data for given `appID`. Number of rows differ between appIDs. 


`/app/:appID/:field`
 
Return all data for given `field` for given `appID`.


`/fields`
 
Return all table columns. 