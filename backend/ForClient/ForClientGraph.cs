using TodoApi.ShortestPathAlgos;

namespace TodoApi.ForClient;

public struct ForClientGraph (IReadOnlyList<Node> nodes, int[][] graph)
{
    public IReadOnlyList<Node> Nodes { get; set; } = nodes;
    public int[][] Graph { get; set; } = graph;
}