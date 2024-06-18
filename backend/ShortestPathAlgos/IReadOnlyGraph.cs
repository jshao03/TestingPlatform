namespace TodoApi.ShortestPathAlgos;

public interface IReadOnlyGraph
{
    EdgeMetrics[][] Graph { get; }
}