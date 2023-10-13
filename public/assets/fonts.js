import { Young_Serif, Poppins } from 'next/font/google'

export const young_serif = Young_Serif({
    weight: ["400"],
    subsets: ["latin"],
})

export const poppins = Poppins({
    weight: ["400", "500", "600", "700", "800", "900"],
    subsets: ["latin"],
})