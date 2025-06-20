



  function StatsDisplay({ stats, showReadingTime }) {
    return (
      <div>
        <div>
          <h1>Characters Count {stats.characterCount}</h1>
        </div>
        <div>
          <h2>Word Count: {stats.wordCount}</h2>
        </div>
        {showReadingTime && (
          <div>
            <h3>Reading Time 0:00</h3>
          </div>
        )}
      </div>
    );
  }
  export default StatsDisplay;