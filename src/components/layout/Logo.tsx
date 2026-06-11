import Image from "next/image";
import Link from "next/link";
import { images } from "@/config/images";

export function Logo() {
  return (
    <Link href="/" className="logo">
      <Image
        src={images.logo.default}
        alt="IKIGAI Logo"
        width={299}
        height={108}
        priority
      />
    </Link>
  );
}
