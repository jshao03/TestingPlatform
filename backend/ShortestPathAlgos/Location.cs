namespace TodoApi.ShortestPathAlgos;

public struct Location(float lat, float lng)
{
    public float Lat { get; private set; } = lat;
    public float Lng { get; private set; } = lng;
}