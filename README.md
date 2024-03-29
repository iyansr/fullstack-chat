# FullStack Chat


https://github.com/iyansr/fullstack-chat/assets/42711013/5bc281c3-646f-4811-9df7-9157c53dcad8


## Stack
- React Native
- Expo
- Typescript
- Prisma
- NodeJS
- Express
- Coolify
- PostgreSQL

## Running Backend Server

- Navigate to `/server`
- Add Following `.env`
  
```bash
DATABASE_URL="pg connection string"
PORT=3001
```
- Install Dependencies
  
```bash
$ yarn # using yarn 
$ npm install # using npm
```
- Run DB Migration
  
```bash
$ yarn db:push # yarn
$ npm run db:push # npm
```
- Can seed the data use `seed.sql`
- Run development server by `yarn dev` or `npm run dev`

### Server Endpoint:

Deployed URL: https://fullstack-chat.iyansr.id/

- `/v1/messages`
  - Query:
    - `cursor` base64 encoded string for pagination
    - `take` total item per-request
  - Return:
      ```typescript
      type AllMessagesResponse = {
         data: Message[];
         metaData: {
            cursor: string | null;
            hasNextPage: boolean;
         };
      };

     
      type Message = {
         id: string;
         content: string;
         createdAt: Date;
         senderId: number;
         receiverId: number;
      }
      ```

---
©️ 2024 - I Putu Saputrayana
