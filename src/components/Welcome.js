import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  Button,
  TouchableOpacity,
  Text,
} from "react-native";
import Animated from 'react-native-reanimated';


class LogoMove extends Component {
    state = {
        position: new Animated.ValueXY(0),
    };

    onLoad = () => {
        Animated.timing(this.state.position.y, {
          toValue: 1,
          duration: 700,
          useNativeDriver: true,
        }).start();
    };

      
    render() {
        return (
            <Animated.Image>

            </Animated.Image>
          ); 
    }
}

class ButtonMove extends Component {

}

class ImageLoader extends Component {
  state = {
    opacity: new Animated.Value(0),
  };

  onLoad = () => {
    Animated.timing(this.state.opacity, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true,
    }).start();
  };

  render() {
    return (
      <Animated.Image
        onLoad={this.onLoad}
        {...this.props}
        style={[
          {
            opacity: this.state.opacity,
            transform: [
              {
                scale: this.state.opacity.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0.85, 1],
                }),
              },
            ],
          },
          this.props.style,
        ]}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 150,
    height: 150,
  },
  logoText: {
    marginTop: -100,
    width: 150,
    height: 150,
  },
  backgroundImage: {
    position: "absolute",
  },
  button: {
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: "#03cea4",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff",
    width: 120,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 20,
  },
  buttonMaster: {
    marginTop: 100,
  },
});

export default function Welcome() {
  return (
    <View style={styles.container}>
      <ImageLoader
        style={styles.backgroundImage}
        source={require("./background.png")}
      />
      <Image style={styles.logo} source={require("./logo-icon.png")} />
      <Image style={styles.logoText} source={require("./logo-text.png")} />
      <View style={styles.buttonMaster}>
        <TouchableOpacity style={styles.button} title="Sign In">
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} title="Sign In">
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
