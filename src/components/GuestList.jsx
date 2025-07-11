import GuestItem from "./GuestItem";

export default function GuestList({ guests, onSelectGuest }) {
  return (
    <section className="guest-list">
      {guests.map((guest) => (
        <GuestItem key={guest.id} guest={guest} onSelectGuest={onSelectGuest} />
      ))}
    </section>
  );
}
