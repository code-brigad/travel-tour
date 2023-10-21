export const TextTitle = ({ className, children }) => {
    return (
        <h1 className={`${className} uppercase md:text-[36px] text-[25px] md:leading-[50px] leading-[35px] font-black text-center`}>{children}</h1>
    )
}

export const TextHeading = ({ className, children }) => {
    return (
        <p className={`${className} sm:text-[26px] text-[20px] font-extrabold`}>{children}</p>
    )
}

export const TextSubtitle = ({ className, children }) => {
    return (
        <h3 className={`${className} text-main font-regular text-center text-[16px]`}>{children}</h3>
    )
}