import { useState } from "react";
import "./App.scss";
import Settings from "./components/Settings";
import Timer from "./components/Timer";
import SettingContext from "./SettingContext";

const App = () => {

  const [showSettings, setShowSettings] = useState(false);
  const [workMinutes, setWorkMinutes] = useState(45);
  const [breakMinutes, setBreakMinutes] = useState(15);

  return (
    <div className="main">
      <SettingContext.Provider value={{
        workMinutes,
        setWorkMinutes,
        breakMinutes,
        setBreakMinutes,
        showSettings,
        setShowSettings
      }}>
        {showSettings ? <Settings /> : <Timer />}
      </SettingContext.Provider>
    </div>
  )
}

export default App