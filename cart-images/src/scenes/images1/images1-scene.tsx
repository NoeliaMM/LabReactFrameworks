import React from "react";

import classes from "./images1-scene.module.css";

import { HeaderPageComponent } from "@/common/components";
import { ImagesList } from "@/layouts/app/components";

import { imagesMock1 } from "@/common/mocks/images-mock";



export const Images1Scene: React.FC = () => {

  return (
<>
      <div className={classes.root}>
        <HeaderPageComponent
          title="Images1"          
        />
    
        <ImagesList pictures={imagesMock1} />
   
      </div>
      </>
  );
};
