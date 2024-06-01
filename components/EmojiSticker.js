import { View, Image } from 'react-native';

export default function EmojiSticker({ imageSize, stickerSource }) {
  return (
    <View style={{ top: -50, right: -260 }}>
      <Image
        source={stickerSource}
        resizeMode="contain"
        style={{ width: imageSize, height: imageSize }}
      />
    </View>
  );
}
