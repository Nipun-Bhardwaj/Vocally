import { useState } from "react";
import {
  Alert,
  StyleSheet,
  Image,
  View,
  TextInput,
  Text,
  Button,
  Pressable,
  Switch,
} from "react-native";
import MapView, { Marker, Callout } from "react-native-maps";
import OutlinedButton from "../UI/OutlinedButton";

function Map() {
  const [selectLocation, setSelectLocation] = useState();

  const region = {
    latitude: 28.7041,
    longitude: 77.1025,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  function selectLocationHandler(event) {
    const lat = event.nativeEvent.coordinate.latitude;
    const lng = event.nativeEvent.coordinate.longitude;

    setSelectLocation({ lat: lat, lng: lng });
  }

  function savePickedLocationHandler() {
    if (!selectLocation) {
      Alert.alert("No location picked!", "You have to pick a location");
      return;
    }
  }

  let mp = [
    {
      elementType: "geometry",
      stylers: [
        {
          color: "#ebe3cd",
        },
      ],
    },
    {
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#523735",
        },
      ],
    },
    {
      elementType: "labels.text.stroke",
      stylers: [
        {
          color: "#f5f1e6",
        },
      ],
    },
    {
      featureType: "administrative",
      elementType: "geometry.stroke",
      stylers: [
        {
          color: "#c9b2a6",
        },
      ],
    },
    {
      featureType: "administrative.land_parcel",
      elementType: "geometry.stroke",
      stylers: [
        {
          color: "#dcd2be",
        },
      ],
    },
    {
      featureType: "administrative.land_parcel",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#ae9e90",
        },
      ],
    },
    {
      featureType: "landscape.natural",
      elementType: "geometry",
      stylers: [
        {
          color: "#dfd2ae",
        },
      ],
    },
    {
      featureType: "poi",
      elementType: "geometry",
      stylers: [
        {
          color: "#dfd2ae",
        },
      ],
    },
    {
      featureType: "poi",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#93817c",
        },
      ],
    },
    {
      featureType: "poi.park",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#a5b076",
        },
      ],
    },
    {
      featureType: "poi.park",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#447530",
        },
      ],
    },
    {
      featureType: "road",
      elementType: "geometry",
      stylers: [
        {
          color: "#f5f1e6",
        },
      ],
    },
    {
      featureType: "road.arterial",
      elementType: "geometry",
      stylers: [
        {
          color: "#fdfcf8",
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "geometry",
      stylers: [
        {
          color: "#f8c967",
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "geometry.stroke",
      stylers: [
        {
          color: "#e9bc62",
        },
      ],
    },
    {
      featureType: "road.highway.controlled_access",
      elementType: "geometry",
      stylers: [
        {
          color: "#e98d58",
        },
      ],
    },
    {
      featureType: "road.highway.controlled_access",
      elementType: "geometry.stroke",
      stylers: [
        {
          color: "#db8555",
        },
      ],
    },
    {
      featureType: "road.local",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#806b63",
        },
      ],
    },
    {
      featureType: "transit.line",
      elementType: "geometry",
      stylers: [
        {
          color: "#dfd2ae",
        },
      ],
    },
    {
      featureType: "transit.line",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#8f7d77",
        },
      ],
    },
    {
      featureType: "transit.line",
      elementType: "labels.text.stroke",
      stylers: [
        {
          color: "#ebe3cd",
        },
      ],
    },
    {
      featureType: "transit.station",
      elementType: "geometry",
      stylers: [
        {
          color: "#dfd2ae",
        },
      ],
    },
    {
      featureType: "water",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#b9d3c2",
        },
      ],
    },
    {
      featureType: "water",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#92998d",
        },
      ],
    },
  ];

  let mpStyle = [
    {
      elementType: "geometry",
      stylers: [
        {
          color: "#242f3e",
        },
      ],
    },
    {
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#746855",
        },
      ],
    },
    {
      elementType: "labels.text.stroke",
      stylers: [
        {
          color: "#242f3e",
        },
      ],
    },
    {
      featureType: "administrative.locality",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#d59563",
        },
      ],
    },
    {
      featureType: "poi",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#d59563",
        },
      ],
    },
    {
      featureType: "poi.park",
      elementType: "geometry",
      stylers: [
        {
          color: "#263c3f",
        },
      ],
    },
    {
      featureType: "poi.park",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#6b9a76",
        },
      ],
    },
    {
      featureType: "road",
      elementType: "geometry",
      stylers: [
        {
          color: "#38414e",
        },
      ],
    },
    {
      featureType: "road",
      elementType: "geometry.stroke",
      stylers: [
        {
          color: "#212a37",
        },
      ],
    },
    {
      featureType: "road",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#9ca5b3",
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "geometry",
      stylers: [
        {
          color: "#746855",
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "geometry.stroke",
      stylers: [
        {
          color: "#1f2835",
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#f3d19c",
        },
      ],
    },
    {
      featureType: "transit",
      elementType: "geometry",
      stylers: [
        {
          color: "#2f3948",
        },
      ],
    },
    {
      featureType: "transit.station",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#d59563",
        },
      ],
    },
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [
        {
          color: "#17263c",
        },
      ],
    },
    {
      featureType: "water",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#515c6d",
        },
      ],
    },
    {
      featureType: "water",
      elementType: "labels.text.stroke",
      stylers: [
        {
          color: "#17263c",
        },
      ],
    },
  ];
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  let mapStyle = isEnabled ? mp : mpStyle;
  return (
    <View style={{ marginTop: 50, flex: 1 }}>
      <View
        style={[
          { flexDirection: "row" },
          !isEnabled && { backgroundColor: "black" },
        ]}
      >
        <TextInput
          style={{
            borderRadius: 10,
            margin: 10,
            color: "#000",
            borderColor: "#666",
            backgroundColor: "#FFF",
            borderWidth: 1,
            height: 45,
            paddingHorizontal: 10,
            fontSize: 18,
            flex: 1,
          }}
          placeholder={"Search"}
          placeholderTextColor={"#666"}
        />
        <View style={{ justifyContent: "center" }}>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
      </View>
      <MapView
        style={styles.map}
        initialRegion={region}
        customMapStyle={mapStyle}
        onPress={selectLocationHandler}
      >
        {selectLocation && (
          <Marker
            title="Picked Location"
            coordinate={{
              latitude: selectLocation.lat,
              longitude: selectLocation.lng,
            }}
          />
        )}
        <Marker
          title="Your Kitchen"
          coordinate={{
            latitude: 28.7048,
            longitude: 77.1038,
          }}
        >
          <Image
            source={require("../assets/ad.jpeg")}
            style={{ height: 35, width: 35, borderRadius: 17 }}
          />
        </Marker>
        <Marker
          title="Dal Dhaba"
          coordinate={{
            latitude: 28.6946,
            longitude: 77.0819,
          }}
        >
          <Image
            source={require("../assets/dl.jpeg")}
            style={{ height: 35, width: 35, borderRadius: 17 }}
          />
        </Marker>
        <Marker
          title="Chinese Point"
          coordinate={{
            latitude: 28.6646,
            longitude: 77.0879,
          }}
        >
          <Image
            source={require("../assets/dc.jpeg")}
            style={{ height: 35, width: 35, borderRadius: 17 }}
          />
        </Marker>
        <Marker
          title="National Food Center"
          coordinate={{
            latitude: 28.6781,
            longitude: 77.1211,
          }}
        >
          <Image
            source={require("../assets/download.jpeg")}
            style={{ height: 35, width: 35, borderRadius: 17 }}
          />
        </Marker>
        <Marker
          title="Fav Place"
          coordinate={{
            latitude: 28.7213,
            longitude: 77.097,
          }}
        >
          <Image
            source={require("../assets/dda.jpeg")}
            style={{ height: 35, width: 35, borderRadius: 17 }}
          />
        </Marker>
      </MapView>
    </View>
  );
}

export default Map;

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
  calloutView: {
    flexDirection: "row",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderRadius: 10,
    width: "40%",
    marginLeft: "30%",
    marginRight: "30%",
    marginTop: 20,
  },
  calloutSearch: {
    borderColor: "transparent",
    marginleft: 10,
    width: "90%",
    marginRight: 10,
    height: 40,
    borderWidth: 0.0,
  },
});
