import {useLocation, Navigate, Outlet, Route, Routes} from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import StartPage from "./pages/StartPage";
import OTPVerification from "./pages/OTPVerification";
import Dashboard from "./pages/Dashboard";
import useStore from "./store";

function Layout(){

  const {user} = useStore((state) => state);

  const location = useLocation();

  return user?.token ? (<div className="w-full h-screen">
    <Navbar/>  
    <div className="w-full h-full flex border-t pt-16"> 
      <div className="hidden lg:flex">
        <Sidebar/>
      </div>

      <div className="w-full flex-1 px-8 py-6 overflow-y-auto">
        <Outlet />
      </div>
    </div>

  </div>
  ):(
    <Navigate to= "/auth" state={{from:location}} replace />
    );
}
function App() {
  return (
    <main className='w-full min-h-screen '>
     <Routes>
      <Route element={<Layout/>}>
        <Route index path="/" element={<Navigate to="dashboard"/>} />
        <Route path="/dashboard" element={<Dashboard />} />

      </Route>
        
        <Route path="/auth" element={<StartPage/>} />
        <Route path="/otp-verification" element={<OTPVerification/>} />
     </Routes >
    </main>
  );
}

export default App;
