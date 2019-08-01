import { connect } from 'react-redux';
import { addItem } from '../actions';
import Items from '../components/items';

const mapStateToProps = (state) => ({
  items: state.items
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  addItem: (value) => dispatch(addItem(value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Items);