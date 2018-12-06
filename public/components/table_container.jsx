import { connect } from 'react-redux';
import Table from './table';
import { requestData } from '../actions/data_actions';

const mapStateToProps = ({data}) => {
  return {
    data: data,
  };
};

const mapDispatchToProps = dispatch => ({
  requestData: () => dispatch(requestData()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Table);
