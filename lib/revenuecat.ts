const ENTITLEMENT_ID = "journey_pass";

let purchasesModule: typeof import("@revenuecat/purchases-js") | null = null;
let configured = false;

async function getPurchases() {
  if (!purchasesModule) {
    purchasesModule = await import("@revenuecat/purchases-js");
  }
  return purchasesModule.Purchases;
}

export async function configureRevenueCat(appUserId: string) {
  const apiKey = process.env.NEXT_PUBLIC_REVENUECAT_API_KEY;
  if (!apiKey) return;

  try {
    const Purchases = await getPurchases();

    if (configured && Purchases.isConfigured()) {
      const current = Purchases.getSharedInstance();
      if (current.getAppUserId() !== appUserId) {
        current.changeUser(appUserId);
      }
      return;
    }

    Purchases.configure(apiKey, appUserId);
    configured = true;
  } catch (e) {
    console.warn("[Journey] RevenueCat configure failed:", e);
  }
}

export async function checkPremiumStatus(): Promise<boolean> {
  try {
    const Purchases = await getPurchases();
    if (!Purchases.isConfigured()) return false;
    return await Purchases.getSharedInstance().isEntitledTo(ENTITLEMENT_ID);
  } catch (e) {
    console.warn("[Journey] Failed to check entitlement:", e);
    return false;
  }
}

export async function purchaseJourneyPass(): Promise<{ success: boolean; error?: string }> {
  try {
    const Purchases = await getPurchases();
    if (!Purchases.isConfigured()) {
      return { success: false, error: "RevenueCat not configured" };
    }

    const offerings = await Purchases.getSharedInstance().getOfferings();
    const current = offerings.current;

    if (!current || current.availablePackages.length === 0) {
      console.warn("[Journey] No packages found. Current offering:", current);
      return { success: false, error: "No offerings available" };
    }

    const lifetimePackage = current.lifetime ?? current.availablePackages[0];

    const { customerInfo } = await Purchases.getSharedInstance().purchase({
      rcPackage: lifetimePackage,
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
