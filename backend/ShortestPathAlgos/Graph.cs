namespace TodoApi.ShortestPathAlgos;

public class Graph : IReadOnlyGraph
{
    #region Fields
    private readonly EdgeMetrics[][] graph;

    EdgeMetrics[][] IReadOnlyGraph.Graph => graph;
    #endregion

    #region Constructor
    public Graph(int numOfVertices)
    {
        graph = new EdgeMetrics[numOfVertices][];

        for (int i = 0; i < numOfVertices; i++)
        {
            graph[i] = new EdgeMetrics[numOfVertices];
        }
    }
    #endregion

    #region Methods
    public void AddEdge(int start, int end, EdgeMetrics edgeMetrics)
    {
        graph[start][end] = edgeMetrics;
    }
    #endregion
}