
export default function ProgressBar({completes, totalItems}: {completes: number, totalItems: number}) {
  const percentage = (completes * 100) / totalItems
  return (
    <div className="progress-bar">
      <div className="progress-bar__progress" style={{width: `${percentage}%`}}>{percentage}%</div>
    </div>
  );
}

