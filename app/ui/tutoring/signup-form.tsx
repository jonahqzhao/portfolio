import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import emailjs from "emailjs-com";

interface TutoringSignUpFormInputs {
  name: string;
  email: string;
  subject: string;
  availability: string;
  message: string;
}

const TutoringSignUpForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<TutoringSignUpFormInputs>();

  const onSubmit: SubmitHandler<TutoringSignUpFormInputs> = (data) => {
    emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          name: data.name,
          email: data.email,
          subject: data.subject,
          availability: data.availability,
          message: data.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
  
    ).then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Tutoring sign-up form submitted successfully!");
      },
      (err) => {
        console.error("FAILED...", err);
        alert("There was an error submitting the form.");
      }
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-4 border rounded-md w-96">
      <h2 className="text-lg font-semibold mb-4">Tutoring Sign-Up</h2>

      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium">Name</label>
        <input
          id="name"
          {...register("name", { required: "Name is required" })}
          className="w-full px-2 py-1 border rounded-md"
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium">Email</label>
        <input
          id="email"
          type="email"
          {...register("email", { required: "Email is required" })}
          className="w-full px-2 py-1 border rounded-md"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
      </div>

      <div className="mb-4">
        <label htmlFor="subject" className="block text-sm font-medium">Subject</label>
        <input
          id="subject"
          {...register("subject", { required: "Subject is required" })}
          className="w-full px-2 py-1 border rounded-md"
        />
        {errors.subject && <p className="text-red-500 text-sm">{errors.subject.message}</p>}
      </div>

      <div className="mb-4">
        <label htmlFor="availability" className="block text-sm font-medium">Availability</label>
        <input
          id="availability"
          {...register("availability", { required: "Availability is required" })}
          className="w-full px-2 py-1 border rounded-md"
        />
        {errors.availability && <p className="text-red-500 text-sm">{errors.availability.message}</p>}
      </div>

      <div className="mb-4">
        <label htmlFor="message" className="block text-sm font-medium">Additional Message</label>
        <textarea
          id="message"
          {...register("message")}
          className="w-full px-2 py-1 border rounded-md"
        />
      </div>

      <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
        Sign Up
      </button>
    </form>
  );
};

export default TutoringSignUpForm;
