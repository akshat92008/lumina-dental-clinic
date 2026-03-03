import BookingForm from "../components/BookingForm";
import Contact from "../components/Contact";

export default function ContactPage() {
    return (
        <div className="pt-24 pb-12">
            <Contact />
            <div className="mt-12">
                <BookingForm />
            </div>
        </div>
    );
}
