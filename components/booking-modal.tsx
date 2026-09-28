"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import {
  FiCalendar,
  FiCheck,
  FiClock,
  FiMessageCircle,
  FiSend,
  FiX,
} from "react-icons/fi";

import {
  SERVICES,
  formatDuration,
  formatPrice,
  formatTotalDuration,
  type Service,
} from "@/lib/services";

interface BookingModalProps {
  service: Service | null;
  onClose: () => void;
}

const WHATSAPP_NUMBER = "558387022712";

const TIME_SLOTS = [
  "08:00",
  "08:30",
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
  "17:30",
];

export default function BookingModal({ service, onClose }: BookingModalProps) {
  const [selectedServiceIds, setSelectedServiceIds] = useState<string[]>([]);

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [name, setName] = useState("");
  const [notes, setNotes] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  /*
   * Sempre que o modal abrir através de um procedimento,
   * ele já começa selecionado.
   */
  useEffect(() => {
    if (service) {
      setSelectedServiceIds([service.id]);
    }
  }, [service]);

  /*
   * Converte os IDs selecionados nos objetos completos
   * dos procedimentos.
   */
  const selectedServices = useMemo(() => {
    return SERVICES.filter((item) => selectedServiceIds.includes(item.id));
  }, [selectedServiceIds]);

  /*
   * Soma o preço de todos os procedimentos.
   */
  const totalPrice = useMemo(() => {
    return selectedServices.reduce((total, item) => total + item.price, 0);
  }, [selectedServices]);

  /*
   * Soma a duração de todos os procedimentos.
   */
  const totalDuration = useMemo(() => {
    return selectedServices.reduce((total, item) => total + item.duration, 0);
  }, [selectedServices]);

  const minimumDate = useMemo(() => {
    const today = new Date();

    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  }, []);

  function toggleService(serviceId: string) {
    setSelectedServiceIds((current) => {
      if (current.includes(serviceId)) {
        return current.filter((id) => id !== serviceId);
      }

      return [...current, serviceId];
    });
  }

  function formatDate(value: string) {
    if (!value) return "";

    const [year, month, day] = value.split("-");

    return `${day}/${month}/${year}`;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (selectedServices.length === 0 || !date || !time || !name) {
      return;
    }

    setIsSubmitting(true);

    const servicesMessage = selectedServices
      .map(
        (item) =>
          `• ${item.title} — ${formatPrice(item.price)} — ${formatDuration(
            item.duration,
          )}`,
      )
      .join("\n");

    const message = [
      "Olá, Stefany! Gostaria de agendar um atendimento.",
      "",
      "Procedimentos:",
      servicesMessage,
      "",
      `Total: ${formatPrice(totalPrice)}`,
      `Duração estimada: ${formatTotalDuration(totalDuration)}`,
      "",
      `Data desejada: ${formatDate(date)}`,
      `Horário desejado: ${time}`,
      "",
      `Nome: ${name}`,
      notes ? `Observações: ${notes}` : "",
      "",
      "Aguardo a confirmação do horário.",
    ]
      .filter(Boolean)
      .join("\n");

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message,
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    setTimeout(() => {
      setIsSubmitting(false);
    }, 500);
  }

  if (!service) return null;

  return (
    <div
      className="fixed inset-0 z-[110] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="booking-title"
        className="flex max-h-[94vh] w-full max-w-[540px] flex-col overflow-hidden rounded-2xl bg-surface shadow-2xl"
      >
        {/* HEADER */}
        <div className="flex shrink-0 items-start justify-between px-6 pb-2 pt-6 sm:px-7">
          <div>
            <span className="font-body text-[10px] font-bold uppercase tracking-[0.16em] text-secondary">
              Reserva de horário
            </span>

            <h2
              id="booking-title"
              className="mt-1 font-display text-[27px] leading-tight text-on-surface"
            >
              Agende seu Atendimento
            </h2>

            <p className="mt-1 font-body text-xs text-on-surface-variant">
              Atendimento exclusivo com hora marcada em Ibiranga — Itambé/PE.
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar agendamento"
            className="flex h-8 w-8 shrink-0 items-center justify-center text-on-surface-variant transition hover:text-on-surface cursor-pointer"
          >
            <FiX className="h-5 w-5" />
          </button>
        </div>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="overflow-y-auto px-6 pb-6 pt-4 sm:px-7"
        >
          {/* PROCEDIMENTOS */}
          <fieldset>
            <legend className="mb-2.5 font-body text-[11px] font-bold uppercase tracking-wide text-on-surface">
              1. Escolha os procedimentos
            </legend>

            <p className="mb-3 font-body text-xs text-on-surface-variant">
              Você pode escolher mais de um procedimento.
            </p>

            <div className="space-y-2">
              {SERVICES.map((item) => {
                const selected = selectedServiceIds.includes(item.id);

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => toggleService(item.id)}
                    className={`flex w-full items-center justify-between rounded-xl border px-3 py-2.5 text-left transition cursor-pointer ${
                      selected
                        ? "border-primary bg-surface-container-high"
                        : "border-outline-variant/50 bg-surface hover:border-secondary/60"
                    }`}
                  >
                    <span>
                      <span className="block font-body text-sm font-medium text-on-surface">
                        {item.title}
                      </span>

                      <span className="mt-0.5 block font-body text-[11px] text-on-surface-variant">
                        {formatDuration(item.duration)} ·{" "}
                        {formatPrice(item.price)}
                      </span>
                    </span>

                    {/* Checkbox visual */}
                    <span
                      className={`flex h-5 w-5 items-center justify-center rounded-md border transition ${
                        selected
                          ? "border-primary bg-primary text-white"
                          : "border-outline-variant bg-surface"
                      }`}
                    >
                      {selected && <FiCheck className="h-3.5 w-3.5" />}
                    </span>
                  </button>
                );
              })}
            </div>
          </fieldset>

          {/* RESUMO */}
          {selectedServices.length > 0 && (
            <div className="mt-4 rounded-xl border border-outline-variant/40 bg-surface-container-high px-4 py-3">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="font-body text-[10px] font-bold uppercase tracking-wide text-secondary">
                    Resumo
                  </p>

                  <p className="mt-1 font-body text-xs text-on-surface-variant">
                    {selectedServices.length}{" "}
                    {selectedServices.length === 1
                      ? "procedimento selecionado"
                      : "procedimentos selecionados"}
                  </p>
                </div>

                <div className="text-right">
                  <p className="font-body text-sm font-bold text-on-surface">
                    {formatPrice(totalPrice)}
                  </p>

                  <p className="font-body text-[11px] text-on-surface-variant">
                    {formatTotalDuration(totalDuration)}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* DATA E HORÁRIO */}
          <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div>
              <label
                htmlFor="booking-date"
                className="mb-2 block font-body text-[11px] font-bold uppercase tracking-wide text-on-surface"
              >
                2. Data desejada
              </label>

              <div className="relative">
                <FiCalendar className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-secondary" />

                <input
                  id="booking-date"
                  type="date"
                  min={minimumDate}
                  value={date}
                  onChange={(event) => setDate(event.target.value)}
                  required
                  className="h-10 w-full rounded-lg border border-outline-variant bg-surface pl-9 pr-3 font-body text-sm text-on-surface outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="booking-time"
                className="mb-2 block font-body text-[11px] font-bold uppercase tracking-wide text-on-surface"
              >
                3. Horário
              </label>

              <div className="relative">
                <FiClock className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-secondary" />

                <select
                  id="booking-time"
                  value={time}
                  onChange={(event) => setTime(event.target.value)}
                  required
                  className="h-10 w-full appearance-none rounded-lg border border-outline-variant bg-surface pl-9 pr-3 font-body text-sm text-on-surface outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
                >
                  <option value="">Selecione</option>

                  {TIME_SLOTS.map((slot) => (
                    <option key={slot} value={slot}>
                      {slot}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* NOME */}
          <div className="mt-4">
            <label
              htmlFor="booking-name"
              className="mb-2 block font-body text-[11px] font-bold uppercase tracking-wide text-on-surface"
            >
              4. Seu nome completo
            </label>

            <input
              id="booking-name"
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Ex: Ana Clara Rodrigues"
              autoComplete="name"
              required
              className="h-10 w-full rounded-lg border border-outline-variant bg-surface px-3 font-body text-sm text-on-surface outline-none transition placeholder:text-on-surface-variant/50 focus:border-primary focus:ring-2 focus:ring-primary/10"
            />
          </div>

          {/* OBSERVAÇÕES */}
          <div className="mt-4">
            <label
              htmlFor="booking-notes"
              className="mb-2 block font-body text-[11px] font-bold uppercase tracking-wide text-on-surface"
            >
              Observações <span className="font-normal">(opcional)</span>
            </label>

            <input
              id="booking-notes"
              type="text"
              value={notes}
              onChange={(event) => setNotes(event.target.value)}
              placeholder="Ex: Primeira vez fazendo Brow Lamination"
              className="h-10 w-full rounded-lg border border-outline-variant bg-surface px-3 font-body text-sm text-on-surface outline-none transition placeholder:text-on-surface-variant/50 focus:border-primary focus:ring-2 focus:ring-primary/10"
            />
          </div>

          {/* CTA */}
          <button
            type="submit"
            disabled={isSubmitting || selectedServices.length === 0}
            className="mt-5 flex h-12 w-full items-center justify-center gap-2 rounded-full bg-primary px-5 font-body text-sm font-bold text-white shadow-md transition hover:bg-neutral-800 disabled:cursor-not-allowed disabled:opacity-60 cursor-pointer"
          >
            {isSubmitting ? (
              <>
                <FiClock className="h-4 w-4 animate-pulse" />
                Abrindo WhatsApp...
              </>
            ) : (
              <>
                <FiSend className="h-4 w-4 text-tertiary" />
                Confirmar via WhatsApp
              </>
            )}
          </button>

          <div className="mt-3 flex items-center justify-center gap-1.5">
            <FiMessageCircle className="h-3.5 w-3.5 text-secondary" />

            <p className="font-body text-[10px] text-on-surface-variant">
              Não cobramos taxa de agendamento antecipada. Pagamento no dia do
              atendimento.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
