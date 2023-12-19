import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { setAssetPath } from "@esri/calcite-components/dist/components";
import "@arcgis/core/assets/esri/themes/light/main.css";
setAssetPath("https://unpkg.com/@esri/calcite-components/dist/calcite/assets");

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
