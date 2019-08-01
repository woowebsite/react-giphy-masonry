import { List, Card, Icon, Button } from 'antd';
import PropTypes from 'prop-types';
import Giphy from "../Giphy";
import Masonry from 'react-masonry-component';


const masonryOptions = { 
  transitionDuration: 0
};
const imagesLoadedOptions = { background: '.my-bg-image-el' }

function ListGiphy(props) {
  const childElements = props.data.map(function (element) {
    const img = element.images.downsized
    return (
      <div key={element.id} className="listItem">
        <Giphy giphy={element}>Card content</Giphy>
      </div>
    );
  });

  return <Masonry role="listbox"
    elementType={'div'} // default 'div'
    options={masonryOptions} // default {}
    disableImagesLoaded={false} // default false
    updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
    imagesLoadedOptions={imagesLoadedOptions} // default {}
  >
    {childElements}
  </Masonry>
}

ListGiphy.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  renderEntry: PropTypes.func,
  onEntrySelect: PropTypes.func,
  loadNextPage: PropTypes.func.isRequired,
};

export default ListGiphy