import React, { useEffect, useState } from 'react';
import { WarStatistic } from '../types/index';

interface StatisticProps {
    data: WarStatistic;
}

const Statistic: React.FC<StatisticProps> = ({ data }) => {
    console.log(data)
    const [scriptAppended, setScriptAppended] = useState(false);
    var appended = false;
    useEffect(() => {
        if (!scriptAppended && !appended) {
            // Create a script element
            const script = document.createElement('script');
            script.src = 'https://russianwarship.rip/widgets/init.js';
            script.defer = true;

            // Append the script element to the document body
            document.body.appendChild(script);

            // Update state to indicate that the script has been appended
            setScriptAppended(true);
            appended = true;
        }

        // Clean up the script element when the component is unmounted
        return () => {
            // Remove the script element from the document body
            const scriptElement = document.querySelector('script[src="https://russianwarship.rip/widgets/init.js"]');
            if (scriptElement) {
                document.body.removeChild(scriptElement);
            }
        };
    }, []);
    return (
        <div className='mb-10'>
            
                <ins data-wrapper="russianwarshiprip-widget"
                    data-width="380" data-lang="ua"
                    data-charity="off" data-color="light"
                    data-autoplay="autoplay" data-corners="rounded"
                    data-borders="bordered" data-speed="1200"
                    data-stop="stop">
                </ins>
            
        </div>
    );
};


export default Statistic;
