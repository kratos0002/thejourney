import posthog from "posthog-js";

export function trackEvent(event: string, properties?: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  if (!posthog.__loaded) return;
  posthog.capture(event, properties);
}

export function identifyUser(userId: string, email?: string) {
  if (typeof window === "undefined") return;
  if (!posthog.__loaded) return;
  posthog.identify(userId, email ? { email } : undefined);
}

export function resetUser() {
  if (typeof window === "undefined") return;
  if (!posthog.__loaded) return;
  posthog.reset();
}
