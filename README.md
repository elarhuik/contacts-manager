# Contacts manager
A react app for managing contacts via Pipedrive API


## Import contacts

The table describes the format and data types for the imported data. Be sure to create custom fields for 'Groups', 'Location' and 'Order'. You can also use the .csv in /import_data.

| Name    | Organization | Email  | Phone  | Groups | Assistant | Location | Order  |
| ------- | ------------ | ------ | ------ | ------ | --------- | -------- | ------ |
| string  | string       | string | string | string | string    | string   | number |


Don't forget to use the correct API field names, that are generated for the custom fields. Sample in /api/types.js.

Alternatively, you can skip the Pipedrive setup and use mock data, provided under /api/mock.js.
To do this, just change fetchPersonsData() accordingly in /components/Contacts/ContactsActions.js.

## Launching the app

You must have node.js installed (latest version preferably).
Then in the root directory of this repo, run these commands
```
npm install
npm start
```

Open your browser and go to http://localhost:3000/.

