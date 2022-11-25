import { Alert, StyleSheet, View } from "react-native";
import {
  getCurrentPositionAsync,
  useForegroundPermissions,
  PermissionStatus,
} from "expo-location";
import { Colors } from "../Constants/colors";
import OutlinedButton from "../UI/OutlinedButton";

function LocationPicker() {
  const [locationPermissionInformation, requestPermission] =
    useForegroundPermissions();

  async function verifyPermission() {
    if (
      locationPermissionInformation.status === PermissionStatus.UNDETERMINED
    ) {
      const permissionResponse = await requestPermission();

      return permissionResponse.granted;
    }

    if (locationPermissionInformation.status === PermissionStatus.DENIED) {
      Alert.alert(
        "Insufficient Permissions",
        "You need to grant location permissions to use this app."
      );
      return false;
    }
  }

  async function getLocationHandler() {
    const hasPermissions = await verifyPermission();
    if (!hasPermissions) return;
    const location = await getCurrentPositionAsync();
    console.log(location);
  }

  function pickOnMapHandler() {}

  return (
    <View>
      <View style={styles.mapPreview}></View>
      <View style={styles.actions}>
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
          }}
          placeholder={"Search"}
          placeholderTextColor={"#666"}
        />
        <OutlinedButton icons="location" onPress={getLocationHandler}>
          Locate User
        </OutlinedButton>
        <OutlinedButton icons="map" onPress={pickOnMapHandler}>
          Pick on Map
        </OutlinedButton>
      </View>
    </View>
  );
}

export default LocationPicker;

const styles = StyleSheet.create({
  mapPreview: {
    width: "100%",
    height: 200,
    marginVertical: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary100,
    borderRadius: 4,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});
