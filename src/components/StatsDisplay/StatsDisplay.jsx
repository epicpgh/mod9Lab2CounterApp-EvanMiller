

function StatsDisplay({stats}) {

  console.log(stats.wordcount);
    return (
      <div>
        <div>
          <div>Characters Count {stats.characterCount}</div>
        </div>
        <div>
          <div>Word Count: {stats.wordCount}</div>
        </div>
        <div>
          <div>Reading Time 0:00</div>
        </div>
      </div>
    );
  }
  
  export default StatsDisplay;