import React from 'react';
import Banner from '../../../component/banner/Banner';
import ChefSection from '../../../component/chef-section/ChefSection';
import ExtraSection from '../../../component/extraSection/ExtraSection';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ExtraSection></ExtraSection>
            <ChefSection></ChefSection>

        </div>
    );
};

export default Home;