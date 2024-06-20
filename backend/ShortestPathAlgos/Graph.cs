namespace TodoApi.ShortestPathAlgos;

public class Graph : IReadOnlyGraph
{
    #region Fields
    public static IReadOnlyGraph Empty = new Graph(0);
    private readonly int[][] graph;
    private readonly List<Node> nodes;

    int[][] IReadOnlyGraph.Graph => graph;
    IReadOnlyList<Node> IReadOnlyGraph.Nodes => nodes;
    #endregion

    #region Constructor
    public Graph(int numOfVertices)
    {
        graph = new int[numOfVertices][];
        nodes = [];

        for (int i = 0; i < numOfVertices; i++)
        {
            graph[i] = new int[numOfVertices];
        }
    }
    #endregion

    #region Methods
    public void AddEdge(int start, int end, int distance)
    {
        graph[start][end] = distance;
    }

    public void AddNode(Node node)
    {
        nodes.Add(node);
    }
    #endregion
}