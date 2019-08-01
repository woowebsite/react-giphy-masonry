import { Card, Icon, Button } from 'antd';
import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import './style.css'

const Giphy = (props) => {
    console.log('giphy', giphy);
    const { giphy } = props;

    const [isLoaded, afterLoad] = useState(false)

    useEffect(() => {
        console.log('isLoaded', isLoaded);
    }, [isLoaded])

    return (
        <Card
            bodyStyle={{ padding: 0 }}
            actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
        >
            <Button
                className={"listEntry"}
                style={{
                    width: '300px',
                    height: `${300 * giphy.images.downsized_medium.height / giphy.images.downsized_medium.width}px`
                }}
                onClick={() => onSelect(giphy)}
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
        </Card>
    )
}

Giphy.propTypes = {
    giphy: PropTypes.object.isRequired,
};

export default Giphy