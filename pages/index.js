import { useState } from "react";
import Sidebar from "../comps/globalComps/sidebar";
import HomeComp from "../comps/sect/home";
import LGAs from "../comps/sect/LGAs";
import StatesComp from "../comps/sect/States";
import SummaryComp from "../comps/sect/Summary";

export default function Home() {
  const [widgetIndex, setWidgetIndex] = useState(0);
  var Widgets = [SummaryComp, LGAs, StatesComp, HomeComp];
  return (
    <>
      <Sidebar comp={setWidgetIndex} />
      <HomeComp />
      <LGAs />
      <StatesComp />
      <SummaryComp />
    </>
  );
}
