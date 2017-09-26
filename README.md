This project was created with the intent of being a personal script bank.

If you are a person that likes to turn every repetitive task into a script, but then started getting lost on where which script goes and what they do, this project is for you.

## Table of Contents

- [Building](#building)

## Building

This text will assume you have Yarn installed on your machine.

### Create a Firebase account

For now the project relies on Firebase as its backend provider. This will likely change on the future, but for now this is necessary.

After creating a new project, import create a .env file at the root at this project with these vars extracted from the firebase console:

    REACT_APP_API_KEY=<YOUR_KEY>
    REACT_APP_AUTH_DOMAIN=<YOUR_DOMAIN>
    REACT_APP_DATABASE_URL=<YOUR_URL>
    REACT_APP_PROJECT_ID=<YOUR_PROJECT_ID>

Now run the following command on the root of the project. You should be able to see the project running locally

    yarn run start

Once you are ready to deploy, run:

    yarn run build

And then follow up the firebase instructions on how to deploy a static page. The folder with the builded app is inside the _build_ folder.