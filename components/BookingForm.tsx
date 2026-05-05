"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/language-context";

type Status = "idle" | "submitting" | "success" | "error";

type FormState = {
  name: string;
  email: string;
  phone: string;
  reason: string;
};

export default function BookingForm() {
  const { tr } = useLanguage();
  const f = tr.form;

  const [values, setValues] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    reason: f.reasons[0],
  });
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [status, setStatus] = useState<Status>("idle");

  const update =
    (field: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      setValues((v) => ({ ...v, [field]: e.target.value }));
      if (errors[field]) setErrors((err) => ({ ...err, [field]: undefined }));
    };

  const validate = (): boolean => {
    const next: Partial<FormState> = {};
    if (!values.name.trim()) next.name = f.errorName;
    if (!values.email.trim()) {
      next.email = f.errorEmail;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      next.email = f.errorEmailInvalid;
    }
    if (values.phone && !/^[+()\-\d\s]{7,}$/.test(values.phone)) {
      next.phone = f.errorPhone;
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("submitting");
    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  if (status === "error") {
    return (
      <div className="rounded-xl bg-red-50 p-6 ring-1 ring-red-200">
        <h3 className="text-lg font-semibold text-red-800">{f.errorSending ?? "Something went wrong"}</h3>
        <p className="mt-2 text-sm text-red-700">{f.errorSendingBody ?? "Please try again or email us directly at support@cuvr.ae"}</p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-5 text-sm font-semibold text-brand-purple hover:underline"
        >
          {f.tryAgain ?? "Try again"}
        </button>
      </div>
    );
  }

  if (status === "success") {
    return (
      <div className="rounded-xl bg-green-50 p-6 ring-1 ring-green-200">
        <h3 className="text-lg font-semibold text-green-800">
          {f.requestReceived}
        </h3>
        <p className="mt-2 text-sm text-green-700">
          {f.thankYouMessage.replace(
            "{name}",
            values.name.split(" ")[0] || "there"
          )}
        </p>
        <button
          type="button"
          onClick={() => {
            setValues({ name: "", email: "", phone: "", reason: f.reasons[0] });
            setStatus("idle");
          }}
          className="mt-5 text-sm font-semibold text-brand-purple hover:underline"
        >
          {f.bookAnother}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label={f.name}
          name="name"
          placeholder="John Doe"
          value={values.name}
          onChange={update("name")}
          error={errors.name}
        />
        <Field
          label={f.email}
          name="email"
          type="email"
          placeholder="john@example.com"
          value={values.email}
          onChange={update("email")}
          error={errors.email}
        />
      </div>

      <Field
        label={f.phone}
        name="phone"
        type="tel"
        placeholder="+1 (555) 000-0000"
        value={values.phone}
        onChange={update("phone")}
        error={errors.phone}
      />

      <div>
        <label
          htmlFor="reason"
          className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-500"
        >
          {f.reasonForVisit}
        </label>
        <select
          id="reason"
          name="reason"
          value={values.reason}
          onChange={update("reason")}
          className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/20"
        >
          {f.reasons.map((r) => (
            <option key={r} value={r}>
              {r}
            </option>
          ))}
        </select>
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn-gradient inline-flex w-full items-center justify-center rounded-full px-6 py-3.5 text-sm font-semibold disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "submitting" ? f.scheduling : f.scheduleSession}
      </button>

      <p className="text-center text-xs text-slate-500">{f.responseTime}</p>
    </form>
  );
}

function Field({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
  error,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  error?: string;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-500"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${name}-error` : undefined}
        className={`w-full rounded-lg border bg-white px-4 py-3 text-sm outline-none transition focus:ring-2 focus:ring-brand-purple/20 ${
          error
            ? "border-red-400 focus:border-red-500"
            : "border-slate-200 focus:border-brand-purple"
        }`}
      />
      {error && (
        <p id={`${name}-error`} className="mt-1.5 text-xs text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}
