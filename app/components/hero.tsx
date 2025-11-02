import middle from "./middle.png"; // ✅ Correct path and name

export default function AboutSection() {
    return (
        <section className="flex flex-col items-center px-6 md:px-20 py-16 gap-16">
            {/* Top Section - About heading + description + underline */}
            <div className="text-center max-w-4xl">
                <h2 className="text-3xl md:text-4xl text-gray-300 font-bold mb-4">
                    About Kahafil Ora

                </h2>
                <p className="text-black leading-relaxed underline text-lg mt-4">
                    Kahafil Ora is an experienced IT Consultant known for delivering smart, tech-driven solutions to businesses. With a strong grasp of IT infrastructure and digital strategy, he helps organizations improve efficiency and achieve their goals through innovative technology.
                </p>
            </div>

            {/* Middle Section - 3 Columns */}
            <div className="flex flex-col md:flex-row items-start justify-between w-full gap-10 md:gap-16">
                {/* Left Column */}
                <div className="flex-1 flex flex-col gap-6">
                    <h3 className="text-xl font-semibold">Roles & Expertise</h3>
                    <ul className="text-gray-700 space-y-1">
                        <li>Mentor</li>
                        <li>IT Strategist</li>
                        <li>Tech Entrepreneur</li>
                        <li>Cybersecurity Advocate</li>
                    </ul>

                    <div className="bg-gray-100 p-6 rounded-xl shadow-md mt-4">
                        <h3 className="font-semibold text-lg mb-2">Contact</h3>
                        <p>Kahafil Ora</p>
                        <p>Dhaka | Bangladesh</p>
                        <p>+880 1622-992222</p>
                        <p>kahafil@goinnovior.com</p>
                    </div>
                </div>

                {/* Middle Column - Image */}
                <div className="flex justify-center flex-1">
                    <img
                        src={middle}
                        alt="Kahafil Ora"
                        className="w-64 h-80 md:w-72 md:h-96 object-cover rounded-full border-2 border-black filter grayscale transition-transform duration-500 ease-in-out hover:scale-105 hover:filter hover:grayscale-0 hover:saturate-150"
                    />
                </div>

                {/* Right Column */}
               <div className="flex-1 flex flex-col gap-10">
    <div className=" p-6  flex flex-col items-stretch space-y-8">

        {/* Years of Experience (Right aligned number) */}
        <div className="flex flex-col items-start">
            <p className="text-gray-500 text-3xl font-medium">Years of Experience</p>
            <p className="text-6xl font-extrabold text-black mt-2 text-center w-full">22+</p>
        </div>

        {/* Satisfaction Clients (Center aligned number) */}
        <div className="flex flex-col items-start">
            <p className="text-gray-500 text-3xl font-medium">Satisfaction Clients</p>
            <p className="text-6xl font-extrabold text-black mt-2 text-center w-full">100%</p>
        </div>

        {/* Clients Worldwide (Right aligned number) */}
        <div className="flex flex-col items-start">
            <p className="text-gray-500 text-3xl font-medium">Clients Worldwide</p>
            <p className="text-6xl font-extrabold text-black mt-2 text-center w-full">70+</p>
        </div>

    </div>
</div>



            </div>
        </section>
    );
}

