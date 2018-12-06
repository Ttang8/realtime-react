import React, {Component} from 'react';
import merge from 'lodash/merge';

const ws = new WebSocket('ws://localhost:7770');

class Table extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount () {
    this.props.requestData();
  }

  selectAllData(data) {
    let arr = Object.keys(data).map((id) => (data[id]));
    return arr;
  }

  renderData() {
    let arr;

    if (this.props.data == {}) {
      arr = [<div></div>];
    } else {
      let data = this.selectAllData(this.props.data);
      data = data.sort(function(a, b) {
        return b.value - a.value;
      });
      arr = data.map((person,idx) => {
        return(
          <tr key={idx}>
            <td>{idx}</td>
            <td>{person.id}</td>
            <td>{person.value}</td>
            <td>{person.name}</td>
          </tr>
        );
      });
    }
    return arr;
  }

  render() {
    return (
      <div>
        <table align="center">
          <tbody>
            <tr>
              <th>Row</th>
              <th>ID</th>
              <th>Value</th>
              <th>Name</th>
            </tr>
            {this.renderData()}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
