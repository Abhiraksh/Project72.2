import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import AppHeader from "../components/AppHeader";


export default class StoryReading extends React.Component {
  render() {
    return (
      <View >
       <AppHeader/>
       <Text style={styles.text}>Title: The Smart Crow</Text>
       <Text style={styles.text2}>Once there was a crow. It was a hot day, and the crow was extremely thirsty. He kept flying around, looking for some water. After a very long time, he finally found a jar of water. With great happiness, he flew to the jar to drink the water. 

</Text>
<Text style={styles.text2}>
But when he tried to put his head into the jar, he realised it was too narrow. He tried to tilt the put, but it was too heavy. Sad and frustrated, he kept thinking. Finally, he saw pebbles on the ground. He had an idea.</Text>
<Text style={styles.text2}>One by one, he put the pebbles into the jar. The water level slowly rose, and the crow could drink the water.</Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  text:{
    marginTop: 15,
    backgroundColor: "green",
    height: 40,
    color: "#fff",
    fontWeight:"bold",
    textAlign: "center",
    fontSize: 22,
  },
  
  text2:{
    marginTop: 10,
    fontSize: 17  
  },

});
