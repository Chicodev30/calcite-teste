import React, { useRef, useLayoutEffect } from 'react';
import "@esri/calcite-components/dist/components/calcite-shell";
import "@esri/calcite-components/dist/components/calcite-shell-panel";
import "@esri/calcite-components/dist/components/calcite-panel";
import "@esri/calcite-components/dist/components/calcite-menu";
import "@esri/calcite-components/dist/components/calcite-menu-item";
import "@esri/calcite-components/dist/components/calcite-popover";
import "./app.css";
import {
  CalciteShell,
  CalciteShellPanel,
  CalcitePanel,
  CalcitePopover
} from "@esri/calcite-components-react";

import { Menu } from "./libs/menu"; // Importar o componente Menu

export default function App() {
  const mapDiv = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (mapDiv.current) {
      import("./libs/mapping").then((mapping) => {
        mapping.init(mapDiv.current!);
      });
    }
  }, [mapDiv]);


  return (
    
    <CalciteShell>
      <CalciteShellPanel slot="panel-start">
          <Menu/>
      </CalciteShellPanel>
      <CalcitePanel>
        <div className="h-full w-full" ref={mapDiv}></div>
      <CalcitePopover
        heading="Guia de uso"
        label="Guia de uso"
        referenceElement="question"
        id='guia'
        closable
        overlay-positioning = "absolute"
        offset-distance="250" 
        offset-skidding="120"
      >
        <p>
          Aqui terá um guia
        </p>
      </CalcitePopover>
      </CalcitePanel>
    </CalciteShell>
  );
}
