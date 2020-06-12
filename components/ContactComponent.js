import React, { Component } from "react";
import { Text } from "react-native";
import { Card } from "react-native-elements";

class Contact extends Component {
  static navigationOptions = {
    title: "Contact",
  };

  render() {
    return (
      <Card title="Contact Information">
        <Text style={{ margin: 20 }}>121, Clear Water Bay Road</Text>
        <Text style={{ margin: 20 }}>Clear Water Bay, Kowloon</Text>
        <Text style={{ margin: 20 }}>HONG KONG</Text>
        <Text style={{ margin: 20 }}>Tel: +852 1234 5678</Text>
        <Text style={{ margin: 20 }}>Fax: +852 8765 4321</Text>
        <Text style={{ margin: 20 }}>Email:confusion@food.net</Text>
      </Card>
    );
  }
}

export default Contact;
