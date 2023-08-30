import { useState } from "react";
import FeaturTableyearly from "./FeatureTableyearly";
import FeaturTablemonthly from "./FeatureTablemonthly";
export default function FeatureButton() {
    const [isFooVisible, setIsFooVisible] = useState(false);
    const handleFooPress = () => {
        setIsFooVisible((isVisible) => !isVisible);
    };
    return (
        <div>
            {!isFooVisible && <FeaturTableyearly/>}
            {isFooVisible && <FeaturTablemonthly/>}
            {!isFooVisible && <button className='view-feature mt-5 btn' onClick={handleFooPress}>View all Features</button>} 
       </div>
    );
}