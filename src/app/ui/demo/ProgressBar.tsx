
export default function ProgressBar({ completes, totalItems }: { completes: number, totalItems: number }) {
  const { low, medium } = {
    low: 33,
    medium: 66,
  }
  const percentage = (completes * 100) / totalItems

  return (
    <div className="progress-bar">
      <div className={percentage < low ? 'low' : percentage < medium ? 'medium' : 'high'} style={{ width: `${percentage.toFixed(2)}%` }}>{percentage.toFixed(2)}%</div>
    </div>
  );
}

