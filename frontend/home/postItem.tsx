import { Link } from "expo-router";
import { Image, Text, View } from "react-native";
import { getImageSource } from "../common/getImageSource";

type Props = {
  post: Post;
};

export function PostItem({ post }: Props) {
  return (
    <View>
      <Image
        source={getImageSource(post.image, 400)}
        style={{ height: 240, width: undefined }}
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
