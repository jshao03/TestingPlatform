namespace TodoApi.FileOperation;

public static class GraphReader
{
    public static IReadOnlyList<string> ReadGraphTxt(string path)
    {
        try
        {
            // Read all lines from the file into a string array
            var lines = File.ReadAllLines(path);

            return [.. lines];
        }
        catch (IOException e)
        {
            Console.WriteLine($"Error reading the file: {e.Message}");
            return [];
        }
    }
}