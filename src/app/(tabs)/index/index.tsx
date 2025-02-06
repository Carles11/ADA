import { useTranslation } from "react-i18next";
import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import { dictionaryStyles } from "@/styles/indexStyles";

function DictionaryTabScreen() {
  const { t: trnslt } = useTranslation("DictionaryPage");

  return (
    <View style={dictionaryStyles.container}>
      <Text style={dictionaryStyles.title}>{trnslt("title")}</Text>
      <View
        style={dictionaryStyles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <EditScreenInfo path="app/(tabs)/index.tsx" />
    </View>
  );
}

export default DictionaryTabScreen;
