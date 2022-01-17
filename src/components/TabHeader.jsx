// React imports.
import React from "react";
import { Helmet } from "react-helmet"


const TabHeader = (props) => {
    return(
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Arck Digital { props.subTitle }</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
        </div>
    );
}

export default TabHeader;
