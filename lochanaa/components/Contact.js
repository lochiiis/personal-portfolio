"use client";
import { useState } from "react";
import { Mail, User, MessageSquare, Send, CheckCircle, AlertCircle, Linkedin, GithubIcon } from "lucide-react";

export default function Contact() {
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState("");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = "Name is required";
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Email is invalid";
        }

        if (!formData.message.trim()) {
            newErrors.message = "Message is required";
        } else if (formData.message.trim().length < 10) {
            newErrors.message = "Message must be at least 10 characters";
        }

        return newErrors;
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ""
            }));
        }
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        // Validate form
        const newErrors = validateForm();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setLoading(true);
        setResult("");
        setErrors({});

        try {
            const response = await fetch("https://formspree.io/f/mjkjbpvy", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setResult("success");
                setFormData({ name: "", email: "", message: "" });
            } else {
                throw new Error("Failed to send message");
            }


        } catch (error) {
            console.error("Error sending message:", error);
            setResult("error");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex justify-center items-center py-10">
            <div className="w-full max-w-xl mx-auto px-4">
                {/* Success/Error Messages */}
                {result && (
                    <div className={`mb-6 p-4 rounded-lg flex items-center gap-3 ${result === "success"
                        ? "bg-green-500/10 border border-green-500/20 text-green-400"
                        : "bg-red-500/10 border border-red-500/20 text-red-400"
                        }`}>
                        {result === "success" ? (
                            <>
                                <CheckCircle className="w-5 h-5" />
                                <span>Thank you! Your message has been sent successfully</span>
                            </>
                        ) : (
                            <>
                                <AlertCircle className="w-5 h-5" />
                                <span>Sorry, something went wrong. Please try again or contact me through my socials below.</span>
                            </>
                        )}
                    </div>
                )}

                <form
                    onSubmit={onSubmit}
                    className=" bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8  "
                >


                    <div className="grid md:grid-cols-2 gap-6">
                        {/* Name Field */}
                        <div>
                            <label className="block text-white/90 text-sm font-semibold mb-2">
                                <User className="w-4 h-4 inline mr-2" />
                                Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                placeholder="Your Name"
                                className={`w-full p-2 rounded-lg bg-white/10 backdrop-blur-sm border text-white placeholder-white/50 outline-none transition-all duration-300 ${errors.name
                                    ? "border-red-500 focus:border-red-400 focus:ring-2 focus:ring-red-500/20"
                                    : "border-white/20 focus:border-purple-400 focus:ring-2 focus:ring-purple-500/20"
                                    }`}
                            />
                            {errors.name && (
                                <p className="text-red-400 text-sm mt-1 flex items-center gap-1">
                                    <AlertCircle className="w-3 h-3" />
                                    {errors.name}
                                </p>
                            )}
                        </div>

                        {/* Email Field */}
                        <div>
                            <label className="block text-white/90 text-sm font-semibold mb-2">
                                <Mail className="w-4 h-4 inline mr-2" />
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder="your_email@gmail.com"
                                className={`w-full p-2 rounded-lg bg-white/10 backdrop-blur-sm border text-white placeholder-white/50 outline-none transition-all duration-300 ${errors.email
                                    ? "border-red-500 focus:border-red-400 focus:ring-2 focus:ring-red-500/20"
                                    : "border-white/20 focus:border-purple-400 focus:ring-2 focus:ring-purple-500/20"
                                    }`}
                            />
                            {errors.email && (
                                <p className="text-red-400 text-sm mt-1 flex items-center gap-1">
                                    <AlertCircle className="w-3 h-3" />
                                    {errors.email}
                                </p>
                            )}
                        </div>
                    </div>


                    {/* Message Field */}
                    <div className="my-5">
                        <label className="block text-white/90 text-sm font-semibold mb-2">
                            <MessageSquare className="w-4 h-4 inline mr-2" />
                            Message
                        </label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            placeholder="Tell me about your ideas or just say hello!"
                            rows={3}
                            className={`w-full p-2 rounded-lg bg-white/10 backdrop-blur-sm border text-white placeholder-white/50 outline-none transition-all duration-300 resize-none ${errors.message
                                ? "border-red-500 focus:border-red-400 focus:ring-2 focus:ring-red-500/20"
                                : "border-white/20 focus:border-purple-400 focus:ring-2 focus:ring-purple-500/20"
                                }`}
                        />
                        {errors.message && (
                            <p className="text-red-400 text-sm mt-1 flex items-center gap-1">
                                <AlertCircle className="w-3 h-3" />
                                {errors.message}
                            </p>
                        )}
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-linear-to-r from-purple-600 to-blue-600 text-white py-4 px-6 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
                    >
                        {loading ? (
                            <>
                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                Sending...
                            </>
                        ) : (
                            <>
                                <Send className="w-5 h-5" />
                                Send Message
                            </>
                        )}
                    </button>
                </form>


            </div>
        </div>
    );
}
