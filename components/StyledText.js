import { Text } from "react-native";

const StyledText = ({ ...props }) => {
  return (
    <Text
      {...props}
      style={{
        color: props.color ?? "#ffffff",
        fontSize: props.large
          ? 20
          : props.title
          ? 32
          : props.medium
          ? 16
          : props.small
          ? 13
          : 14,
        fontWeight: props.weight ? props.weight : "400",
        textAlign: props.textAlign ? props.textAlign : "left",
        paddingRight: 16,
      }}
    >
      {props.children}
    </Text>
  );
};

export default StyledText;
