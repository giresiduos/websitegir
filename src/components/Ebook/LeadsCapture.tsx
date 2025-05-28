"use client";
import { useEffect, useState } from "react";

const LeadsCaptureModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    state: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    if (name === "phone") {
      const formattedPhone = formatPhoneNumber(value);
      setFormData((prev) => ({
        ...prev,
        [name]: formattedPhone,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  const formatPhoneNumber = (value: string): string => {
    const cleaned = value.replace(/\D/g, "");
    const limited = cleaned.slice(0, 11);

    if (limited.length <= 2) {
      return limited;
    }
    if (limited.length <= 7) {
      return `(${limited.slice(0, 2)}) ${limited.slice(2)}`;
    }
    return `(${limited.slice(0, 2)}) ${limited.slice(2, 7)}-${limited.slice(7, 11)}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const cleanedPhone = formData.phone.replace(/\D/g, "");
    if (cleanedPhone.length < 11) {
      setSubmitStatus({
        success: false,
        message: "Por favor, informe um número de telefone completo (com DDD).",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus({ success: true, message: result.message });
        setFormData({ name: "", email: "", phone: "", state: "" });
        setTimeout(() => {
          setIsOpen(false);
          setSubmitStatus(null);
        }, 3000);
      } else {
        throw new Error(
          result.error || "Erro ao enviar solicitação de download",
        );
      }
    } catch (error) {
      console.log(error);

      setSubmitStatus({
        success: false,
        message:
          "Falha ao enviar a solicitação de download. Por favor, tente novamente mais tarde.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
        <button
          onClick={() => setIsOpen(true)}
          className="bg-primary hover:bg-primary/90 rounded-lg px-6 py-3 text-base font-medium text-white duration-300 cursor-pointer"
        >
          Baixar E-book
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-10000 flex items-center justify-center overflow-x-hidden overflow-y-auto bg-black/50 outline-none focus:outline-none">
          <div className="relative mx-auto my-6 mt-20 w-full max-w-3xl px-4">
            <div className="shadow-three dark:bg-gray-dark relative flex max-h-screen w-full flex-col overflow-y-auto rounded-lg border-0 bg-white outline-none focus:outline-none">
              <div className="flex items-start justify-between rounded-t px-10 pt-10">
                <h3 className="text-2xl font-semibold text-black dark:text-white">
                  Baixe o seu E-book grátis
                </h3>
              </div>

              <div className="relative flex-auto p-10">
                {submitStatus && (
                  <div
                    className={`relative mb-6 rounded-lg p-4 pr-10 ${submitStatus.success ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}
                  >
                    {submitStatus.message}
                    <button
                      type="button"
                      onClick={() => setSubmitStatus(null)}
                      className="absolute top-1/2 right-3 -translate-y-1/2 transform text-2xl leading-none font-bold opacity-70 hover:opacity-100 focus:outline-none"
                      aria-label="Fechar mensagem"
                    >
                      &times;
                    </button>
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4 md:w-1/2">
                      <div className="mb-8">
                        <label
                          htmlFor="name"
                          className="text-dark mb-3 block text-sm font-medium dark:text-white"
                        >
                          Seu Nome
                        </label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Digite seu nome"
                          className="border-stroke text-body-color focus:border-primary dark:text-body-color-dark dark:shadow-two dark:focus:border-primary w-full rounded-lg border bg-[#f8f8f8] px-6 py-3 text-base outline-none dark:border-transparent dark:bg-[#2C303B]"
                          required
                        />
                      </div>
                    </div>
                    <div className="w-full px-4 md:w-1/2">
                      <div className="mb-8">
                        <label
                          htmlFor="email"
                          className="text-dark mb-3 block text-sm font-medium dark:text-white"
                        >
                          Seu Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Digite seu email"
                          className="border-stroke text-body-color focus:border-primary dark:text-body-color-dark dark:shadow-two dark:focus:border-primary w-full rounded-lg border bg-[#f8f8f8] px-6 py-3 text-base outline-none dark:border-transparent dark:bg-[#2C303B]"
                          required
                        />
                      </div>
                    </div>

                    <div className="w-full px-4 md:w-1/2">
                      <div className="mb-8">
                        <label
                          htmlFor="phone"
                          className="text-dark mb-3 block text-sm font-medium dark:text-white"
                        >
                          Seu Telefone
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          id="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="(00) 00000-0000"
                          className="border-stroke text-body-color focus:border-primary dark:text-body-color-dark dark:shadow-two dark:focus:border-primary w-full rounded-lg border bg-[#f8f8f8] px-6 py-3 text-base outline-none dark:border-transparent dark:bg-[#2C303B]"
                          required
                        />
                      </div>
                    </div>

                    <div className="w-full px-4 md:w-1/2">
                      <div className="mb-8">
                        <label
                          htmlFor="state"
                          className="text-dark mb-3 block text-sm font-medium dark:text-white"
                        >
                          Seu Estado
                        </label>
                        <input
                          type="text"
                          name="state"
                          id="state"
                          value={formData.state}
                          onChange={handleChange}
                          placeholder="Digite seu estado"
                          className="border-stroke text-body-color focus:border-primary dark:text-body-color-dark dark:shadow-two dark:focus:border-primary w-full rounded-lg border bg-[#f8f8f8] px-6 py-3 text-base outline-none dark:border-transparent dark:bg-[#2C303B]"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-end rounded-b pt-4">
                    <button
                      type="button"
                      className="background-transparent mr-3 cursor-pointer rounded-lg px-6 py-2 text-sm font-bold text-red-500 uppercase transition-all duration-150 ease-linear outline-none focus:outline-none"
                      onClick={() => {
                        setIsOpen(false);
                        setSubmitStatus(null);
                      }}
                    >
                      Fechar
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-primary shadow-submit hover:bg-primary/90 dark:shadow-submit-dark cursor-pointer rounded-lg px-6 py-3 text-sm font-bold text-white uppercase duration-300 disabled:cursor-not-allowed disabled:opacity-70"
                    >
                      {isSubmitting ? "Enviando..." : "Solicitar E-book"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LeadsCaptureModal;
