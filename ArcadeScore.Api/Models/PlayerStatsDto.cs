using System;

namespace ArcadeScore.Api.Models
{
    public class PlayerStatsDto
    {
        public string Player { get; set; }
        public int TotalGames { get; set; }
        public double AverageScore { get; set; }
        public int HighestScore { get; set; }
        public int LowestScore { get; set; }
        public int TimesBrokeRecord { get; set; }
        public string TimePlaying { get; set; }
    }
}