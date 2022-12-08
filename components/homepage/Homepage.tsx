import Languages from "./language-select/Languages";
import {useEffect, useState} from "react";
import cookiesGetItem from "../../common/cookies-get-item/cookiesGetItem";
import Navigation from "./navigation/Navigation";
import Footer from './footer/Footer'
import Header from './header/Slider'
import HowItWork from "./how-it-work/HowItWork";
import ContactForm from "./contact-form/ContactForm";


const Homepage = () => {
    const[languagesStatus, setLanguagesStatus] = useState(true);
    const[homepageStatus, setHomepageStatus] = useState(false);
    useEffect(() => {
        if(cookiesGetItem('language')){
            setHomepageStatus(true);
            setLanguagesStatus(false);
        }
        else{
            setHomepageStatus(false)
            setLanguagesStatus(true);
        }
    }, [])
    return(
        <>
            {homepageStatus &&
            <>
                <Navigation />
                <Header />
                <HowItWork />
                <ContactForm />
                <Footer />
            </>
            }
            {languagesStatus &&
            <Languages setHomepageStatus={setHomepageStatus} setLanguagesStatus={setLanguagesStatus} />
            }
        </>

    )
}

export default Homepage;