import Image from "next/image";

function StoryCard ({ name, src, profile}) {
    return(
        <div className="relative h-14 w-14 md:h-20 md:w-20 lg:h-56 lg:w-32 cursor-pointer overflow-x p-3 transition-duration-200 transform ease-in hover:scale-105 hover:animate-pulse">
            <Image
            className="absolute opacity-0 lg:opacity-100
            rounded-full z-50 top-4"
            src={profile}
            width={40}
            height={40}
            style={{
                objectFit: 'cover',
              }}
            fixed ="true"
            placeholder={name}
            />
            <Image
            className="object-cover filter brightness-75 rounded-full lg:rounded-3xl"
            src={src}
            fill
            />
            <p className="hidden lg:block absolute text-white bottom-4">{name}</p>
        </div>
    )
}

export default StoryCard;