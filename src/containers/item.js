import { connect } from 'react-redux';
import Item from '../components/item';

const mapStateToProps = (state, ownProps) => ({
  item: (state.items || []).find(item => item === ownProps.match.params.id),
  items: state.items
});

export default connect(
  mapStateToProps
)(Item);