import { Card, Icon, Button, Avatar} from 'antd';
import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import _ from 'lodash';
import './style.css'

const Giphy = (props) => {
    const { giphy } = props;

    const [isLoaded, afterLoad] = useState(false)

    useEffect(() => {
    }, [isLoaded])

    return (
        <Card
            bodyStyle={{ padding: 0 }}
        >
            <Button
                className={"listEntry"}
                style={{
                    width: '300px',
                    height: `${300 * giphy.images.downsized_medium.height / giphy.images.downsized_medium.width}px`
                }}
                role="option"
                aria-selected
            >
                <LazyLoadImage
                    className={"listEntryImage"}
                    afterLoad={() => afterLoad(true)}
                    width={giphy.images.downsized_medium.width}
                    height={giphy.images.downsized_medium.height}
                    alt={giphy.slug}
                    src={giphy.images.downsized_medium.url} />
            </Button>
            {!_.isNil(giphy.user)  && 
                <div className="user">
                    <a href={giphy.user.profile_url}>
                        <Avatar src={giphy.user.avatar_url} />
                        {giphy.user.display_name}
                    </a>
                </div>}

        </Card>
    )
}

Giphy.propTypes = {
    giphy: PropTypes.object.isRequired,
};

export default Giphy