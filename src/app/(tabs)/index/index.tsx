import React from "react";
import { useTranslation } from "react-i18next";
import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import { dictionaryStyles } from "@/styles/indexStyles";
import { I18nextProvider } from "react-i18next";
import i18n from "@/i18n";

function TabOneScreen() {
  const { t: trnslt } = useTranslation("DictionaryPage");

  return (
    <I18nextProvider i18n={i18n}>
      <View style={dictionaryStyles.container}>
        <Text style={dictionaryStyles.title}>{trnslt("title")}</Text>
        <View
          style={dictionaryStyles.separator}
          lightColor="#eee"
          darkColor="rgba(255,255,255,0.1)"
        />
        <EditScreenInfo path="app/(tabs)/index.tsx" />
      </View>
    </I18nextProvider>
  );
}

export default TabOneScreen;
