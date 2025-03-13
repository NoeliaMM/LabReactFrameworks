import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { appRoutes} from "./routes";
import { SearchListScene } from "@/scenes/search-list.scene";
import { MemberDetailScene } from "@/scenes/member-detail.scene";
import { AppLayout } from "@/layout/app/app-layout.component";
import { SearchProvider } from "@/core/providers";
import { HomeScene } from "@/scenes/home.scene";
import { CharacterListScene } from "@/scenes/character-list.scene";
import { CharacterDetailScene } from "@/scenes/character-detail.scene";


export const AppRouter :React.FC = () => {
    return (
    <Router>      
      <SearchProvider>
        <AppLayout>
          <Routes>          
            <Route path={appRoutes.home} element={<HomeScene />} />
            <Route path={appRoutes.searchList} element={<SearchListScene />} />
            <Route path={appRoutes.memberDetail} element={<MemberDetailScene />} />
            <Route path={appRoutes.characterList} element={<CharacterListScene />} />
            <Route path={appRoutes.characterDetail} element={<CharacterDetailScene />} />
          </Routes>
        </AppLayout>
      </SearchProvider>
    </Router>
    );
};
