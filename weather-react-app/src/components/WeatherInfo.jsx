import useLocalTime from "../State/useLocalTime";

export default function WeatherInfo({ data }) {
  const localTime = useLocalTime(data)
  return (
    <>
      <h2>{data.location.name}</h2>
      <h3>{data.current.temp_c}°C</h3>
      <img
        src={data.current.condition.icon}
        alt={data.current.condition.text}
        className="w-[100px]"
      />
      <p className="text-sm">
        {localTime ? localTime.toLocaleString() : "Loading..."}
      </p>
    </>
  );
}
