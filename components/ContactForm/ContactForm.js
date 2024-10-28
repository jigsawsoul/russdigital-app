import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "../../components";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (event) => {
    const myForm = event.target;
    const formData = new FormData(myForm);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => console.log("Form successfully submitted"))
      .catch((error) => alert(error));

    // event.preventDefault();
  };

  return (
    <form
      className="font-normal"
      onSubmit={handleSubmit(onSubmit)}
      name="contact"
      method="POST"
      netlify
      netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value="contact" />
      <div className="flex flex-row flex-wrap -mx-4">
        <div className="w-full lg:w-1/2 px-2">
          <div className="mb-5">
            <input
              type="text"
              className="form-control style-border bg-transparent text-[18px] black border-b-2 border-black w-full placeholder-black h-14 outline-none"
              placeholder="Full name*"
              {...register("name", { required: "Full name is required" })}
            />
            {errors.name && (
              <p className="bg-red-500 px-2 py-2 text-white text-xs font-bold mt-1">
                {errors.name.message}
              </p>
            )}
          </div>
        </div>
        <div className="w-full lg:w-1/2 px-2">
          <div className="mb-5">
            <input
              type="text"
              className="form-control style-border bg-transparent text-[18px] black placeholder-black h-14 border-b-2 border-black w-full outline-none"
              placeholder="Email address*"
              {...register("email", {
                required: "Email address is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && (
              <p className="bg-red-500 px-2 py-2 text-white text-xs font-bold mt-1">
                {errors.email.message}
              </p>
            )}
          </div>
        </div>
        <div className="w-full px-2">
          <div className="mb-5">
            <input
              type="text"
              className="form-control style-border bg-transparent text-[18px] black placeholder-black h-14 border-b-2 border-black w-full outline-none autofill:bg-red-400"
              placeholder="Phone number"
              {...register("number")}
            />
          </div>
        </div>
        <div className="w-full px-2">
          <div className="mb-5">
            <textarea
              placeholder="How Can We Help You*"
              className="form-control style-border bg-transparent text-[18px] black placeholder-black min-h-48 border-b-2 border-black w-full pt-4 outline-none"
              {...register("message", { required: "Message is required" })}
            ></textarea>
            {errors.message && (
              <p className="bg-red-500 px-2 py-2 text-white text-xs font-bold mt-1">
                {errors.message.message}
              </p>
            )}
          </div>
        </div>
      </div>
      <div className="-mx-2">
        <Button type="submit" className="bg-black text-white">
          SEND MESSAGE
        </Button>
      </div>
    </form>
  );
}
