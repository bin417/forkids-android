import React, { useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

//import styles
import { FontFamily, FontSize } from "../utils/globalstyles";
import palette from "../utils/color";

/**
 *
 * @param {} param0
 * @returns options : 옵션 리스트
 * onPress : 옵션을 눌렀을 시의 수행 작업
 */
const QuickReplyBubble = ({ key, option, onOptionPress }) => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <Pressable
      style={styles.quickReplyPressable}
      onPress={() => {
        onOptionPress(option.text, key);
        setIsVisible(false);
      }}
    >
      <Text style={styles.quickReplyText}>{option.text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  quickReplyPressable: {
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginVertical: 4,
    marginHorizontal: 8,

    //basic form
    backgroundColor: palette.white,
    borderRadius: 15,

    alignItems: "flex-start",

    //shadow
    shadowColor: palette.black,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 5,
  },
  quickReplyText: {
    fontSize: 15,
    fontFamily: "Poppins_regular",
    color: palette.black,
  },
});

export default QuickReplyBubble;
