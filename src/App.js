import React, { Component } from 'react';
import PhoneForm from './Components/PhoneForm';
import PhoneInfoList from './Components/PhoneInfoList';

class App extends Component {
  id = 2
  state = {
    information: [
      {
        id: 0,
        name: '김민준',
        phone: '010-0000-0000'
      },
      {
        id: 1,
        name: '홍길동',
        phone: '010-0000-0001'
      }
    ],
    keywords: '',
  }
  handleCreate = (data) => {
    const { information } = this.state;
    this.setState({
      information: information.concat({ id: this.id++, ...data })
    })
  }
  handleRemove = (id) => {
    const { information } = this.state;
    this.setState({
      information: information.filter(info => info.id !== id)
    })
  }
  handleUpdate = (id, data) => {
    const { information } = this.state;
    this.setState({
      information: information.map(
        info => info.id === id ? {...info, ...data} : info 
        )
    })
  }
  handleChange = (e) => {
    this.setState({
      keywords: e.target.value,
    });
  }
  render() {
    const { information, keywords } = this.state;
    const filteredList = information.filter(
      info => info.name.indexOf(keywords) !== -1
    );
    return (
      <div>
        <PhoneForm
          onCreate={this.handleCreate}>
        </PhoneForm>
        <div>
        <input 
            placeholder="검색 할 이름을 입력하세요.." 
            onChange={this.handleChange}
            value={keywords}
          />
        </div>
        <PhoneInfoList
          data={filteredList}
          onRemove={this.handleRemove}>
          onUpdate={this.handleUpdate}>
        </PhoneInfoList>
      </div>
    );
  }
}

export default App;
