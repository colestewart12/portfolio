import Image from "next/image";

export default function Projects() {
  return (
    <div className="py-10 bg-gray-100">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
        Projects
      </h1>
      <p className="text-center text-gray-600 mb-16">
        My passion for web development drives me to create innovative web
        applications. Below are two of my recent projects: my capstone project,
        a comprehensive business management app, and a workout app designed to
        help gym owners create personalized workout plans for their clients.
      </p>

      <p className="text-center text-gray-600 mb-8">
        The <strong>Business Management App</strong> is built to help business
        owners efficiently manage their workforce. One of its key features is a
        custom communication service I developed, which enables real-time
        notifications and smooth communication between team members. This app
        enhances operational efficiency by centralizing employee management,
        improving task coordination, and fostering better collaboration within
        the organization.
      </p>

      <p className="text-center text-gray-600 mb-16">
        The <strong>Workout App</strong> enables users to create a wide range of
        customizable exercises and add them to structured workout plans. I
        designed features that allow gym owners to create, edit, and manage
        workouts easily, offering flexibility and convenience for both trainers
        and their clients. This app provides a user-friendly interface to
        enhance the workout creation experience and promote a healthier
        lifestyle.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {/* Business Management App */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <a
            href="https://github.com/StuartGavidia/businessapp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="relative h-64 w-full mb-4">
              <Image
                src="/bma.jpg"
                alt="Business Management App"
                layout="fill"
                objectFit="contain"
                className="rounded-lg"
              />
            </div>
          </a>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Business Management App
          </h2>
          <p className="text-gray-600 mb-4">
            Node.JS, Express, React, MongoDB, Docker, Azure
          </p>
          <ul className="list-disc list-inside text-gray-600">
            <li>
              Developed a full-stack web application using Node.JS serving a
              REST API with React as the front-end
            </li>
            <li>Implemented real-time notifications using Express</li>
            <li>
              Optimized MongoDB database for efficient read-write operations
            </li>
            <li>Deployed databases with Azure for a production environment</li>
            <li>Used GitHub Actions to automate workflows</li>
          </ul>
        </div>

        {/* Workout App */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <a
            href="https://github.com/colestewart12/MyWorkout"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="relative h-64 w-full mb-4">
              <Image
                src="/workout.jpg"
                alt="Workout App"
                layout="fill"
                objectFit="contain"
                className="rounded-lg"
              />
            </div>
          </a>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Workout App
          </h2>
          <p className="text-gray-600 mb-4">
            C#, Coalesce, SQL Server, GitHub, Git, Vue, Vuetify
          </p>
          <ul className="list-disc list-inside text-gray-600">
            <li>
              Designed and implemented features for managing exercises with
              custom options
            </li>
            <li>
              Integrated calendar functionalities for personalized workout
              schedules
            </li>
            <li>
              Developed user registration, authentication, and profile
              management modules
            </li>
            <li>Used Coalesce to enhance data consistency and performance</li>
            <li>
              Built a user-friendly interface with Vue and Vuetify for easy
              workout creation
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
