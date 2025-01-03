'use client'
import React from "react";
import TutoringSignUpForm from "app/ui/tutoring/signup-form"
const Page: React.FC = () => {
    return (
        <div>
            <section className="mb-8">
                <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
                    Why Me
                </h1>
                <ul className="list-disc pl-6">
                    <li>I earned a 36 single-test score on the ACT</li>
                    <li>I had a 4.0 UW GPA in high school and the highest weighted GPA, earning the title of valedictorian </li>
                    <li>I completed 10 AP classes, including AP Calculus AB, AP Biology, AP Chemistry, and AP Government (where I achieved a perfect score (100%) on the AP Test)</li>
                    <li>I worked as a math tutor at Mathnasium for over a year and as a TA at the University for a semester</li>
                </ul>
            </section>
            <section>
                <div className="max-w-xl w-full bg-white shadow-md rounded-lg p-6">
                    <h1 className="text-2xl font-bold text-center mb-6">Tutoring Sign-Up</h1>
                    <TutoringSignUpForm />
            </div>
            </section>
        </div>

    )
  }
export default Page;