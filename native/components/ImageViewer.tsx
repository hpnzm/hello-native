import { Image, ImageSourcePropType, StyleSheet } from "react-native";

export function ImageViewer({
  placeholderImageSrc,
  selectedImage,
}: {
  placeholderImageSrc: ImageSourcePropType;
  selectedImage?: string | null;
}) {
  const imageSrc = selectedImage ? { uri: selectedImage } : placeholderImageSrc;
  return <Image source={imageSrc} style={styles.image} />;
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
