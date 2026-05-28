import Link from "next/link";

export default function Hero() {
    return (

        <div className="relative">
            <div className="">
                <img className="w-full h-176 brightness-50" src="https://www.nasa.gov/wp-content/uploads/2026/03/2026-01-22-01.jpg" alt="" />
                <div className="pl-5">
                    <div>
                        <h1 className="text-7xl w-160 text-white font-mono font-bold absolute top-1/6 ">Houston We Have a Podcast</h1>
                        <h1 className="text-gray-100 absolute top-1/5 pt-35 w-180">In the latest episode of "Housten We Haccve a Podcast," the CHAPEA Mission 2 crew shares tge latest updates from inside their yearlong simulatesd Mars mission at NASA's Johnson Space center, including updates on daily life, holiday celebrations, and habibat routines.</h1>
                    </div>
                    <div className="pt-20">
                       <Link className="text-white text-2xl font-bold font-mono bg-red-500 p-3 w-35 absolute top-1/2 text-center hover:bg-red-700 rounded-lg" href={'/listen'}>Listen</Link>
                    </div>
                    <div>
                        <h1 className="text-gray-300 brightness-25 absolute top-1/2 pt-25">____________________________________________________________________________________________</h1>
                    </div>
                    <div className="flex absolute top-1/2 pt-40 gap-20 ">
                        <h1 className="font-serif text-gray-300">NASA'S CURIOUS UNIVERSE</h1>
                        <h1 className="font-serif text-gray-300">SMALL STEPS, GIANT LEAPS</h1>
                        <h1 className="font-serif text-gray-300">SOUNDS FROM BEYOND</h1>
                    </div>
                    <div className="flex gap-10 absolute top-1/2 pt-50">
                        <div className="flex gap-2">
                            <h1 className="font-bold text-white text-xl font-mono">Behind the scenes of Artemis II</h1>
                            <h1 className="text-white text-xl font-bold font-mono bg-red-500 w-7 text-center rounded-4xl hover:bg-red-700 ">?</h1>
                        </div>
                        <div className="flex gap-2">
                            <h1 className="font-bold text-white text-xl font-mono">Views from a NASA Pilot</h1>
                            <h1 className="text-white text-xl font-bold font-mono bg-red-500 w-7 text-center rounded-4xl hover:bg-red-700 ">?</h1>
                        </div>
                        <div className="flex gap-2">
                            <h1 className="font-bold text-white text-xl font-mono">What Does Mars Sound Like?</h1>
                            <h1 className="text-white text-xl font-bold font-mono bg-red-500 w-7 text-center rounded-4xl hover:bg-red-700 ">?</h1></div>
                    </div>
                </div>
            </div>
        </div>

    )
}