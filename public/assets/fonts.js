import { Mulish, Unbounded} from 'next/font/google'

export const unbounded = Unbounded({
    weight: ["400"],
    subsets: ["latin"],
})

export const mulish = Mulish({
    weight: ["400", "500", "600", "700", "800", "900", "1000"],
    subsets: ["latin"],
})