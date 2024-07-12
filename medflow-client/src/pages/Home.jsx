import AppointmentBox from "@/components/Home/AppointmentBox";
import Banner from "@/components/Home/Banner";
import BannerCard from "@/components/Home/BannerCard";
import FAQ from "@/components/Home/FAQ";
import MedicalServices from "@/components/Home/MedicalServices";
import Welcome from "@/components/Home/Welcome";



const Home = () => {
    return (
        <div>
            <Banner />
            <BannerCard />
            <Welcome />
            <MedicalServices />
            {/* doctor slider */}
            <AppointmentBox />
            <FAQ />
        </div>
    );
};

export default Home;