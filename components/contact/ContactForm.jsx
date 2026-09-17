"use client";

import { useState } from "react";
import { HELP_TOPICS } from "@/data/contact";
import { cn } from "@/lib/utils";

export function ContactForm({ className = "" }) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    topic: "",
    orderNumber: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const validate = () => {
    const nextErrors = {};

    if (!formData.fullName.trim()) {
      nextErrors.fullName = "Please enter your full name.";
    }

    if (!formData.email.trim()) {
      nextErrors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (!formData.topic) {
      nextErrors.topic = "Please select what you need help with.";
    }

    if (!formData.message.trim()) {
      nextErrors.message = "Please describe how we can assist you.";
    } else if (formData.message.trim().length < 10) {
      nextErrors.message = "Message must be at least 10 characters long.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
    if (submitError) {
      setSubmitError(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      setSubmitError(
        "Direct message submission is currently being configured. Please reach us directly via our support email."
      );
    } catch {
      setSubmitError("An error occurred. Please try again or email support.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={cn("flex flex-col bg-white p-5 sm:p-7 lg:p-8 rounded-[2px] border border-[#e8e6e1]", className)}>
      <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#111111]">
        Send us a message
      </h2>
      <p className="mt-1 text-sm sm:text-[14.5px] text-[#666666]">
        Fill out the form below and we will get back to you.
      </p>

      {submitError && (
        <div
          role="alert"
          className="mt-4 p-3.5 bg-neutral-100 border border-neutral-300 text-[#222222] text-xs sm:text-sm rounded-[2px]"
        >
          {submitError}
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="mt-6 flex flex-col gap-4.5 sm:gap-5">
        
        {/* Row 1: Full Name & Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          {/* Full Name */}
          <div className="flex flex-col">
            <label
              htmlFor="fullName"
              className="text-sm sm:text-[14.5px] font-semibold text-[#111111] mb-1.5"
            >
              Full Name <span className="text-[#e11d48]">*</span>
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              required
              autoComplete="name"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="e.g. Rahul Sharma"
              className={cn(
                "w-full h-12 px-4 bg-[#faf9f7] border rounded-[2px] text-base sm:text-[15px] text-[#111111] placeholder:text-[#999999] focus:bg-white focus:outline-none transition-colors",
                errors.fullName
                  ? "border-[#e11d48] focus:border-[#e11d48] focus:ring-1 focus:ring-[#e11d48]"
                  : "border-[#e2e0da] focus:border-[#111111]"
              )}
            />
            {errors.fullName && (
              <span className="mt-1 text-xs font-medium text-[#e11d48]">
                {errors.fullName}
              </span>
            )}
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label
              htmlFor="email"
              className="text-sm sm:text-[14.5px] font-semibold text-[#111111] mb-1.5"
            >
              Email Address <span className="text-[#e11d48]">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="e.g. rahul@example.com"
              className={cn(
                "w-full h-12 px-4 bg-[#faf9f7] border rounded-[2px] text-base sm:text-[15px] text-[#111111] placeholder:text-[#999999] focus:bg-white focus:outline-none transition-colors",
                errors.email
                  ? "border-[#e11d48] focus:border-[#e11d48] focus:ring-1 focus:ring-[#e11d48]"
                  : "border-[#e2e0da] focus:border-[#111111]"
              )}
            />
            {errors.email && (
              <span className="mt-1 text-xs font-medium text-[#e11d48]">
                {errors.email}
              </span>
            )}
          </div>
        </div>

        {/* Row 2: Phone & Help Topic */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          {/* Phone Number (Optional) */}
          <div className="flex flex-col">
            <label
              htmlFor="phone"
              className="text-sm sm:text-[14.5px] font-semibold text-[#111111] mb-1.5 flex items-center justify-between"
            >
              <span>Phone Number</span>
              <span className="text-xs font-normal text-[#888888]">Optional</span>
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="e.g. +91 98765 43210"
              className="w-full h-12 px-4 bg-[#faf9f7] border border-[#e2e0da] rounded-[2px] text-base sm:text-[15px] text-[#111111] placeholder:text-[#999999] focus:bg-white focus:border-[#111111] focus:outline-none transition-colors"
            />
          </div>

          {/* Topic Select */}
          <div className="flex flex-col">
            <label
              htmlFor="topic"
              className="text-sm sm:text-[14.5px] font-semibold text-[#111111] mb-1.5"
            >
              What do you need help with? <span className="text-[#e11d48]">*</span>
            </label>
            <div className="relative">
              <select
                id="topic"
                name="topic"
                required
                value={formData.topic}
                onChange={handleChange}
                className={cn(
                  "w-full h-12 px-4 pr-10 bg-[#faf9f7] border rounded-[2px] text-base sm:text-[15px] text-[#111111] appearance-none focus:bg-white focus:outline-none transition-colors cursor-pointer",
                  errors.topic
                    ? "border-[#e11d48] focus:border-[#e11d48] focus:ring-1 focus:ring-[#e11d48]"
                    : "border-[#e2e0da] focus:border-[#111111]"
                )}
              >
                {HELP_TOPICS.map((topic) => (
                  <option key={topic.value} value={topic.value}>
                    {topic.label}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3.5 text-[#555555]">
                <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
            {errors.topic && (
              <span className="mt-1 text-xs font-medium text-[#e11d48]">
                {errors.topic}
              </span>
            )}
          </div>
        </div>

        {/* Row 3: Order Number (Optional) */}
        <div className="flex flex-col">
          <label
            htmlFor="orderNumber"
            className="text-sm sm:text-[14.5px] font-semibold text-[#111111] mb-1.5 flex items-center justify-between"
          >
            <span>Order Number</span>
            <span className="text-xs font-normal text-[#888888]">Optional</span>
          </label>
          <input
            id="orderNumber"
            name="orderNumber"
            type="text"
            value={formData.orderNumber}
            onChange={handleChange}
            placeholder="e.g. BX-10294"
            className="w-full h-12 px-4 bg-[#faf9f7] border border-[#e2e0da] rounded-[2px] text-base sm:text-[15px] text-[#111111] placeholder:text-[#999999] focus:bg-white focus:border-[#111111] focus:outline-none transition-colors"
          />
        </div>

        {/* Row 4: Message */}
        <div className="flex flex-col">
          <label
            htmlFor="message"
            className="text-sm sm:text-[14.5px] font-semibold text-[#111111] mb-1.5"
          >
            Message <span className="text-[#e11d48]">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            value={formData.message}
            onChange={handleChange}
            placeholder="Please write your question or issue in detail..."
            className={cn(
              "w-full p-4 bg-[#faf9f7] border rounded-[2px] text-base sm:text-[15px] text-[#111111] placeholder:text-[#999999] focus:bg-white focus:outline-none transition-colors resize-y min-h-[120px]",
              errors.message
                ? "border-[#e11d48] focus:border-[#e11d48] focus:ring-1 focus:ring-[#e11d48]"
                : "border-[#e2e0da] focus:border-[#111111]"
            )}
          />
          {errors.message && (
            <span className="mt-1 text-xs font-medium text-[#e11d48]">
              {errors.message}
            </span>
          )}
        </div>

        {/* Submit Button */}
        <div className="mt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full sm:w-auto h-12 px-8 bg-[#111111] text-white font-semibold text-sm sm:text-[14.5px] uppercase tracking-wider rounded-[2px] hover:bg-black active:scale-[0.99] transition-all cursor-pointer disabled:opacity-50"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </div>

      </form>
    </div>
  );
}
