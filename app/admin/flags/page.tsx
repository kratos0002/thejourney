import FeatureFlagsTab from "../components/FeatureFlagsTab";
import { getFeatureFlags, type FeatureFlag } from "../actions-flags";

export default async function FlagsPage() {
  let flags: FeatureFlag[] = [];
  try {
    flags = await getFeatureFlags();
  } catch {
    flags = [];
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Feature Flags</h1>
      </div>
      <FeatureFlagsTab initialFlags={flags} />
    </div>
  );
}
