import { j as json } from "../../../../chunks/index.js";
import sharp from "sharp";
const GET = async ({ url, fetch }) => {
  const imageURL = url.searchParams.get("image");
  if (imageURL) {
    const image = await fetch(imageURL).then((res) => res.arrayBuffer());
    const stats = await sharp(Buffer.from(image)).stats();
    const [r, g, b] = stats.channels.map((c) => c.mean);
    return json({ color: `rgba(${r},${g},${b})` });
  }
  return json({ color: null });
};
export {
  GET
};
