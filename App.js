import React, { Component } from "react";
import { 
  View,
  Text,
  StyleSheet,SafeAreaView,ScrollView,StatusBar,Image,ImageBackground
} from "react-native";

import Caraousel from 'react-native-snap-carousel'

import face from './assets/face.jpg'

import yellow from "./assets/yellow.jpg";
import blue from "./assets/blue.jpg";
import red from "./assets/red.jpg";
import green from "./assets/green.jpg";

import james from "./assets/james.jpg";
import cathy from "./assets/cathy.jpg";
import paul from "./assets/paul.jpg";

class App extends Component {
  state={
    categories:[
      {
      id:1,
      name:"cari cature"
    },
    {
      id:2,
      name:"sketch"
    },
    {
      id:3,
      name:"painting"
    },
    {
      id:4,
      name:"color"
    },
  ],
  cards: [
    {
      image: yellow,
      id: 1,
      title: "walking like a king down the hallways"
    },
    {
      image: blue,
      id: 2,
      title: "blue oil paint"
    },
    {
      image: green,
      id: 3,
      title: "green artist paint"
    },
    {
      image: red,
      id: 4,
      title: "red blood"
    }
  ],

  artists: [
    {
      image: james,
      id: 1,
      skills: "Blend, Sketch, PS",
      name: "JAMES"
    },
    {
      image: cathy,
      id: 2,
      skills: "Brush",
      name: "CATHY"
    },
    {
      image: paul,
      id: 3,
      skills: "Illustrator artist",
      name: "PAUL"
    }
  ]
  }

  _renderItem({item,index}){
    return(
      <View style={{width:300,height:415}}>
          <ImageBackground source={item.image} style={styles.image} imageStyle={{borderRadius:15}} resizeMode="cover">

          </ImageBackground>
      </View>
    )
  }

  render() {
    
    return (
      <SafeAreaView style={{flex:1,backgroundColor:"#F2F2F7"}}>
        <ScrollView style={{paddingTop:StatusBar.currentHeight}}>

          <View style={{paddingHorizontal:24}}>

            <View style={{paddingTop:12,flexDirection:"row",justifyContent:'space-between'}}>
              <View>
                <Text style={{fontSize:25,fontWeight:'bold'}}>ARTSY</Text>
              </View>
              <View style={{height:37,width:37,borderRadius:37/2,borderColor:"#ddd"}}>
                <Image source={face} style={{height:37,width:37,borderRadius:37/2,borderColor:"#ddd"}} resizeMode="cover"/>
              </View>
            </View>

            <View>
              <ScrollView showsHorizontalScrollIndicator={false} horizontal>
                <View style={{paddingTop:11,flexDirection:"row"}}>
                    {
                      this.state.categories.map(category=>(
                        <View key={category.id} style={styles.categoryBox}>
                            <Text>{category.name}</Text>
                        </View>
                      ))
                    }
                </View>
              </ScrollView>
            </View>

            <View style={{paddingTop:35}}>
                  <View>
                      <Caraousel
                        ref={c=>{this._carousel=c}}
                        renderItem={this._renderItem}
                        sliderWidth={350}
                        itemWidth={350}
                        layout={"stack"}
                        data={this.state.cards}
                      />
                  </View>
            </View>

            <View style={{ paddingTop: 30 }}>
            <View
                style={{
                  backgroundColor: "white",
                  height: 250,
                  borderRadius: 15
                }}
              >
                 {this.state.artists.map(artist =>  (
                   
                   <View
                   key={artist.id}
                   style={{
                     flexDirection: "row",
                     justifyContent: "space-between",
                     paddingLeft: 30,
                     paddingTop: 18,
                     alignItems: "center"
                   }}
                 >

                   <View style={{flexDirection:'row'}}>
                   <Image
                        source={artist.image}
                        style={{
                          height: 50,
                          width: 50,
                          backgroundColor: "#ddd",
                          borderRadius: 50 / 2
                        }}
                        resizeMode="cover"
                      />
                      <View
                        style={{
                          flexDirection: "column",
                          paddingLeft: 13,
                          paddingTop: 7
                        }}
                      >
                        <Text style={{ fontSize: 17, fontWeight: "500" }}>
                          {artist.name}
                        </Text>
                        <Text style={{ fontSize: 14, color: "#A7A7A7" }}>
                          {artist.skills}
                        </Text>
                      </View>
                     </View>

                     <View style={{ paddingRight: 30 }}>
                      <View
                        style={{
                          height: 25,
                          width: 61,
                          borderRadius: 10,
                          backgroundColor: "#F2F2F7",
                          alignItems: "center",
                          justifyContent: "center"
                        }}
                      >
                        <Text
                          style={{
                            fontSize: 17,
                            fontWeight: "500",
                            color: "#007AFF"
                          }}
                        >
                          Check
                        </Text>
                      </View>
                    </View>

                   </View>
                 ))}
                </View>
            </View>


          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  categoryBox:{
    height:28,
    width:89,
    borderWidth:0.7,
    borderColor:"#2c2c2e",
    borderRadius:10,
    alignItems:'center',
    justifyContent:'center',
    marginRight:10

    
  },
  image:{
    width:292,
    height:411,
    borderRadius:15
  }
});