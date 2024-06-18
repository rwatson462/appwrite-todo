# appwrite-todo
Simple Todolist app written with Typescript, NextJs and Appwrite





## Setting up.

Creating a new project is easy:
1. Create NextJs project `npx create-next-app appwrite-todo`
2. Push basic version to Github
3. Deploy to Vercel - https://vercel.app
   1. Create new project on Vercel.app
   2. Link to Github repo - https://github.com
   3. Deploy
4. Create Appwrite account - https://appwrite.io
5. Install Appwrite
6. Refactor view to use Appwrite


## Todo.

- [ ] Figure out emails for account verification (or turning it off)
- [ ] Add some "logged in" state passed
- [ ] Create a wrapper to hide authenticated routes and components
- [ ] Figure out redirects after posting forms (url param doesn't seem to do anything)
- [ ] Add "Lists" page
  - [ ] Create List form
  - [ ] Show lists
  - [ ] View list contents
- [ ] Create default List when registering
- [ ] Add some content to a Dashboard
- [ ] Add user profile page
  - [ ] Allow account deletion
  - [ ] Allow password change
  - [ ] Allow email change