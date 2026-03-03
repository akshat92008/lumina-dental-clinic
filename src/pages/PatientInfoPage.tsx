import Insurance from "../components/Insurance";
import PricingEstimator from "../components/PricingEstimator";
import FAQ from "../components/FAQ";

export default function PatientInfoPage() {
    return (
        <div className="pt-24 pb-12">
            <Insurance />
            <PricingEstimator />
            <FAQ />
        </div>
    );
}
