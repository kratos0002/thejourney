import CoverageTab from "../components/CoverageTab";
import { getEtymologyCoverage } from "../actions-coverage";

export default async function CoveragePage() {
  let coverage = null;
  let error = null;

  try {
    coverage = await getEtymologyCoverage();
  } catch (e) {
    error = e instanceof Error ? e.message : "Failed to load coverage data";
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Etymology Coverage</h1>
      </div>
      {error ? (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700">
          {error}
        </div>
      ) : coverage ? (
        <CoverageTab coverage={coverage} />
      ) : (
        <div className="text-gray-500">Loading...</div>
      )}
    </div>
  );
}
