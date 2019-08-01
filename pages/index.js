import ListGiphy from '../components/Giphy/components/ListGiphy'
import { Layout } from 'antd';
const { Header, Content, Footer } = Layout;
import { connect } from 'react-redux'
import { loadGiphies } from '../ducks/giphy/actions'
import _ from "lodash";

class Index extends React.Component {
  static async getInitialProps(props) {
    const { store, isServer } = props.ctx

    store.dispatch(loadGiphies())

    return { isServer }
  }

  componentDidMount() {
    const { giphyData } = this.props
    console.log('giphyData', giphyData);
  }

  renderGiphy() {
    const { giphyData } = this.props;
    return _.isNil(giphyData.giphies.data) ?
      <div></div> :
      <ListGiphy data={giphyData.giphies.data} />
  }
  render() {
    return (
      <Layout className="layout">
        <Header>
          <h1 className="text-white" style={{ color: '#fff' }}>Giphy</h1>
        </Header>
        <Content style={{ padding: '50px' }}>
          {this.renderGiphy()}
        </Content>
        <Footer style={{ textAlign: 'center' }}>Code Testing in Message Media</Footer>
      </Layout>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    giphyData: state.giphyData
  }
}
export default connect(mapStateToProps)(Index)