import { Link } from "expo-router";
import { Image, Text, View } from "react-native";

type Props = {
  post: Post;
};

export function PostItem({ post }: Props) {
  return (
    <View>
      <Image
        style={{ width: "100%", aspectRatio: 3 / 2 }}
        source={{
          uri: `https://picsum.photos/seed/${post.id}/1080/720`,
        }}
      />
      <Link href={`/posts/${post.id}`} style={{}}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "500",
          }}
        >
          {post.title}
        </Text>
      </Link>
    </View>
  );
}
