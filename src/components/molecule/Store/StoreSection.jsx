import StoreTagline from "./StoreTagline"
import StoreBanner from "./StoreBanner";
import StoreCarousel from "./StoreCarousel";
import XiaomiPhone from "./XiaomiPhone";
import RedmiPhone from "./RedmiPhone";
import PocoPhone from "./PocoPhone";
import StoreLabel from "../../Atoms/StoreLabel/StoreLabel";


const StoreSection = () => {
    return (

        <section>
            <div>
                <StoreCarousel />
            </div>
            <div>
                <StoreBanner />
            </div>
            <div>
                <StoreTagline />
            </div>
            <div>
                <StoreLabel Label='Xiaomi' />
                <XiaomiPhone />
            </div>
            <div>
                <StoreLabel Label='Redmi' />
                <RedmiPhone />
            </div>
            <div>
                <StoreLabel Label='POCO' />
                <PocoPhone />
            </div>
        </section>

    );
};

export default StoreSection