import { useState } from "react";
import Sidebar from "../comps/globalComps/sidebar";
import HomeComp from "../comps/sect/home";
import LGAs from "../comps/sect/LGAs";
import StatesComp from "../comps/states";
import SummaryComp from "../comps/sect/Summary";

export default function Home() {
  const [widgetIndex, setWidgetIndex] = useState(0);
  // const [widgetIndex, setWidgetIndex] = useState(0);
  var Widgets = [SummaryComp, LGAs, StatesComp, HomeComp];
  function onclickSidebar(w) {
    setWidgetIndex(1);
  }

  if (widgetIndex == 0) {
    return (
      <div className="wrapper">
        <div className="comp">
          <StatesComp />
        </div>
      </div>
    );
  } else if (widgetIndex == 0) {
    return (
      <div>
        <LGAs />
      </div>
    );
  } else if (widgetIndex == 1) {
    return (
      <div>
        <StatesComp />
      </div>
    );
  } else if (widgetIndex == 2) {
    return (
      <div>
        <HomeComp />
      </div>
    );
  } else if (widgetIndex == 3) {
    return (
      <div>
        <StatesComp />
      </div>
    );
  }
  return <Sidebar comp={setWidgetIndex} />;
}
