using TodoApi.ShortestPathAlgos;
using System;
using System.IO;
using TodoApi.FileOperation;

namespace TodoApi.Builders;

public static class GraphBuilder
{
    public static IReadOnlyGraph Build()
    {
        var currentDirectory = Directory.GetCurrentDirectory();
        var nodesPath = currentDirectory + "/Data/nodes.txt";
        var dataList = GraphReader.TxtLineReader(nodesPath);
        var graph = new Graph(dataList.Count - 1);

        if (dataList.Count <= 1)
        {
            return Graph.Empty;
        }

        for (int i = 1; i < dataList.Count; i++)
        {
            var data = dataList[i].Split(" ");
            graph.AddNode(new Node(int.Parse(data[0]), new Location(float.Parse(data[1]), float.Parse(data[2]))));
        }

        var graphPath = currentDirectory + "/Data/graph.txt";
        dataList = GraphReader.TxtLineReader(graphPath);

        if (dataList.Count <= 1)
        {
            return Graph.Empty;
        }

        for (int i = 1; i < dataList.Count; i++)
        {
            var data = dataList[i].Split(" ");
            graph.AddEdge(int.Parse(data[0]), int.Parse(data[1]), int.Parse(data[2]));
        }

        return graph;
    }
}