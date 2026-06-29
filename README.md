# run project:

## 1. Start the backend

Open a terminal and run these commands:

```powershell
cd "C:\Users\Shraddha\OneDrive\Attachments\project\BlogApplication(React.js, Spring Boot, MySQL)\Blog-Application-Backend"
.\mvnw spring-boot:run
```

The backend runs on:

- `http://localhost:8082`
- API path: `/api/posts`

## 2. Start the frontend

Open another terminal and run:

```powershell
cd "C:\Users\Shraddha\OneDrive\Attachments\project\BlogApplication(React.js, Spring Boot, MySQL)\Blog-Appication-Frontend"
npm install
npm run dev
```

The frontend runs on:

- `http://localhost:5173`

## 3. Open the app

Open your browser and go to:

```text
http://localhost:5173/
```

## 4. Troubleshooting

- If the backend does not start, verify MySQL is running and the database `BlogApplicationdb` is created.
- Backend DB settings are in `Blog-Application-Backend/src/main/resources/application.properties`.
- If the frontend fails, ensure the backend is already running and that `npm install` completed successfully.

