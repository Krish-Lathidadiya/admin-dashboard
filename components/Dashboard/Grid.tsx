import React from "react";
import StateCards from "./StateCards";
import ActivityGraph from "./ActivityGraph";
import UsageRadar from "./UsageRadar";
import RecentTransitions from "./RecentTransitions";

function Grid() {
  return <div className="px-4 grid gap-3 sm:grid-cols-12 ">

    <StateCards/>     
    <ActivityGraph/>
    <UsageRadar/>
    <RecentTransitions/>
  </div>;
}

export default Grid;
