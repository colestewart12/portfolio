import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
    return (
        <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
            <div className="relative bg-white pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-3xl sm:rounded-lg sm:px-10">
                <div className="mx-auto max-w-md">
                    <div className="space-y-6 py-8 text-base leading-7 text-gray-600">
                        <p className="text-2xl font-semibold text-center">Cole Stewart</p>
                        <p className="text-center">Software Engineer</p>
                        <div className="flex justify-center">
                            <Image
                                src="/headshot.jpg"
                                alt="Headshot photo"
                                width={256}
                                height={256}
                                className="dark:invert"
                            />
                        </div>
                        <div className="mt-4 space-y-4">
                            <h2 className="text-xl font-semibold">About Me</h2>
                            <p>
                                I am a passionate software engineer with experience in full-stack development,
                                specializing in .NET, JavaScript, and mobile app development. I hold a Bachelor of Arts
                                in Computer Science with a Minor in Data Science from Pacific Lutheran University, where I
                                maintained a 3.86 GPA and was a varsity soccer athlete.
                            </p>
                            <p>
                                At IntelliTect, I worked on Coalesce-based applications, developing solutions for HR,
                                timekeeping, client management, and other company systems. My skill set includes
                                languages such as Java, Python, C#, and TypeScript. I&apos;m constantly looking for opportunities to expand my knowledge
                                in both frontend and backend development, as well as AI and Machine Learning.
                            </p>
                        </div>
                        <div className="mt-6 flex space-x-4">
                            <Link href="/resume">
                                <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                                    Resume
                                </button>
                            </Link>
                            <Link href="/projects">
                                <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
                                    Projects
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
