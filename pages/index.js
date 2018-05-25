import React from 'react';
import AppLayout from '/components/AppLayout/AppLayout'
import stylesheet from "styles/index.less";

class Home extends React.Component {
    render() {
        return(
            <AppLayout>
                <h1>Mecho is a God</h1>
                <p>
                    Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet
                </p>
                <h1>Why should you care?</h1>
                <p>
                    Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet
                </p>
            </AppLayout>
        ) 
    }
}

export default Home