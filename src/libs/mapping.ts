import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import Search from "@arcgis/core/widgets/Search";


interface MapApp {
  view?: MapView;
}

const app: MapApp = {};

export async function init(container: HTMLDivElement) {
  if (app.view) {
    app.view.destroy();
  }

  const map = new Map({
    basemap: "hybrid",
  });

  const view = new MapView({
    map,
    container,
    center: [-51.2177, -30.0346], // Coordinates for Porto Alegre
    zoom: 16,
    ui: {
      components: ["zoom"],
    }
  });
  
  view.ui.move("zoom", "top-right");
  view.ui.add(new Search({ view }), "top-left");
  
  app.view = view;

  return cleanup;
}

function cleanup() {
  app.view?.destroy();
}
