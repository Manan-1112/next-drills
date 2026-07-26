export default function Card({ title, description }: { title: string; description: string }) {
  return (
    <div className="card w-[20%] h-[20%] bg-white shadow-md rounded-lg p-4">
      <h2 className="text-xl font-bold mb-2 text-black">{title}</h2>
      <p className="text-gray-700">{description}</p>
    </div>
  );
}