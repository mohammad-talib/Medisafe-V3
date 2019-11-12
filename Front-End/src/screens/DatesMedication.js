import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  SafeAreaView,
  FlatList,
  TouchableOpacity
} from "react-native";

// import DatePicker from "react-native-datepicker";
// import TimePicker from "react-native-24h-timepicker";
import DateTimePicker from "react-native-modal-datetime-picker";
import axios from "axios";

export default class DatesMedication extends Component {
  state = {
    id: this.props.navigation.state.params,
    medname: null,
    datetime: null,
    isDateTimePickerVisible: false,
    medic: []
  };

  componentDidMount() {
    this.showData();
  }

  showData = () => {
    axios
      .post("http://192.168.1.97:2000/showdata", this.state)
      .then(({ data }) => {
        console.log("dataaaaaaaaaaaaaaaaaaaa :", data);
        this.setState({ medic: data.medication });
      })
      .catch(error => {
        console.log(error);
      });
    // console.log('medicccccccccccccccccccccccccccccccccc :', medic);
  };

  showDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: true });
  };

  hideDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: false });
  };
  //WARNING! To be deprecated in React v17. Use componentDidMount instead.


  handelSubmit = () => {
    //192.168.1.97 home
    //10.60.243.107 orange
    axios
      .post("http://192.168.1.97:2000/medication", this.state) //Orange ip
      //.post("http://192.168.1.9:2000/registration", this.state)//Home ip
      .then(({ data }) => {
        console.log(data);
        this.setState({
          medic: data.medication
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    console.log("Stateeeeeeeeeeeeeeeeeeeeeee :", this.state);
    return (
      <View style={styles.screen}>
        <Text>Dates Medication screen </Text>
        <Text>{this.state.id}</Text>
        <Text>{this.props.navigation.state.params}</Text>
        <View>
          <TextInput onChangeText={medname => this.setState({ medname })} />

          <Button title="Show DatePicker" onPress={this.showDateTimePicker} />
          <DateTimePicker
            isVisible={this.state.isDateTimePickerVisible}
            onConfirm={datetime => {
              this.setState({ datetime });
            }}
            onCancel={this.hideDateTimePicker}
            mode={"datetime"}
            is24Hour={true}
          />

          {/* <DatePicker
            style={{ width: 200 }}
            date={this.state.date}
            mode="date"
            placeholder="select date"
            format="YYYY-MM-DD"
            minDate="2019-11-12"
            maxDate="2022-01-01"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
              dateIcon: {
                position: "absolute",
                left: 0,
                top: 4,
                marginLeft: 0
              },
              dateInput: {
                marginLeft: 36
              }
              
            }}
            onDateChange={date => {
              this.setState({ date });
            }}
          /> */}
          {/* <View style={styles.container}>
            <TouchableOpacity
              onPress={() => this.TimePicker.open()}
              style={styles.button}
            >
              <Text style={styles.buttonText}>SET Time</Text>
            </TouchableOpacity>
            <Text style={styles.text}>{this.state.time}</Text>
            <TimePicker
              ref={ref => {
                this.TimePicker = ref;
              }}
              onCancel={() => this.onCancel()}
              onConfirm={(hour, minute) => this.onConfirm(hour, minute)}
            />
          </View> */}
        </View>
        <Button title="state" onPress={this.handelSubmit} />
        <View>
          <FlatList
            data={this.state.medic}
            renderItem={({ item }) => {
              console.log("item :", item);
              return (
                <Text>
                  {item.medname}
                  {item.datetime}
                </Text>
              );
            }}
            keyExtractor={item => item._id}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screen: {}
});
