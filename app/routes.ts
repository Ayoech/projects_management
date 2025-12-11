import { type RouteConfig, index, layout, route} from "@react-router/dev/routes";

export default [layout("routes/auth/auth-layout.tsx", [
    route("sign-in", "routes/auth/sign-in.tsx"),
    route("sign-up", "routes/auth/sign-up.tsx"),
    route("forgot-password", "routes/auth/forgot-password.tsx")
   


])
    
] satisfies RouteConfig;
