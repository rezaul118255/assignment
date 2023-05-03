import React, { useEffect } from 'react';
import Banner from '../../../component/banner/Banner';
import ChefSection from '../../../component/chef-section/ChefSection';
import ExtraSection from '../../../component/extraSection/ExtraSection';
import ExtraSection2 from '../../../component/extraSection2/ExtraSection2';

const Home = () => {

    return (
        <div>
            <Banner></Banner>
            <ExtraSection></ExtraSection>
            <ChefSection></ChefSection>
            <ExtraSection2></ExtraSection2>

        </div>
    );
};

export default Home;