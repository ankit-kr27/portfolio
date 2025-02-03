import { assets } from "@/assets/assets"
import Image from "next/image"

const Footer = () => {
  return (
    <div>
      <div>
        <Image src={assets.logo} alt="" className="w-full" />
      </div>
    </div>
  )
}

export default Footer
