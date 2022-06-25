import { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingScreen from "./components/LoadingScreen";

import Screen1 from "./screens/Screen1";
import Screen2 from "./screens/Screen2";
import Screen3 from "./screens/Screen3";
import Screen4 from "./screens/Screen4";
import Screen5 from "./screens/Screen5";
import Screen6 from "./screens/Screen6";
import Screen7 from "./screens/Screen7";
import Screen8 from "./screens/Screen8";
import Screen9 from "./screens/Screen9";
import Screen10 from "./screens/Screen10";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            location="home"
            element={
              <Suspense fallback={<LoadingScreen />}>
                <Screen1 />
              </Suspense>
            }
          />
          <Route path="/screen2" element={<Screen2 />} />
          <Route path="/screen3" element={<Screen3 />} />
          <Route path="/screen4" element={<Screen4 />} />
          <Route path="/screen5" element={<Screen5 />} />
          <Route path="/screen6" element={<Screen6 />} />
          <Route path="/screen7" element={<Screen7 />} />
          <Route path="/screen8" element={<Screen8 />} />
          <Route path="/screen9" element={<Screen9 />} />
          <Route path="/screen10" element={<Screen10 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
