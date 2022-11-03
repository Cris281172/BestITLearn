import Languages from "./language-select/Languages";
import {useEffect, useState} from "react";
import cookiesGetItem from "../../common/cookies-get-item/cookiesGetItem";
import Navigation from "./navigation/Navigation";

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
                </>
            }
            {languagesStatus &&
            <Languages setHomepageStatus={setHomepageStatus} setLanguagesStatus={setLanguagesStatus} />
            }
        </>

    )
}

export default Homepage;