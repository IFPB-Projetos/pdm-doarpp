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

  if (!progress) return null;

  return (
    <Text
      style={{
        left: 0,
        bottom: 0,
        padding: 8,
        fontSize: 16,
        color: "white",
        position: "absolute",
        backgroundColor: "#0008",
      }}
    >
      {getPercentage()}%
    </Text>
  );
}
