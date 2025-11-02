import { Outlet } from "react-router";
import Contain from "~/components/contain";
import AboutSection from "~/components/hero";
import Footer from "~/components/shared/footer";
import Navbar from "~/components/shared/navber";

export default function layout() {
  return (
    <div>
<Navbar />
<AboutSection />
<Contain />
<Footer />

</div>
  );
}