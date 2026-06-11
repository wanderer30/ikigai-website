import Image from "next/image";
import Link from "next/link";
import { images } from "@/config/images";

export function Logo() {
  const { src, width, height } = images.logo.default;

  return (
    <Link href="/" className="logo">
      <Image
        src={src}
        alt="IKIGAI Logo"
        width={width}
        height={height}
        priority
      />
    </Link>
  );
}
