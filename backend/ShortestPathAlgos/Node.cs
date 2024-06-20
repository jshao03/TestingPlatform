namespace TodoApi.ShortestPathAlgos;

public struct Node (int id, Location location)
{
    public int Id { get; set; } = id;
    public Location Location { get; set; } = location;
}