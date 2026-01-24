import { Purchases } from "@revenuecat/purchases-js";

const ENTITLEMENT_ID = "journey_pass";

let configured = false;

export function configureRevenueCat(appUserId: string): Purchases {
  if (configured && Purchases.isConfigured()) {
    // Switch user if already configured with a different ID
    const current = Purchases.getSharedInstance();
    if (current.getAppUserId() !== appUserId) {
      current.changeUser(appUserId);
    }
    return current;
  }

  const apiKey = process.env.NEXT_PUBLIC_REVENUECAT_API_KEY;
  if (!apiKey) {
    throw new Error("Missing NEXT_PUBLIC_REVENUECAT_API_KEY");
  }

  const purchases = Purchases.configure(apiKey, appUserId);
  configured = true;
  return purchases;
}

export async function checkPremiumStatus(): Promise<boolean> {
  if (!Purchases.isConfigured()) return false;

  try {
    return await Purchases.getSharedInstance().isEntitledTo(ENTITLEMENT_ID);
  } catch (e) {
    console.warn("[Journey] Failed to check entitlement:", e);
    return false;
  }
}

export async function purchaseJourneyPass(
  htmlTarget?: HTMLElement | null
): Promise<{ success: boolean; error?: string }> {
  if (!Purchases.isConfigured()) {
    return { success: false, error: "RevenueCat not configured" };
  }

  try {
    const offerings = await Purchases.getSharedInstance().getOfferings();
    const current = offerings.current;

    if (!current || current.availablePackages.length === 0) {
      return { success: false, error: "No offerings available" };
    }

    // Find the lifetime package
    const lifetimePackage =
      current.lifetime ?? current.availablePackages[0];

    const { customerInfo } = await Purchases.getSharedInstance().purchase({
      rcPackage: lifetimePackage,
      ...(htmlTarget ? { htmlTarget } : {}),
    });

    const isActive = ENTITLEMENT_ID in customerInfo.entitlements.active;
    return { success: isActive };
  } catch (e: unknown) {
    const err = e as { errorCode?: number; message?: string; userCancelled?: boolean };
    if (err.errorCode === 1 || err.userCancelled) {
      return { success: false, error: "cancelled" };
    }
    console.warn("[Journey] Purchase failed:", e);
    return { success: false, error: err.message || "Purchase failed" };
  }
}

export { ENTITLEMENT_ID };
