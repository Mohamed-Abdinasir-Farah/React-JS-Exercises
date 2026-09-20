import React, { useState } from "react";
const Dashboard = () => {
  const [courses, setCourses] = useState([
    {
      id: 1,
      name: "React Fundamentals",
      progress: 75,
      next: "Components & Props",
      teacher: "Sarah Wilson",
    },
    {
      id: 2,
      name: "JavaScript Advanced",
      progress: 45,
      next: "Async/Await",
      teacher: "Mike Johnson",
    },
    {
      id: 3,
      name: "UI/UX Design",
      progress: 90,
      next: "Color Theory",
      teacher: "Emily Chen",
    },
  ]);
  

  const handleProgressClick = (event, courseId) => {
    const progressBar = event.currentTarget;
    const rectangle = progressBar.getBoundingClientRect();
    const clickPosition = event.clientX - rectangle.left;
    let percentage = (clickPosition / rectangle.width) * 100;
    percentage = Math.round(
      Math.max(0, Math.min(100, percentage))
    );
    setCourses((currentCourses) =>
      currentCourses.map((course) =>
        course.id === courseId
          ? {
              ...course,
              progress: percentage,
            }
          : course
      )
    );
  };
  

  
  return (
    <div className="min-h-screen bg-slate-50 px-6 py-8 text-slate-800">
      <div className="mx-auto max-w-7xl">
        {/*  HEADER */}
        <div className="mb-6 flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-6 py-5 shadow-sm">
          <div>
            <h1 className="text-2xl font-bold">
              Welcome back, Student!
            </h1>
            <p className="mt-1 text-sm text-slate-500">
              Here's what's happening with your courses today.
            </p>
          </div>
          <div className="flex items-center gap-5">
            <button className="text-2xl transition hover:scale-110">
              🔔
            </button>
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-pink-400 to-purple-500 font-semibold text-white">
              S
            </div>
          </div>
        </div>
        {/* STAT CARDS */}
        <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {/* Average Grade */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-4">
              <span className="text-2xl">
                📊
              </span>
              <div>
                <p className="text-sm text-slate-500">
                  Average Grade
                </p>
                <p className="text-2xl font-bold">
                  88%
                </p>
              </div>
            </div>
          </div>
          {/* Courses */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-4">
              <span className="text-2xl">
                📚
              </span>
              <div>
                <p className="text-sm text-slate-500">
                  Courses
                </p>
                <p className="text-2xl font-bold">
                  3
                </p>
              </div>
            </div>
          </div>
          {/* Study Hours */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-4">
              <span className="text-2xl">
                ⏰
              </span>
              <div>
                <p className="text-sm text-slate-500">
                  Study Hours
                </p>
                <p className="text-2xl font-bold">
                  45h
                </p>
              </div>
            </div>
          </div>
          {/* Assignments */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-4">
              <span className="text-2xl">
                ✍️
              </span>
              <div>
                <p className="text-sm text-slate-500">
                  Assignments
                </p>
                <p className="text-2xl font-bold">
                  12
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* MAIN CONTENT  */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/*  COURSE PROGRESS  */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm lg:col-span-2">
            <h2 className="mb-5 text-lg font-bold">
              Course Progress
            </h2>
            <div className="space-y-4">
              {courses.map((course) => (
                <div
                  key={course.id}
                  className="rounded-xl bg-slate-50 p-4"
                >
                  {/* Course title */}
                  <div className="mb-2 flex items-center justify-between">
                    <h3 className="font-medium">
                      {course.name}
                    </h3>
                    <span className="text-sm font-medium text-slate-500">
                      {course.progress}%
                    </span>
                  </div>
                  {/* Progress bar */}
                  <div
                    onClick={(event) =>
                      handleProgressClick(event, course.id)
                    }
                    className="h-3 w-full cursor-pointer overflow-hidden rounded-full bg-slate-200"
                  >
                    <div
                      className="h-full rounded-full bg-green-500 transition-all duration-300"
                      style={{
                        width: `${course.progress}%`,
                      }}
                    ></div>
                  </div>
                  {/* Course information */}
                  <div className="mt-2 flex items-center justify-between text-sm text-slate-500">
                    <span>
                      Next: {course.next}
                    </span>
                    <span>
                      {course.teacher}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            {/* Small instruction */}
            <p className="mt-5 text-xs text-slate-400">
              💡 Click anywhere on a progress bar to change the progress.
            </p>
          </div>
          {/*  RIGHT COLUMN  */}
          <div className="space-y-6">
            {/*  UPCOMING ASSIGNMENTS  */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="mb-5 text-lg font-bold">
                Upcoming Assignments
              </h2>
              <div className="space-y-5">
                {/* Assignment 1 */}
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-medium">
                      Build a Todo App
                    </h3>
                    <p className="text-sm text-slate-500">
                      React Fundamentals
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-medium text-red-600">
                      pending
                    </span>
                    <p className="mt-1 text-xs text-slate-500">
                      Due 2024-03-20
                    </p>
                  </div>
                </div>
                {/* Assignment 2 */}
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-medium">
                      API Integration
                    </h3>
                    <p className="text-sm text-slate-500">
                      JavaScript Advanced
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
                      completed
                    </span>
                    <p className="mt-1 text-xs text-slate-500">
                      Due 2024-03-18
                    </p>
                  </div>
                </div>
                {/* Assignment 3 */}
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-medium">
                      Design System
                    </h3>
                    <p className="text-sm text-slate-500">
                      UI/UX Design
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="rounded-full bg-yellow-100 px-3 py-1 text-xs font-medium text-yellow-700">
                      in-progress
                    </span>
                    <p className="mt-1 text-xs text-slate-500">
                      Due 2024-03-25
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/*  ANNOUNCEMENTS  */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="mb-5 text-lg font-bold">
                Announcements
              </h2>
              <div className="space-y-5">
                {/* Announcement 1 */}
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="font-medium">
                    New Course Available
                  </h3>
                  <p className="mt-1 text-sm text-slate-500">
                    Check out our new TypeScript course!
                  </p>
                  <p className="mt-1 text-xs text-slate-400">
                    2 hours ago
                  </p>
                </div>
                {/* Announcement 2 */}
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="font-medium">
                    Maintenance Notice
                  </h3>
                  <p className="mt-1 text-sm text-slate-500">
                    Platform updates scheduled for tonight
                  </p>
                  <p className="mt-1 text-xs text-slate-400">
                    5 hours ago
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;