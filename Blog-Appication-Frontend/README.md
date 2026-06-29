# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

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

