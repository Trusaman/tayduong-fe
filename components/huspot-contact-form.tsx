"use client";

import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

declare global {
    interface Window {
        hbspt: {
            forms: {
                create: (config: HubSpotFormConfig) => void;
            };
        };
    }
}

interface HubSpotFormConfig {
    portalId: string;
    formId: string;
    target: string;
    onFormReady: () => void;
}

export default function StyledHubSpotForm() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "//js.hsforms.net/forms/embed/v2.js";
        script.charset = "utf-8";
        script.type = "text/javascript";
        document.body.appendChild(script);

        script.onload = () => {
            if (window.hbspt) {
                window.hbspt.forms.create({
                    portalId: "47858690",
                    formId: "6d010fe2-8b3e-43e3-8a61-1a3eb43ee394",
                    target: "#hubspot-form-container",
                    onFormReady: () => setIsLoaded(true),
                });
            }
        };

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div className="min-h-screen bg-sky-400 flex items-center justify-center p-4">
            <div className="w-full max-w-2xl bg-sky-400 rounded-lg shadow-lg p-6">
                <h1 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">
                    Contact us / Liên hệ với chúng tôi
                </h1>
                {!isLoaded && (
                    <div className="space-y-4">
                        <Skeleton className="h-6 w-3/4" />
                        <Skeleton className="h-10 w-full" />
                        <Skeleton className="h-6 w-3/4" />
                        <Skeleton className="h-10 w-full" />
                        <Skeleton className="h-6 w-3/4" />
                        <Skeleton className="h-10 w-full" />
                        <Skeleton className="h-10 w-1/3" />
                    </div>
                )}
                <div
                    id="hubspot-form-container"
                    className={`transition-opacity duration-300 ${
                        isLoaded ? "opacity-100" : "opacity-0 absolute"
                    }`}
                />
                <style jsx global>{`
                    #hubspot-form-container form {
                        display: flex;
                        flex-direction: column;
                        gap: 1rem;
                    }
                    #hubspot-form-container .hs-form-field > label {
                        font-weight: bold;
                        color: #1e3a8a;
                        margin-bottom: 0.25rem;
                        display: block;
                    }
                    #hubspot-form-container .hs-input {
                        width: 100%;
                        padding: 0.5rem;
                        border: 1px solid #e2e8f0;
                        border-radius: 0.25rem;
                    }
                    #hubspot-form-container .hs-error-msg {
                        color: #ef4444;
                        font-size: 0.875rem;
                    }
                    #hubspot-form-container .hs-submit {
                        margin-top: 1rem;
                    }
                    #hubspot-form-container .hs-button {
                        background-color: #f97316;
                        color: white;
                        font-weight: bold;
                        padding: 0.5rem 1rem;
                        border: none;
                        border-radius: 0.25rem;
                        cursor: pointer;
                        transition: background-color 0.3s;
                    }
                    #hubspot-form-container .hs-button:hover {
                        background-color: #ea580c;
                    }
                `}</style>
            </div>
        </div>
    );
}
