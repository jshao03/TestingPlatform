namespace TodoApi.ShortestPathAlgos;

public interface IReadOnlyGraph
{
    public IReadOnlyList<Node> Nodes { get; }
    public int[][] Graph { get; }
}