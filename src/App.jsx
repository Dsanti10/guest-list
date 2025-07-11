import { useState } from "react";
import useQuery from "./components/GuestFetch";
import GuestItem from "./components/GuestItem";
import GuestList from "./components/GuestList";

export default function App() {
  const { guest: guests, loading, error } = useQuery("/guests");
  const [selectedGuest, setSelectedGuest] = useState(null);

  if (!guests) return <p>No guests found</p>;

  if (loading) return <p>Loading....</p>;
  if (error || !guests) return <p>{error}</p>;

  return (
    <>
      <h1>Guest List</h1>
      <p>Select a guest to see more details.</p>
      {selectedGuest ? (
        <GuestItem
          guest={selectedGuest}
          onBack={() => setSelectedGuest(null)}
        />
      ) : (
        <GuestList guests={guests} onSelectGuest={setSelectedGuest} />
      )}
    </>
  );
}
