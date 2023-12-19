
import "@esri/calcite-components/dist/components/calcite-panel";
import "@esri/calcite-components/dist/components/calcite-menu";
import "@esri/calcite-components/dist/components/calcite-menu-item";
import "@esri/calcite-components/dist/components/calcite-accordion";
import "@esri/calcite-components/dist/components/calcite-accordion-item";
import "@esri/calcite-components/dist/components/calcite-notice";
import "@esri/calcite-components/dist/components/calcite-popover";
import "@esri/calcite-components/dist/components/calcite-label";
import "@esri/calcite-components/dist/components/calcite-input";
import "@esri/calcite-components/dist/components/calcite-select";
import "@esri/calcite-components/dist/components/calcite-option";
import "@esri/calcite-components/dist/components/calcite-tooltip";


import "./menu.css"

import {
    CalcitePanel,
    CalciteAction,
    CalciteAccordion,
    CalciteAccordionItem,
    CalciteNotice,
    CalciteInput,
    CalciteLabel,
    CalciteSelect,
    CalciteOption,
  } from "@esri/calcite-components-react";
  
  export const Menu = () => (
    <CalcitePanel  heading="Mapa configuravel" id="menu-panel" >
      <CalciteAction icon="home" text="home" slot="header-actions-start"></CalciteAction>
      <CalciteAction icon="question" text="question" slot="header-actions-end" id="question"></CalciteAction>
      <CalciteAction icon="sign-out" text="sign-out" slot="header-actions-end"></CalciteAction>
      <CalciteAccordion iconPosition="end" icon-type="chevron" selectionMode="multiple" scale="l">
        <CalciteAccordionItem icon-start="search" heading="Procurar" description="procure por atributo ou por geometria">
        <CalciteLabel>
        Escolha uma camada
    <CalciteSelect label="camada">
        <CalciteOption value="cap">Ordens de serviço - CAP</CalciteOption>
        <CalciteOption value="dcvu">Ordens de serviço - DCVU</CalciteOption>
        <CalciteOption value="podas">Ordens de serviço - PODAS</CalciteOption>
    </CalciteSelect>
    </CalciteLabel>
    <CalciteLabel> Protocolo:
    <CalciteInput placeholder="Ex: 316632-15-84" pattern="[0-9-]{10}" input-mode="number"></CalciteInput>
    </CalciteLabel>
    <CalciteLabel> Código da OS:
    <CalciteInput placeholder="" pattern="" input-mode="number"></CalciteInput>
    </CalciteLabel>
    <CalciteLabel> Lote de Pré-Planejamento::
    <CalciteInput placeholder="" pattern="" input-mode="number"></CalciteInput>
    </CalciteLabel>
    <CalciteLabel>
        Situação da OS em lotes:
    <CalciteSelect label="situação-os">
        <CalciteOption value="qualquer">Qualquer</CalciteOption>
        <CalciteOption value="em-lotes">Apenas OSs em lotes</CalciteOption>
        <CalciteOption value="fora-lotes">Apenas OSs fora de lotes</CalciteOption>
    </CalciteSelect>
    </CalciteLabel>
        </CalciteAccordionItem>
        <CalciteAccordionItem icon-start="select" heading="Pesquisar por endereço" description="encontre utilizando um determinado endereço">
          <CalciteNotice open>
            <div slot="message">A good choice for inland adventure</div>
          </CalciteNotice>
        </CalciteAccordionItem>
        <CalciteAccordionItem icon-start="group" heading="Estrategia de atendimento">
          <CalciteNotice open>
            <div slot="message">Cross continents quickly</div>
          </CalciteNotice>
        </CalciteAccordionItem>
        <CalciteAccordionItem icon-start="layers" heading="Camadas" description="Escolha as camadas para vizualizar no mapa">
          <CalciteNotice open>
            <div slot="message">Cross continents quickly</div>
          </CalciteNotice>
        </CalciteAccordionItem>
        <CalciteAccordionItem icon-start="data-folder" heading="OSs Consolidadas">
          <CalciteNotice open>
            <div slot="message">Cross continents quickly</div>
          </CalciteNotice>
        </CalciteAccordionItem>
        <CalciteAccordionItem icon-start="legend" heading="Legendas">
          <CalciteNotice open>
            <div slot="message">Cross continents quickly</div>
          </CalciteNotice>
        </CalciteAccordionItem>
        <CalciteAccordionItem icon-start="bookmark" heading="Marcadores" description="Salve pontos no mapa" >
          <CalciteNotice open>
            <div slot="message">Cross continents quickly</div>
          </CalciteNotice>
        </CalciteAccordionItem>
        <CalciteAccordionItem icon-start="pencil" heading="Desenhar" description="Faça analise utilizando desenhos no mapa" >
          <CalciteNotice open>
            <div slot="message">Cross continents quickly</div>
          </CalciteNotice>
        </CalciteAccordionItem>
        <CalciteAccordionItem icon-start="measure" heading="Medir" description="calcule a distancia de determinado pontos" >
          <CalciteNotice open>
            <div slot="message">Cross continents quickly</div>
          </CalciteNotice>
        </CalciteAccordionItem>
        <CalciteAccordionItem icon-start="geonet-question" heading="Identificar" description="Escolha uma camada ou matenha todas" >
          <CalciteNotice open>
            <div slot="message">Cross continents quickly</div>
          </CalciteNotice>
        </CalciteAccordionItem>
        <CalciteAccordionItem icon-start="print" heading="Imprimir" description="Imprimir uma determinada area do mapa" >
          <CalciteNotice open>
            <div slot="message">Cross continents quickly</div>
          </CalciteNotice>
        </CalciteAccordionItem>
      </CalciteAccordion>
      <div className="footer">
      <a href='https://prefeitura.poa.br/' target='_blank'><img src="public/pmpa.png" alt="Prefeitura de Porto Alegre"/></a>
      <a href='https://prefeitura.poa.br/procempa' target='_blank'><img src="public/procempa.png" alt="Procempa" width={"160"} height={"100"}/></a>
      </div>
    </CalcitePanel>
  );
  