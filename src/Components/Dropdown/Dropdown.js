import React from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import {Text} from 'react-native';

export default class DropDown extends React.Component {
  changeCountry(item) {
    this.props.onPress(item.value);
  }

  render() {
    return (
      <>
        <Text style={{fontWeight: 'bold', textAlign: 'center', padding: 10}}>
          كم عدد الأسئلة التي ترغب بها؟
        </Text>
        <DropDownPicker
          containerStyle={{height: 50}}
          items={[
            {label: '20', value: '20'},
            {label: '50', value: '50'},
            {label: '80', value: '80'},
            {label: '100', value: '100'},
          ]}
          defaultNull
          style={{paddingVertical: 20, flex: 1, borderColor: 'grey'}}
          placeholder="عدد الأسئلة"
          onChangeItem={item => this.changeCountry(item)}
        />
      </>
    );
  }
}
