import { generatePath } from "react-router-dom";

interface SwitchRoutes {
  root: string;
  kitty: string;
  detail: string;
}

interface Routes extends Omit<SwitchRoutes, "detail"> {
  detail: (id: string) => string;
}

export const switchRoutes: SwitchRoutes = {
  root: "/",
  kitty: "/kitty",
  detail: "/detail/:id",
};

export const routes: Routes = {
  ...switchRoutes,
  detail: (id: string) => generatePath("/detail/:id", { id }),
};
