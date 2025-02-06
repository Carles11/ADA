import React from "react";
import { useTranslation } from "react-i18next";
import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import { profileStyles } from "@/styles/profileStyles";

function TabTwoScreen() {
  const { t: trnslt } = useTranslation("ProfilePage");
  console.log(trnslt("title"));
  return (
    <View style={profileStyles.container}>
      <Text style={profileStyles.title}>{trnslt("title")}</Text>
      <View
        style={profileStyles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <EditScreenInfo path="app/(tabs)/profile.tsx" />
    </View>
  );
}
export default TabTwoScreen;
