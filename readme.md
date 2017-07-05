## Live and Running Version of this Project

https://delicious-stores.herokuapp.com

## How to Start

```bash
npm install
```

Rename the file 'variables.env.sample' to 'variables.env'

**GET YOUR OWN API Keys, MLAB account, MailTrap Account**

If you don't understand any of that, then go to www.learnode.com and get the course.
The best course you can find on node.

After you have setup the variables properly

```bash
npm start
```

Should start the project.

## Sample Data

To load sample data, run the following command in your terminal:

```bash
npm run sample
```

If you have previously loaded in this data, you can wipe your database 100% clean with:

```bash
npm run blowitallaway
```

That will populate 16 stores with 3 authors and 41 reviews. The logins for the authors are as follows:

|Name|Email (login)|Password|
|---|---|---|
|Wes Bos|wes@example.com|wes|
|Debbie Downer|debbie@example.com|debbie|
|Beau|beau@example.com|beau|