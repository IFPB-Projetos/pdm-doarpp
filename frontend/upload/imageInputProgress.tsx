import { Text } from "react-native";

type Props = {
  progress: number;
};

export function ImageInputProgress({ progress }: Props) {
  function getPercentage() {
    let percentage = 100 * progress;
    if (progress % 1 === 0) return "" + percentage;
    return percentage.toFixed(2);
  }

  if(!progress) return null

  return (
    <Text
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        fontSize: 16,
        color: "white",
        padding: 8,
        backgroundColor: "#0008",
      }}
    >
      {getPercentage()}%
    </Text>
  );
}
