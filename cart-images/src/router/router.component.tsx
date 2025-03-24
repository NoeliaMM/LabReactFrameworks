import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { appRoutes } from "./routes";
import { Images1Scene, Images2Scene } from "@/scenes";
import { AppLayout } from "@/layouts";

export const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route
            path={appRoutes.root}
            element={<Navigate to={appRoutes.images1} replace />}
          />
          <Route path={appRoutes.images1} element={<Images1Scene />} />
          <Route path={appRoutes.images2} element={<Images2Scene />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
};
