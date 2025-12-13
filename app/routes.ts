import { type RouteConfig, layout, route } from "@react-router/dev/routes";

export default [
  // AUTH ROUTES
  layout("routes/auth/auth-layout.tsx", [
    route("sign-in", "routes/auth/sign-in.tsx"),
    route("sign-up", "routes/auth/sign-up.tsx"),
    route("forgot-password", "routes/auth/forgot-password.tsx"),
  
  ]),

  // DASHBOARD ROUTE (TOP LEVEL)
  route("dashboard", "routes/pages/ProjectList/ProjectList.jsx"),
  route("/project/:id", "routes/pages/project/ProjectDetails.jsx"),
] satisfies RouteConfig;
