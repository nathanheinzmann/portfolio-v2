import Link from "next/link";

import { CodeBracketIcon } from "@heroicons/react/24/solid";

const Logo = () => (
  <Link
    href={"/"}
    className="cursor-pointer flex gap-2 items-center text-2xl md:text-xl text-white font-semibold hover:text-primary-500 transition-colors"
  >
    <span>NH</span>
    <CodeBracketIcon className="h-6 w-6" />
  </Link>
)

export default Logo;