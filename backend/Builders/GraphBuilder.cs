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
        var dataPath = currentDirectory + "../Data/graph.txt";
        var dataList = GraphReader.ReadGraphTxt(dataPath);
        var graph = new Graph(5);

        return graph;
    }
}