import { Routes, Route } from "react-router-dom";
import Homepage from "@/pages/Homepage";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Maintenance from "@/pages/Maintenance";
import Repair from "@/pages/Repair";
import RadiatorCleaning from "@/pages/RadiatorCleaning";
import KombiInstallation from "@/pages/KombiInstallation";
import FAQ from "@/pages/FAQ";
import Contact from "@/pages/Contact";
import AnkaraDistricts from "@/pages/AnkaraDistricts";
import DistrictPage from "@/pages/DistrictPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/hakkimizda" element={<About />} />
      <Route path="/hizmetler" element={<Services />} />
      <Route path="/hizmetler/bakim" element={<Maintenance />} />
      <Route path="/hizmetler/tamir" element={<Repair />} />
      <Route path="/hizmetler/petek-temizligi" element={<RadiatorCleaning />} />
      <Route path="/hizmetler/montaj" element={<KombiInstallation />} />
      <Route path="/sss" element={<FAQ />} />
      <Route path="/iletisim" element={<Contact />} />
      <Route path="/kombi-servisi-ankara" element={<AnkaraDistricts />} />
      <Route
        path="/kombi-servisi-ankara/:district"
        element={<DistrictPage />}
      />
    </Routes>
  );
}

export default App;
